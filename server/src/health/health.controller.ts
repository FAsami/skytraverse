import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthResponseDto } from './dto/health-response.dto';
import { ApiResponseDecorator } from '../common/decorators/api-response.decorator';

@ApiTags('health')
@Controller('api/v1/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({
    summary: 'Check API health',
    description: 'Returns the current health status of the API',
  })
  @ApiResponseDecorator(HealthResponseDto)
  check(): HealthResponseDto {
    return this.healthService.getHealth();
  }
}
