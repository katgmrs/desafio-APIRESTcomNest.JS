import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // 1. Tratamento de erro 409 (Conflict) para unicidade
    const existingUser = await this.usersRepository.findOne({
      where: [{ email: createUserDto.email }, { username: createUserDto.username }],
    });
    if (existingUser) {
      if (existingUser.email === createUserDto.email) {
        throw new ConflictException('Este e-mail já está em uso.');
      }
      if (existingUser.username === createUserDto.username) {
        throw new ConflictException('Este nome de usuário já está em uso.');
      }
    }

    // 2. Usar o DTO para criar o objeto
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    // 3. Tratamento de erro 404 (Not Found)
    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    return user;
  }

  async findOneByUsername(username: string): Promise<User | null> {
    // 4. Correção para retornar a senha no login
    return this.usersRepository.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'name', 'password'],
    });
  }

  async update(id: number, updateUserDto: any): Promise<User> { 
    const user = await this.findOne(id); // O findOne já lança um erro se não encontrar
    if (updateUserDto.password) {
        user.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return this.usersRepository.save({ ...user, ...updateUserDto });
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Usuário não encontrado para exclusão.');
    }
  }
}