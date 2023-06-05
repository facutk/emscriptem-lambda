const handler = async(event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from github actions!'),
  };
  return response;
};

module.exports = {
  handler
};
