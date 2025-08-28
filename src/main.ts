import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
  
    if (username === 'admin' && password === 'password') {
      return { userId: 1, username: 'admin' };
    }
    return null;
  }

  async login(user: any) {
    // Exemplo: gerar token JWT
    return {
      access_token: 'token_gerado_aqui'
    };
  }
}
