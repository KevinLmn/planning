var SibApiV3Sdk = require('sib-api-v3-typescript');

var apiInstance = new SibApiV3Sdk.CreateContact();

// Configure API key authorization: api-key

var apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"

// Configure API key authorization: partner-key

var partnerKey = apiInstance.authentications['partnerKey'];
partnerKey.apiKey = "YOUR API KEY"

var createContact = { 'email' : "john@doe.com" };

apiInstance.createContact(createContact).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});