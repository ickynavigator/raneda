const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")
const mailchimp = require("@mailchimp/mailchimp_marketing");
const https = require("https");
const { response } = require("express");
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) =>{
    
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = 'https://us7.api.mailchimp.com/3.0/lists/1aaa0a6b6e'
    const options = {
        method: 'POST',
        auth: 'harold:9da4d6628e9b3d97cb823af3e8154b2f-us7'
    }

    const request = https.request(url, options, (response) =>{

        if (response.statusCode === 200){
            res.sendFile(__dirname +"/success.html")
        }else{
            res.sendFile(__dirname +"/failure.html")
        }


        response.on('data', (data) => {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData);
    request.end();
    

})

app.get('/failure.html', (req, res) => {

    res.sendFile(__dirname + "/failure.html")
})

app.listen(3000, () => {

    console.log("Server started at port 3000")
})


// api key: 9da4d6628e9b3d97cb823af3e8154b2f-us7
// server: us7
// url: https://us7.api.mailchimp.com/3.0/lists/1aaa0a6b6e
//list id: 1aaa0a6b6e



