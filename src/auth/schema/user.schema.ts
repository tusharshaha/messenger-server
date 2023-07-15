import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: [true, 'Please give your name'],
    trim: true,
    minLength: [3, 'Name must be at least 3 characters.'],
    maxLength: [100, 'Name is too large'],
  })
  name: string;

  @Prop({
    unique: true,
    required: [true, "Email can't be empty!"],
    trim: true,
    validate: {
      validator: (value: string) => {
        const regex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
        return regex.test(value);
      },
      message: 'Please provide a valid email',
    },
  })
  email: string;

  @Prop({
    required: [true, "Password can't be empty!"],
    validate: {
      validator: (value: string) => {
        const regex = /^(?=.*[a-z])(?=.*\d).{6,}$/;
        return regex.test(value);
      },
      message: 'your password is not strong enough.',
    },
  })
  password: string;

  @Prop()
  userExpires: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// create TTL index for user
UserSchema.index({ userExpires: 1 }, { expireAfterSeconds: 0 });
