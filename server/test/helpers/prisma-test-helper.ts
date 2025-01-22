import { PrismaService } from '../../src/prisma/prisma.service';

export class PrismaTestHelper {
  private prisma: PrismaService;

  constructor() {
    this.prisma = new PrismaService();
  }

  async cleanDatabase() {
    await this.prisma.cleanDatabase();
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
