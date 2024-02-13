//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api

let token = require('../token/token')



//CREATING THE REST API


//FETCHING ALL PRODUCTS IN THE PRODUCT DATABASE----->
router.get("/",(req,res)=>{
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('mbdshopping')                                       //connection nodedb
            db.collection('products').find().toArray((err,array)=>{
                if(err)console.log("Error:- ",err)
                else {
                    console.log('Data sent')
                    res.send(array)
                    conn.close()
                }
            })
        }
    })
})

//FETCHING THE USER DETAILS USING GET----->
router.get("/UsersDetails",(req,res)=>{
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('mbdshopping')                                       //connection nodedb
            db.collection('Users').find().toArray((err,array)=>{
                if(err)console.log("Error:- ",err)
                else {
                    console.log('Data sent')
                    res.send(array)
                    conn.close()
                }
            })
        }
    })
})



















//AUTHENTICATION CHECKING USING USER NAME,PASSWARD--->
router.post("/auth", (req, res) => {

    let u_name = req.body.uname
    let u_pwd = req.body.upwd
    let obj = { u_name, u_pwd }

              mcl.connect(url,(err,conn)=>{
                  if(err)console.log('Error in connection:- ',err)
                  else{
                      let db = conn.db('mbdshopping')    
                      //FINDING IN USERS IF THERE IS MATCHING USERNAME AND USER PASSWARRD                                   
                      db.collection('Users').find(obj).toArray((err,array)=>{
                          console.log(array)
                          if (array.length != 0) {  
                              let my_token = token(obj, JSON.stringify(new Date()))
                              //UPDATING TOKEN TO DATABASE
                              obj = {
                                  "u_token":my_token
                              }
                              
                              let u_id = array[0].u_id;
                              console.log("-----------",u_id,obj)
                              db.collection('Users').updateOne({ u_id }, { $set: obj }, (err, result) => {        //it will upadate the obj for the p_id
                                  if (err)
                                      res.status(404).send({ 'update': 'error' })
                                  else {
                                      if (result.matchedCount != 0) {
                                          console.log("Data updated ")
                                          res.send({ 'auth': 'success', token: my_token })
                                      }
                                      // conn.close()
                                  }
                              })
                              
                          }
                          else
                              res.send({ 'auth': 'failed' })
                      })
                  }
              })
              
              
              
              })
              
              
              
//FETCHING CART -------->
router.get("/cartFetch",(req,res)=>{

    let u_id=req.body.u_id
    //connect to mongodb
          mcl.connect(url,(err,conn)=>{
              if(err)console.log('Error in connection:- ',err)
              else{
                  let db = conn.db('mbdshopping')                                       //connection nodedb
                  db.collection('Cart').find({u_id}).toArray((err,array)=>{
                      if(err)console.log("Error:- ",err)
                      else {
                          console.log('Data sent')
                          res.send(array)
                          conn.close()
                           }
                       })
                   }
               })
 })     









module.exports = router







