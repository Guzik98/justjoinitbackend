import { Body, Controller, Logger, Post } from "@nestjs/common";
import { AuthCredentialsDto } from "./dto/auth-credenrials.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  private logger = new Logger('TaskController');

  constructor( private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto ) : Promise<void> {
      this.logger.verbose( `User ${authCredentialsDto.username} właśnie probóje stworzyć konto`)
      return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto ): Promise<{ accessToken : string}> {
    this.logger.verbose( `User ${authCredentialsDto.username} właśnie sie probuje zalogować`)
    return this.authService.signIn(authCredentialsDto);
  }

}