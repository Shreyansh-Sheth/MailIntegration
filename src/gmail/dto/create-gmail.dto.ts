import { IsString } from 'class-validator';

export class CreateGmailDto {
  @IsString()
  code: string;

  @IsString()
  userId: string;
}
