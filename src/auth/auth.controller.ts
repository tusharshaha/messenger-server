import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { handleError } from 'src/utils/handleError';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    try {
      return this.authService.signup(signupDto);
    } catch (err) {
      return handleError(err);
    }
  }
}
