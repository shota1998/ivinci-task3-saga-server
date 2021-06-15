const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const docClient = new AWS.DynamoDB.DocumentClient();

const params = [
  {
    TableName: 'Items',
    Item: {
      type: '0',
      id: '0',
      title: 'sampleTitle0',
      value: 3.0,
      description: 'sampleDescription0',
      quantity: 0,
    },
  },
  {
    TableName: 'Items',
    Item: {
      type: '0',
      id: '1',
      title: 'sampleTitle1',
      value: 5.0,
      description: 'sampleDescription1',
      quantity: 0,
    },
  },
];

for (param of params) {
  docClient.put(param, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
