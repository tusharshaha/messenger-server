import { BadRequestException } from '@nestjs/common';

export function handleError(error: any) {
  if (error.name === 'ValidationError') {
    let validationErrors = '';
    for (const field in error.errors) {
      if (error.errors.hasOwnProperty(field)) {
        validationErrors = error.errors[field].message;
      }
    }
    throw new BadRequestException(validationErrors);
  }
  if (error.message.includes('E11000 duplicate')) {
    const message = 'Email already exists please login.';

    throw new BadRequestException(message);
  }
  throw new BadRequestException(error.message);
}
