const AWS = require('aws-sdk');
AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Product',
};

const get = async () => {
  try {
    const result = await docClient.scan(params).promise();
    console.log('GET success---.');
    return result.Items;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = get;
