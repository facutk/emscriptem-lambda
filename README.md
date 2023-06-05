# emscriptem-lambda

https://5fmdwn6crdimchpxeywfphd75y0jrdcg.lambda-url.us-east-1.on.aws/

## Local GitHub Actions testing
- install [act](https://github.com/nektos/act)
```sh
brew install act
```

- run the action
```sh
act --secret-file .env
```

## Useful links:
- https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm
- https://emscripten.org/docs/getting_started/Tutorial.html
- https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#interacting-with-code-ccall-cwrap
- https://web.dev/emscripten-npm/
- https://dev.to/azure/embedding-emscripten-in-a-nodejs-library-3hdm
- https://www.cncf.io/blog/2021/08/25/webassembly-serverless-functions-in-aws-lambda/
- https://timdaub.github.io/2021/02/25/emscripten-wasm/

## Done

- AWS
  - export AWS credentials
  - test command: `aws sts get-caller-identity --profile <profile-name>`
  - Lambda function name `emscripten-lambda`
- Github
  - Configure [repo secrets](https://github.com/facutk/emscriptem-lambda/settings/secrets/actions) using `env.example` file
- Local
  - .env file
