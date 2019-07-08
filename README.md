# Intro
This library provides a thin wrapper SDK for the calend.ly API. For up-to-date information on the calend.ly API please visit their [developer docs](https://developer.calendly.com/docs)

# Get your API Key
1. Log into [Calend.ly](https://calendly.com/login)
2. Navigate to the Integrations page
3. Copy your API Key
See [Official Docs](https://developer.calendly.com/docs/getting-your-authentication-token) for more details.

# Quickstart
Install package in your node project.
```sh
npm install --save node-calendly-sdk
```

```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

// Create a webhook
calendly_client.webhooks.create("https://mycallbackurl.com/handler")
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
		/**
			{
				"id": <hook_id>
			}
		*/
	});
```


# Functions
Below is a description of the functions available for supported resources in the V1 API along with some basic usage examples.

## Webhooks
### Create A Webhook
Create a webhook that will receive notifications from Calendly when events are scheduled or cancelled. 

***Parameters:***
- URL: Callback URL for webhook
- events: Array of events

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

// Create a webhook
calendly_client.webhooks.create("https://mycallbackurl.com/handler")
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
	});
```

***Console Output:***
```json
{
	"id": <hook_id>
}
```

***Errors:***
If there are errors when submitting a request they will be returned in the JSON, result, you will need to check for and handle these manually.

- Unauthorized
```json
{
	"type": "authentication_error",
	"message": "Invalid token"
}
```

- Forbidden
```json
{
	"type": "authorization_error",
	"message": "Your current organization should be on premium tier"
}
```

- Conflict
```json
{
	"type": "conflict_error",
	"message": "Hook with this url already exists"
}
```

- Unprocessable Entity
```json
{
	"type": "validation_error",
	"message": "Validation failed",
	"errors": {
		"url": ["can't be empty"],
		"events": ["is not included in the list"],
		"base": ["some error"],
		<field_name>: <error_messages_array>
	}
}
```

### Get Webhook by ID
Fetches a specific webhook by ID. 

***Parameters:***
- id: ID of webhook.

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

// Get the webhook that has the id of 1234
calendly_client.webhooks.get(1234)
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
	});
```

***Console Output:***
```json
{
  "data":[
    {
      "type":"hooks",
      "id": 1234,
      "attributes":{
        "url":"https://mycallbackurl.com/handler",
        "created_at":"2016-08-23T19:15:24Z",
        "state":"active",
        "events":[
          "invitee.created",
          "invitee.canceled"
        ]
      }
    }
  ]
}
```


### Get list of all Webhooks
List all of the webhooks configured for this account. 

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

// Create a webhook
calendly_client.webhooks.list()
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
```

### Remove a Webhook
Remove a webhook so that it is no longer active.

***Parameters:***
- id: ID of your webhook.

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

// Create a webhook
calendly_client.webhooks.remove("your-webhook-id")
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
```

## Event Types
### Get list of all event types for User.
List all of the configured event types for this account.

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

calendly_client.events.list()
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
```

## Users
### Get Account information.
List information about this account.

***Usage:***
 ```javascript
import Calendly from ('node-calendly-sdk')

calendly_client = new Calendly("YOUR-API-TOKEN")

calendly_client.users.about_me()
	.then(function(result) {
		console.log(JSON.stringify(result, "\t", null))
```
