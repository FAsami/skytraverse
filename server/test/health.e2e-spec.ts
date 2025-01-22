import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TransformInterceptor } from '../src/common/interceptors/transform.interceptor';
import { GlobalExceptionFilter } from '../src/common/filters/http-exception.filter';
import { PrismaTestHelper } from './helpers/prisma-test-helper';

describe('HealthController (e2e)', () => {
  let app: INestApplication;
  let prismaHelper: PrismaTestHelper;

  beforeAll(async () => {
    prismaHelper = new PrismaTestHelper();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(new GlobalExceptionFilter());
    await app.init();

    await prismaHelper.cleanDatabase();
  });

  afterEach(async () => {
    await app.close();
  });

  afterAll(async () => {
    await prismaHelper.disconnect();
  });

  describe('/api/v1/health (GET)', () => {
    it('should return health check with 200 status', () => {
      return request(app.getHttpServer())
        .get('/api/v1/health')
        .expect(200)
        .expect((res) => {
          expect(res.body).toEqual({
            success: true,
            data: {
              status: 'ok',
              timestamp: expect.any(String),
              uptime: expect.any(Number),
              environment: expect.any(String),
            },
            error: null,
            timestamp: expect.any(String),
            path: '/api/v1/health',
          });
        });
    });

    it('should return valid timestamps', () => {
      return request(app.getHttpServer())
        .get('/api/v1/health')
        .expect(200)
        .expect((res) => {
          expect(new Date(res.body.data.timestamp).toString()).not.toBe(
            'Invalid Date',
          );
          expect(new Date(res.body.timestamp).toString()).not.toBe(
            'Invalid Date',
          );
        });
    });
  });
});
