#!/usr/bin/env bash

compile=`cat compile.sh`

docker run \
  --rm \
  -v $(pwd):/src \
  -u $(id -u):$(id -g) \
  emscripten/emsdk \
    bash -c "$compile"
    # emcc demo.cpp \
    #   -o demo.js \
    #   -s MODULARIZE \
    #   -s WASM=1 \
    #   -s EXPORTED_RUNTIME_METHODS=ccall \
    #   -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    #   -s EXPORTED_FUNCTIONS="['_malloc', '_free']" \
    #   -s SINGLE_FILE=1
