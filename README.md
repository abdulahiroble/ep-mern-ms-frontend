# Step by Step Guide
This is a step by step guide on how to setup each microservice and the frontend.

## 1. Frontend service

### 1. Cd into the frontend folder

```bash
cd client
```

### 2. Install dependencies

```bash
npm install
```

### 2. Start the frontend

```bash

npm start
```

## 2. Auth Service

### 1. Cd into the auth service folder

```bash
cd microservice
```

### 2. Install dependencies

```bash

npm install
```

### 3. Envrionments:

MYSQL_HOST = localhost
MYSQL_PORT = 3306
MYSQL_USER = <Your user here>
MYSQL_PASS = <Your Password here>
MYSQL_DB = ep_db

JWT_PRIVATE_KEY = AAJ-AWESOME-KEY

## Follow these steps in order

### 1 
importer alle tables fra /start/mysql
### 2 importer alle roller
http://20.240.22.114/api/create/role
{
    "role" : "customer"
}

http://20.240.22.114/api/create/role
{
    "role" : "admin"
}

### 3 Importer brugere du har lyst til

http://20.240.22.114/api/users

{
    "firstname": "Admin",
    "lastname": "Admin",
    "email": "aa@a.dk",
    "address": "address12",
    "postal": 1235,
    "phone": 12345679,
    "password": "1234",
    "isActive": false,
    "userRole": "admin"
}

### 4 (optional) Test email service

Indsæt en valid email, i email feltet:

http://20.240.22.114/api/users

{
    "firstname": "Admin",
    "lastname": "Admin",
    "email": "Andreas1992@outlook.dk",
    "address": "address12",
    "postal": 1235,
    "phone": 12345679,
    "password": "1234",
    "isActive": false,
    "userRole": "admin"
}

### 3. Start the auth service

```bash

npm start
```

## 3. Search Service

### 1. Cd into the search service folder

```bash
cd search-microservice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the search service

```bash
npm start
```

## 4. Ticket Service

### 1. Install dependencies

```bash
npm install
```

### 2. Start the ticket service

```bash
npm start
```

## 5. Mail Service

### 1. Install dependencies

```bash
npm install
```

### 2. Start the mail service

```bash
npm start
```


http://20.240.18.244/
## API
https://github.com/AndreasP-92/ep-mern-api<br>
http://20.240.18.244/api<br>
## Auth Service
https://github.com/AndreasP-92/ep-mern-ms-authservice<br>
http://20.240.18.244/ms/auth<br>
## Search Service
https://github.com/AndreasP-92/ep-mern-ms-search<br>
http://20.240.18.244/ms/search
## Ticket Service
https://github.com/AndreasP-92/ep-mern-ms-ticketservice<br>
http://20.240.18.244/ms/ticket
## Mail Service
https://github.com/AndreasP-92/ep-mern-ms-mail
# env file info

REACT_APP_DEVELOPMENT_URL = http://localhost:8080<br>
REACT_APP_PROD_URL = http://20.240.18.244/<br>


# DEVELOPMENT
REACT_APP_DEVELOPMENT_AUTH_URL = http://20.240.22.114/ms/auth<br>
REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL = http://localhost:3002 <br>
REACT_APP_DEVELOPMENT_API_URL = http://localhost:3001<br>
# REACT_APP_ENVIRONMENT=dev

# PRODUCTION
REACT_APP_ENVIRONMENT=prod
REACT_APP_PRODUCTION_AUTH_URL=http://20.240.18.244/ms/auth<br>
REACT_APP_PRODUCTION_SEARCH_SERVICE_URL=http://20.240.18.244/ms/search<br>
REACT_APP_PRODUCTION_API_URL=http://20.240.18.244/api<br>
# OTHER

REACT_APP_SECRET_CODE=123<br>

REACT_APP_APIKEY_GOOGLE_MAPS=AIzaSyCywB8YAGzfsCy72UJ6JaOJYIzTr84P-XA<br>

REACT_APP_SECRET_KEY = AAJ-AWESOME-KEY<br>

