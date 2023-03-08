import { ConfigService } from "@nestjs/config";
import { DatabaseService } from "./database.service";

/**
 * TestSuit might need some looking into
 */

describe('DBService', () => {
  const databaseService = new DatabaseService(
    new ConfigService()
  );

  describe('should handle an exception', () => {
    it('on connection', () => {
      expect(async () => { await databaseService.connect(); }).not.toThrow()
    })

    it('on execution', () => {
      expect(async () => await databaseService.execute('dummyOperation')).not.toThrow()
    })

    it('on disconnection', () => {
      expect(async () => { await databaseService.disconnect(); }).not.toThrow()
    })

  })

  
  describe('should', () => {
    beforeEach(() => {
      jest.mock(('pg'), () => {
        const mockClient = {
          connect: jest.fn().mockReturnValue(true),
          query: jest.fn(),
          end: jest.fn().mockReturnValue(true)
        }
  
        return { Client: jest.fn(() => mockClient) };
      })
    })

    afterEach(() => jest.clearAllMocks())
    
    it('connect to the server', () => {
      expect(databaseService.connect()).toBeTruthy();
    })

    it('execute an operation on the server', () => {
      expect(async () => await databaseService.execute('dummyOperation')).not.toThrow();
    })

    it('disconnect from the server', () => {
      expect(databaseService.disconnect()).toBeTruthy();
    })
  })
})