let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origin Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 8080
//import fetch insert update delete modules

//assign port no
app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})



let swaggerUI=require("swagger-ui-express")
let swaggerJsDoc=require("swagger-jsdoc")
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Product Management',
            version: "1.0.0",
            description: "Simple Product Management API"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./Routes/*.js"]
}

//Initialise swaggerJsDocs specs by passing options to it
const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))




const apiRoutes=require("./Routes/apiRoutes")

app.use("/",apiRoutes)




































