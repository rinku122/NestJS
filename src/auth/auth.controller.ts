import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './user-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() userDto: UserDto): Promise<void> {
    return this.authService.signUp(userDto);
  }

  @Post('/signin')
  signIn(@Body() userDto: UserDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(userDto);
  }
}
