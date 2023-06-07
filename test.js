const factory = require('./demo.js');

const roundFloat = (floatNumber, precision) => parseFloat((floatNumber).toFixed(precision))
const roundBTC = (floatNumber) => roundFloat(floatNumber, 8)

factory().then((instance) => {
  // instance._sayHi(); // direct calling works
  // instance.ccall("sayHi"); // using ccall etc. also work
  // console.log(instance._daysInWeek()); // values can be returned, etc.

  const cellStatus = instance._add(4, 1);
  console.log(cellStatus)

  // const buf = instance._malloc(16);
  // Module.HEAPU8.set(myTypedArray, buf);
  // Module.ccall('my_function', 'number', ['number'], [buf]);
  // instance._free(buf);

  // console.log(instance)

  // const add = instance.cwrap('add ', 'number', ['number', 'number']);
  // add(1,2);

  // console.log(getCellStatus(0, 1));


  // Call the findMinimum function from JavaScript
  const numbers = [30000.5, 25000.2, 4.7, 0.2, 5.1];
  let length = numbers.length;

  // Instantiate the module
  // const module = MyModule(); // 'MyModule' is the exported name specified during compilation

  // Get a pointer to the numbers array
  const arrayPointer = instance._malloc(length * Float32Array.BYTES_PER_ELEMENT);

  // Copy the numbers array to the Emscripten heap
  instance.HEAPF32.set(numbers, arrayPointer / Float32Array.BYTES_PER_ELEMENT);

  // Call the C++ function and get the result
  const result = instance._find_minimum(arrayPointer, length);

  // Clean up the allocated memory
  instance._free(arrayPointer);

  console.log('Minimum:', roundBTC(result));

  // const roundUSD = (floatNumber) => roundFloat(floatNumber, 2)
  console.log('identity:', roundBTC(instance._identity(0.1)));

  // console.log('file_access:', instance._file_access('hi hi', 0));



  const charactersToPass = "Hello!";
  length = charactersToPass.length;

  const stringPointer = instance._malloc(length + 1);


  for (let i = 0; i < length; i++) {
    instance.HEAP8[stringPointer + i] = charactersToPass.charCodeAt(i);
  }

  instance.HEAP8[stringPointer + length] = 0;

  console.log('process_string:', instance._process_string(stringPointer, 0));
  instance._free(stringPointer);
});
