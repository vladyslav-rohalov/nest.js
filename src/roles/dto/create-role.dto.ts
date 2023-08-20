import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({ message: 'Must be a String' })
  readonly value: string;
  @IsString({ message: 'Must be a String' })
  readonly description: string;
}
