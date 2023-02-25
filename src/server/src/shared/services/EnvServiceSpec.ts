import { EnvKeyCollection } from "../@constants/EnvKeyCollection"
import { EnvService } from "./EnvService"

describe("EnvServiceSpec", () => {
    const stateEnv = process.env;

    afterEach(() => {
        jest.clearAllMocks();
    })

    function changeAttribute(key: EnvKeyCollection, data: string): void {
        stateEnv[key] = data;
    }

    describe('Should have SERVER_PORT', () => {
        it('Equal to 8200', () => {
            changeAttribute(EnvKeyCollection.SERVER_PORT, '8200');

            expect(EnvService.instance.serverPort).toBe(8200);
        })
    })
})