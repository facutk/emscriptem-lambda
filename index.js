const factory = require('./demo.js');

const handler = async(event) => {
  const instance = await factory();

  const sum = instance._add(4, 1);

  const response = {
      statusCode: 200,
      body: JSON.stringify(`C sum: ${sum}`),
  };
  return response;
};

module.exports = {
  handler
};
