
# FlightInsuranceAPi



## Indices

* [Default](#default)

  * [http://localhost:3000/getAuthToken](#1-http:localhost:3000getauthtoken)
  * [http://localhost:3000/FlightInsurance](#2-http:localhost:3000flightinsurance)


--------


## Default



### 1. http://localhost:3000/getAuthToken



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:3000/getAuthToken
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg0MzU2NTYyfQ.t9tKgCIecHq9iHEKR5Vezb2RBmJhU4YorzgW3GH9d9E |  |



***Body:***

```js        
{
	"firstName": "TestFn",
	"lastName": "TestLn",
	"email": "a4@b.com",
	"policyNumber": 123,
	"originalFightNumber": 456,
	"originalFightDate": "2020-03-10",
	"flightDelayReason": "Weather",
	"flightInterruptionConsequence": "Cancellation",
	"newFightNumber": 789
}
```



### 2. http://localhost:3000/FlightInsurance



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/FlightInsurance
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg0MzU2NTYyfQ.t9tKgCIecHq9iHEKR5Vezb2RBmJhU4YorzgW3GH9d9E |  |



***Body:***

```js        
{
	"firstName": "TestFn",
	"lastName": "TestLn",
	"email": "a4@b.com",
	"policyNumber": 123,
	"originalFightNumber": 456,
	"originalFightDate": "2020-03-10",
	"flightDelayReason": "Weather",
	"flightInterruptionConsequence": "Cancellation",
	"newFightNumber": 789
}
```
