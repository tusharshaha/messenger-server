import { Exclude } from 'class-transformer';
import { IsString, IsNotEmpty, Matches, IsEmail } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z ]+$/, { message: 'Your name is not valid' })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @Exclude()
  readonly userExpires: Date;
}
