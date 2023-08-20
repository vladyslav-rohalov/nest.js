import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be a String' })
  readonly value: string;
  @IsNumber({}, { message: 'Must be a Number' })
  readonly userId: number;
}
