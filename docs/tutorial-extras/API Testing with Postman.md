# Tutorial-API-Testing-with-Postman

API stands for Application Programming Interface, which allows two applications to communicate. Think of APIs as a bridge between applications.

API testing is a method of testing and validating Application Programming Interfaces.API Testing checks the performance, reliability, and security of programming interfaces.

## What you'll need

- A Postman account -[sign up for a free account ](https://www.postman.com/).
- An Eventbrite account - [sign up for free account](https://www.eventbrite.com/platform/).

## Get started with Eventbrite API authentication

Eventbrite is a global platform that lets anyone create, share, find and attend events.

1. Go to the [Developer Portal](https://www.eventbrite.com/platform/) and select Get a Free API key to retrieve your API key.
2. Copy and save your API key. 
3. Copy the URL example to be used for authentication.

The authentication URL is as follows:

`https://www.eventbriteapi.com/v3/users/me/?token=[YOUR-API-KEY].`

**_NOTE:_**  The API key needs to go in place of [YOUR-API-KEY]. Do not add any brackets around the API key.

## API Testing with Postman.

To test your authentication and data endpoints in Postman, follow these steps:
1. Sign in to  Postman Homepage, and click Create New
2. Select HTTP Request from the list on the modal
3. Enter your authentication URL and click Send to get a response, as shown in figure one.

![Screenshot 2022-06-29 at 12 29 11](https://user-images.githubusercontent.com/64105005/180061146-aa38cca8-debb-4d93-b625-1a5401164539.png)
Figure one: An example of a response on the browser

## Responses status code 

A Hypertext Transfer Protocol, HTTP, is a client-server protocol where server response to a client request. 

### 200 OK
If the response is successful, it will return a 200.
### 400: Bad Request
If the server cannot or will not process the request, it will return 400.
### 401:Unauthorized 
If authentication has failed, it will return 401. 








