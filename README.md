# emscriptem-lambda

> An example of how to use Emscripten to compile C code to WebAssembly and run it in AWS Lambda

https://5fmdwn6crdimchpxeywfphd75y0jrdcg.lambda-url.us-east-1.on.aws/

## Useful links:
- https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm
- https://emscripten.org/docs/getting_started/Tutorial.html
- https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#interacting-with-code-ccall-cwrap
- https://web.dev/emscripten-npm/
- https://dev.to/azure/embedding-emscripten-in-a-nodejs-library-3hdm
- https://www.cncf.io/blog/2021/08/25/webassembly-serverless-functions-in-aws-lambda/
- https://timdaub.github.io/2021/02/25/emscripten-wasm/
- https://web.dev/emscripting-a-c-library/

## How to run

### Clone the repo
```sh
git clone git@github.com:facutk/emscriptem-lambda.git
```

### Configure the environment

- AWS
  - export AWS credentials
  - test command: `aws sts get-caller-identity --profile <profile-name>`
  - Lambda function name `emscripten-lambda`
- Github
  - Configure [repo secrets](https://github.com/facutk/emscriptem-lambda/settings/secrets/actions) using `env.example` file
- Local
  - .env file


## Local GitHub Actions testing
- install [act](https://github.com/nektos/act)
```sh
brew install act
```

- run the action
```sh
act --secret-file .env
```
