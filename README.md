# User-database by Sharath Nair

### A custom User Database API Project in ExpressJS using diffrent dependecies

## Info
This Project is a **REST API** where a user can create a whole new user and get the information regarding that User. This was created for **Repl.it** since this is my main go to website for hosting projects like this. 
The Repl.it Database was used in this case since it was the most convinient solution, but diffrent Databases such as MongoDB could have also been used


The Schema looks like this: 
```json
"[user_id]": {
            "firstname": String,
            "lastname": String,
            "credentials": {
                "username": String,
                "password": String,
            },
            "accountenabled": boolean,
            "dob": String,
        }
  ```      
        
So when a user goes on API url -> `[Base URl]/user/[user_Id]/[ApiKey]`
He can get information for the user with the given UserId


### API Key
I have created 6 Diffrent API Keys in the System, the following Keys are: 

  ```       "ae7b451d-843b-4f9f-a9ad-d24db8de329d,
            3cf72906-49c0-48e9-9466-6ff23828ba98,
            2c9cd329-1c0f-45ea-8a3e-c901e01c5f2b,
            4fa90de8-05d8-4a16-9339-defd8b389625,
            456b7efa-bb46-44ef-a386-2eca19608134,
            551da1aa-78d9-4931-a491-cef3117a5003,
   ```


## Diffrent Responses

### Invalid API Key
If you have and Invalid API Key or one is not given, an error looking like this should pop up: 
```json
{
  "response": 404,
  "message": "API Key is invalid or not given"
}
```     
### Invalid UserId 
If you have entered a UserId that is not found in the Database the following response will show.
```json
{
  "response": 404,
  "message": "User is not in the Database"
}
```   
### Success Response
If the UserId is in the database and the API Key is also valid you will get the User-Info response from the API. It should look something like this.
```json
{
   "firstname":"Jason",
   "lastname":"Hames",
   "credentials":{
      "username":"jason221",
      "password":"JasonHames2003!"
   },
   "accountenabled":true,
   "dob":"16.12.2001"
}
```  


## Summary
This API is costomizable and can be adapted to specific needs. This API has been tested and a running "Demo Version" can be found [here](https://portfolio-database.shereth.repl.co/user/61ef9151-576f-42fd-a464-4675921eb86a/ae7b451d-843b-4f9f-a9ad-d24db8de329d)
The UserId in this example is: `61ef9151-576f-42fd-a464-4675921eb86a`

The API Key in this example is: `ae7b451d-843b-4f9f-a9ad-d24db8de329d`
