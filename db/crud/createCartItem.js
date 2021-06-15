const AWS = require('aws-sdk');

AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const docClient = new AWS.DynamoDB.DocumentClient();

const post = async (item) => {
  try {
    const params = {
      TableName: 'Cart',
      Item: item,
    };
    await docClient.put(params).promise();
  } catch (err) {
    console.log('POST failed. Server error---.');
    console.log(err);
    return false;
  }

  console.log('POST success---.');
  return true;
};

module.exports = post;
