
# FlightInsuranceAPi


## Instalation
```sh
If you are not using docker please install mongo db and start mongo db server
git clone https://github.com/npalgit/FlightInsurance.git
npm install
npm dev
```


## Docker
You can also use docker for development.

Start the services

```sh
docker-compose up -d
```

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
