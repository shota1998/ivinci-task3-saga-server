const AWS = require('aws-sdk');
AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const dynamodb = new AWS.DynamoDB();

const params = [
  {
    TableName: 'Items',
    AttributeDefinitions: [
      {
        AttributeName: 'type',
        AttributeType: 'S',
      },
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'type',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'id',
        KeyType: 'RANGE',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
  {
    TableName: 'Cart',
    AttributeDefinitions: [
      {
        AttributeName: 'type',
        AttributeType: 'S',
      },
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'type',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'id',
        KeyType: 'RANGE',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
];

for (param of params) {
  dynamodb.createTable(param, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
