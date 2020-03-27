'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const util = require('util');
const path = require('path');
const fs = require('fs');

let invoke = require('./invoke.js');
let query = require('./query.js');


// invoke.addCertificate('admin','42','bombo','2','fair');
// query.query('admin','readCertificate','12345');

const app = express();
app.use(morgan('combined'));


app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.post('/readCertificate', async (req, res) => {

  // res.send('hello world');
  try{
  let response =  await query.query( 'admin','readCertificate',req.body.key);
  let parsedResponse = await JSON.parse(response);
  res.send(parsedResponse);}

  catch(error){
    res.send(error);
  }
  
  });
  app.post('/addCertificate', async (req, res) => {

    // res.send('hello world');
    try{
    let response =  await invoke.addCertificate( 'admin',req.body.certificateId, req.body.name,req.body.gpa, req.body.grade, req.body.screenshot);
    // let parsedResponse = await JSON.parse(response);
    res.send(response);}
  
    catch(error){
      res.send(error);
    }
    
    });

  app.post('/validateCertificate', async (req, res) => {

    // res.send('hello world');
    try{
    let response =  await query.query( 'admin','validateCertificate',req.body.key);
    res.send(response);}
  
    catch(error){
      res.send(error);
    }
    
    });

  app.post('/checkWallet', async (req, res) => {

    // res.send('hello world');
    try{
    console.log(req.body);
    let response =  await query.checkWallet(req.body.username);
    
    res.send(response);}
  
    catch(error){
      res.send(error);
    }
    
    });
  
  
  var server = app.listen(process.env.PORT || 8085);