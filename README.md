# CARE-NODE-EXCAHNGE

Node Lambda for SFTP.

  - (need to add)

### TECH
  - Serverless : https://www.serverless.com/framework/docs/getting-started/
  - NODEJS + EXPRESS : https://nodejs.org/en/download/
  - AWS LAMBDA
  - AWS API GATEWAY

### Setting up enviroment
  - Setup Node : 
    ```sh
     Install NodeJS 12.X
     ```
  - Setup Serverless 
    ```sh
     npm install -g serverless
     ```
  - Setup AWS IAM User 
    ```sh
     Make Sure user has access to 
     - create IAM ROLE
     - API GATEWAY
     - CLOUD FORMATION
     - LMABDA FUCNTION
     - CLOUD WATCH
     ```

### RUN Local
  - Git Clone repository (Make sure you have done environment setup)
    ```sh
     npm install
     ```
  - Steps to run node server locally 
    ```sh
     - open app.js file
     - change default handler function to node app (example below)
     - serverless : module.exports.handler = serverless(app);
     - local : module.exports = app;
     - npm start (to run local server on port 3000)
     ```

### Deploy
  - Deploy Development
    ```sh
     npm run deploy-dev
     ```
  - Deploy QA
    ```sh
     npm run deploy-qa
     ```
  - Deploy <Type>
    ```sh
     npm run deploy-<type>
     ```

### TEST API
  - Test Using Postman
  - User API Endpoint obtained from deploy command


### SERVERLESS YAML FILE
  - Yaml file consistes of following key points
  - service:  Service name/labmda function name
  - plugins: environment variable injector plugin
  - provider: all basic labmda function details
  - resourcePolicy: to specify private endpoint & its rules
 

