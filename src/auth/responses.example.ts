import { ApiProperty } from "@nestjs/swagger";

export class LoginResponse {
    @ApiProperty({
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZTNAZ21haWwuY29tIiwiaWQiOjMsImlhdCI6MTY5MjgxNzU4MywiZXhwIjoxNjkyOTAzOTgzfQ.3kNQzkPmRON-lUQ1z8mGKVdum4ntHgr0XexVHquXF10',
    })
    token: string;
  }
  
  export class RegistrationResponse {
    @ApiProperty({
      example: 'example@gmail.com',
    })
    email: string;
    @ApiProperty({
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZTNAZ21haWwuY29tIiwiaWQiOjMsImlhdCI6MTY5MjgxNzU4MywiZXhwIjoxNjkyOTAzOTgzfQ.3kNQzkPmRON-lUQ1z8mGKVdum4ntHgr0XexVHquXF10',
    })
    token: string;
  }