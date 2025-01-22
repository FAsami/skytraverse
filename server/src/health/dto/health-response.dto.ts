import { ApiProperty } from '@nestjs/swagger';

export class HealthResponseDto {
  @ApiProperty({
    enum: ['ok', 'error'],
    example: 'ok',
    description: 'The current status of the application',
  })
  status: 'ok' | 'error';

  @ApiProperty({
    example: '2024-03-14T12:00:00.000Z',
    description: 'The current timestamp',
  })
  timestamp: string;

  @ApiProperty({
    example: 123.45,
    description: 'The application uptime in seconds',
  })
  uptime: number;

  @ApiProperty({
    example: 'development',
    description: 'The current environment',
  })
  environment: string;
}
