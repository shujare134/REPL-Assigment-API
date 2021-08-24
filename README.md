# REPL-Assigment-API
REPL-Assigment-API
This API is used to return 445 calendar year
calendar year will starting from satarday of last year of fiscal year.
Below formula will return start of date for fiscal year 
-------------------How to do unit testing---------------------------
unit testig framework - Jest
command -   npm test

-------------------commands for Serverless deployment of lambda with API gateway----------
1. command -  npm install -g Serverless
2. command-  serverless create --template aws-nodejs  --path <pathofyourproject>
3. open pathofyourproject in VS code IDE
    set up profile, lambda function name path, events in serverless.yml file
4. command-  sls deploy 
    this command will deploy lambda with api gateway on aws cloud

-------------------Two endpoints exposed--------------------------
1. dev edpoint
endpoint - https://ugrvyf9755.execute-api.us-east-1.amazonaws.com/dev/get-fourfourfivecalendar/{year}
method - GET
pathParameter - year  (e.g  value ca be 2015)

2. prod endpoint 
secured by api key and api key eeds to pass in header with below key value pair
endpoint - https://ugrvyf9755.execute-api.us-east-1.amazonaws.com/prod/get-fourfourfivecalendar/{year}
method - GET
header {
    "x-api-key": "rh9jBqeweX7s0fc98shi4ayCPY0bjuADT7zzSuwg"
}
pathParameter - year  (e.g  value ca be 2015)

