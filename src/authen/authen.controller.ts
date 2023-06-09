import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthenService } from './authen.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';
import { UserToken } from './models/UserToken';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('login')
@Controller()
export class AuthenController {
  constructor(private readonly authService: AuthenService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: any): Promise<UserToken> {
    return this.authService.login(req.user);
  }
}
