import ConfigurableAxiosService from "../basis/ConfigurableAxiosService";
import SmokeTestWebProto from "../../build/generated/proto/SmokeTest/SmokeTest.SmokeTestProto_grpc_web_pb";
import ConfigurationService from "../basis/ConfigurationService";

export default class SmokeTestAxiosProtobufService extends ConfigurableAxiosService {

    constructor(grpc = false, configuration = new ConfigurationService(),
                optionalHostname = "localhost", optionalCredentials = {}, optionalGrpcOptions = {}) {
        super(configuration);

        this.protobuf = {
            request: {
                builder: proto.SmokeTest.SmokeTestRequest
            },
            response: {
                builder: proto.SmokeTest.SmokeTestResponse
            }
        }

        if (grpc) {
            const hostname = optionalHostname || configuration.VALUE("grpc_hostname"),
                credentials = optionalCredentials || configuration.VALUE("grpc_credentials"),
                grpcOptions = optionalGrpcOptions || configuration.VALUE("grpc_options");
            this.grpc = {
                service: new SmokeTestWebProto.SmokeTestServicePromiseClient(hostname, credentials, grpcOptions)
            }
        }
    }
}
