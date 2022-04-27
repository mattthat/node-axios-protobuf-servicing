# node-axios-protobuf-servicing

This is a reference implementation of an extensible, configurable, mostly generated, Axios and gRPC (Google Protobuf) based JavaScript client.

The idea is, a single ES6 service class is responsible for providing a generated gRPC client, generated message builders, and a place to encapsulate an Axios based REST implementation for those same Protobuf messages.

## Pre-reqs
```bash

$ brew install protoc-gen-grpc-web
$ npm install

```

# Building

```bash

$ npm run clean && npm run build

> node-axios-protobuf-servicing@1.0.0 clean /Some/Place/node-axios-protobuf-servicing
> rimraf build


> node-axios-protobuf-servicing@1.0.0 build /Some/Place/node-axios-protobuf-servicing
> npm-run-all generate-protobuf


> node-axios-protobuf-servicing@1.0.0 generate-protobuf /Some/Place/node-axios-protobuf-servicing
> npm-run-all initiate-build-location run-protoc


> node-axios-protobuf-servicing@1.0.0 initiate-build-location /Some/Place/node-axios-protobuf-servicing
> mkdir -p build/generated


> node-axios-protobuf-servicing@1.0.0 run-protoc /Some/Place/node-axios-protobuf-servicing
> protoc --proto_path=src --js_out=import_style=commonjs:build/generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:build/generated src/proto/**

```

# Testing

```bash

$ npm run test

> node-axios-protobuf-servicing@1.0.0 test /Some/Place/node-axios-protobuf-servicing
> npm-run-all clean build && jest


> node-axios-protobuf-servicing@1.0.0 clean /Some/Place/node-axios-protobuf-servicing
> rimraf build


> node-axios-protobuf-servicing@1.0.0 build /Some/Place/node-axios-protobuf-servicing
> npm-run-all generate-protobuf


> node-axios-protobuf-servicing@1.0.0 generate-protobuf /Some/Place/node-axios-protobuf-servicing
> npm-run-all initiate-build-location run-protoc


> node-axios-protobuf-servicing@1.0.0 initiate-build-location /Some/Place/node-axios-protobuf-servicing
> mkdir -p build/generated


> node-axios-protobuf-servicing@1.0.0 run-protoc /Some/Place/node-axios-protobuf-servicing
> protoc --proto_path=src --js_out=import_style=commonjs:build/generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:build/generated src/proto/**


 PASS  src/SmokeTest/SmokeTestAxiosProtobufService.test.js
  SmokeTestAxiosProtobufService
    ✓ inhale & exhale for type (6 ms)
    ✓ inhale & exhale failure (1104 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.787 s, estimated 2 s
Ran all test suites.



```
