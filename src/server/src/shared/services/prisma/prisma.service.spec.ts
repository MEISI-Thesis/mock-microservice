import { PrismaService } from "./prisma.service";

/**
 * Skipped until PrismaModel generation
 */
describe.skip("PrismaService", () => {
  it('should have an instance of client', () => {
    const prismaService = new PrismaService();  

    expect(prismaService.client).toBeTruthy()
  })
})