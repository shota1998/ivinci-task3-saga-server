const AWS = require('aws-sdk');

AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const docClient = new AWS.DynamoDB.DocumentClient();

const deleteItem = async (item) => {
  console.log(item);
  try {
    const params = {
      TableName: 'Cart',
      Key: {
        type: item.type,
        id: item.id,
      },
    };
    await docClient.delete(params).promise();
  } catch (err) {
    console.log('DELETE failed. Server error---.');
    console.log(err);
    return false;
  }

  console.log('DELETE success---.');
  return true;
};

module.exports = deleteItem;
