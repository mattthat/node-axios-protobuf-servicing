import SmokeTestAxiosProtobufService from "./SmokeTestAxiosProtobufService.js";
import ConfigurationService from "../basis/ConfigurationService";
global.XMLHttpRequest = () => {
    return {
        open: jest.fn(),
        addEventListener: jest.fn(),
        setRequestHeader: jest.fn(),
        send: jest.fn(),
        abort: jest.fn(),
        getResponseHeader: jest.fn(),
        getAllResponseHeaders: jest.fn(),
        status: 200,
        readyState: 4,
        response: ""
    }
};

describe("SmokeTestAxiosProtobufService", () => {

    test("inhale & exhale for type",  () => {

        const smokeTestService = new SmokeTestAxiosProtobufService(true,
            new ConfigurationService(), "http://no-server", {}, {});

        const request = new smokeTestService.protobuf.request.builder();
        request.setInhale("puff");

        const response = smokeTestService.grpc.service.smoke(request);

        expect(response.toString())
            .toBe("[object Promise]");
    });

    test("inhale & exhale failure",  async () => {

        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 1);

        const smokeTestService = new SmokeTestAxiosProtobufService(true,
            new ConfigurationService(), "http://no-server", {}, {});

        const request = new smokeTestService.protobuf.request.builder();
        request.setInhale("puff");

        try {
            const response = await smokeTestService.grpc.service.smoke(request,
                { deadline: deadline.getTime() });
        } catch(error) {
            expect(error.toString())
                .toBe("RpcError: Request timed out");
        }
    });

});
