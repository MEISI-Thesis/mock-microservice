import { ConfigService } from "@nestjs/config";
import { DatabaseService } from "./database.service";

describe('DBService', () => {
  const databaseService = new DatabaseService(
    new ConfigService()
  );

  describe('should', () => {
    jest.mock(('pg'), () => ({
      client: jest.fn,
      connect: jest.fn,
      disconnect: jest.fn
    }))

    it('connect to the server', () => {})
    it('disconnect from the server', () => {})
    it('execute an operation on the server', () => {})
  })

  describe('should handle an exception', () => {
    it('on connection', () => {
      void expect(async () => { await databaseService.connect(); }).rejects.toThrow()
    })

    it('on disconnection', () => {
      void expect(async () => { await databaseService.disconnect(); }).rejects.toThrow()
    })
    it('on execution', () => {
      void expect(async () => { await databaseService.execute(''); }).rejects.toThrow()
    })

  })
})