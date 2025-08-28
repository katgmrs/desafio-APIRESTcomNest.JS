import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Valida usuário pelo username e password
  async validateUser(username: string, password: string): Promise<any> {
    // Busca usuário pelo username diretamente 
    const user = await this.usersService.findOneByUsername(username) as { password: string, [key: string]: any } | null;
    if (user !== null && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user; // retira a senha do resultado
      return result;
    }
    return null; // usuário não encontrado ou senha errada
  }

  async login(user: any) {
  const payload = { username: user.username, sub: user.userId };
  return {
    access_token: this.jwtService.sign(payload),
  };
}
}
