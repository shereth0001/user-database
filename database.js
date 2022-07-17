    var express = require('express');
    var app = express();
    const Database = require("@replit/database")
    const db = new Database()
    const cors = require('cors');
    app.use(cors({

    }));

    /* 
    Schema Database ->
    Identified via ID

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


        Access ->
        [url]/[userId]/[APIKey]
        Keys: {
            ae7b451d-843b-4f9f-a9ad-d24db8de329d,
            3cf72906-49c0-48e9-9466-6ff23828ba98,
            2c9cd329-1c0f-45ea-8a3e-c901e01c5f2b,
            4fa90de8-05d8-4a16-9339-defd8b389625,
            456b7efa-bb46-44ef-a386-2eca19608134,
            551da1aa-78d9-4931-a491-cef3117a5003,
        }
        *If key is valid Database is accessed
        *If there is no user conataining that Id: response 404 is given.









    */

    /**Home URL is just gives error message 404**/
    app.get('/', function(req, res) {
        /**Error Message*/
        res.header("Content-Type", 'application/json');
        /*Json response*/
        const json = { "response": 404, "message": "Correct URL is user/[user_id]/ApiKey" }
            /*Formatted JSON response*/
        res.type('json').send(JSON.stringify(json, null, 2) + '\n');
    });

    app.get('/user/:user/:apikey', function(req, res) {

        /**Verifying API key*/
        if (req.params.apikey == 'ae7b451d-843b-4f9f-a9ad-d24db8de329d' || req.params.apikey == '3cf72906-49c0-48e9-9466-6ff23828ba98' || req.params.apikey == '2c9cd329-1c0f-45ea-8a3e-c901e01c5f2b' || req.params.apikey == '4fa90de8-05d8-4a16-9339-defd8b389625' || req.params.apikey == '456b7efa-bb46-44ef-a386-2eca19608134' || req.params.apikey == '551da1aa-78d9-4931-a491-cef3117a5003') {
            res.header("Content-Type", 'application/json');
            /**Correct API Key */

            db.get(req.params.user).then(value => {

                if (value == null) {
                    //* User is not in Database */
                    const json = { "response": 404, "message": "User is not in the Database" }
                        //* Send Formatted Resposne */
                    res.type('json').send(JSON.stringify(json, null, 2) + '\n');
                } 
                
                else {
                    /**Checking Database**/
                    db.get(req.params.user).then(value => {
                        /**Send Response */
                        const json = value
                        res.send(json)
                    });
                }

            });

        } 
        
        else {
            //** API Key is not valid */
            const json = { "response": 404, "message": "API Key is invalid or not given" }
                //* Send Formatted Resposne */
            res.type('json').send(JSON.stringify(json, null, 2) + '\n');

        }
    })


    app.listen(3001, function() {
        console.log('User Database Running!');
    });
