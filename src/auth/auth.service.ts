import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signup(signupDto: SignupDto) {
    const { name, email, password } = signupDto;
    const userBody = { name, email, password };
    const user = new this.userModel(userBody);
    const date = new Date();
    // expire date is 30 days.
    date.setDate(date.getDate() + 30);
    user.userExpires = date;
    await user.save({ validateBeforeSave: true });

    return name;
  }
}
