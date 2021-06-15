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
  },
  {
    TableName: 'Cart',
  },
];

for (param of params) {
  dynamodb.deleteTable(param, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
