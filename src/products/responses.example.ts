import { ApiProperty } from '@nestjs/swagger';

export class ResSuccess {
  @ApiProperty({
    example: 'BMW X6',
  })
  title: string;

  @ApiProperty({
    example: 'Fast SUV and more...',
  })
  description: string;

  @ApiProperty({
    example: 50000,
  })
  price: number;

  @ApiProperty({
    example: 1,
  })
  id: number;

  @ApiProperty({
    example: '2023-08-24T08:33:01.284Z',
  })
  createdAt: string;
  @ApiProperty({
    example: '2023-08-24T08:33:01.284Z',
  })
  updatedAt: string;
}

export class ResCreated extends ResSuccess {
  @ApiProperty({
    example: { id: 3 },
  })
  user: { id: number };
}

export class ResOne extends ResSuccess {
  @ApiProperty({
    example: { id: 3 },
  })
  user: { id: number };
}

export class ResUpdated {
  @ApiProperty({
    example: 'Product has been successfully updated',
  })
  message: string;
}
