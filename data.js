'use strict';

/* REQUIRE */
const Invoice = require('./models/invoice.js');
require('dotenv').config();
const axios = require('axios');

// required, so we can use the 'verifyUser' in this file
const verifyUser = require('./auth');
const Data = {};

/*
verifyUser(req, async (err, user) =>
{
  // error first, approach
  if (err)
  {
    console.log(err);
    // let the front-end know that their token is bunk
    res.send('invalid token');
  }
  else
  {
    
  }
});
*/
//Takes a query in the form of (http://localhost:3001/letters?title=<Your title here>)
Data.getInvoices = async (req, res, next) =>
{
  verifyUser(req, async (err, user) =>
  {
    // error first, approach
    if (err)
    {
      console.log(err);
      // let the front-end know that their token is bunk
      res.send('Your token is invalid 👀');
    }
    else
    {
      try
      {
        let results = await Invoice.find({ 'email': req.headers.email });
        res.status(200).send(results);
      }
      catch (err)
      {
        next(err.message);
      }
    }
  });
}


Data.deleteAnItem = async (req, res) =>
{
  verifyUser(req, async (err, user) =>
  {
    // error first, approach
    if (err)
    {
      console.log(err);
      // let the front-end know that their token is bunk
      res.send('invalid token');
    }
    else
    {
      try
      {
        let results = await Invoice.findByIdAndDelete(req.params.id);
        res.status(200).json(results);
      }
      catch (err)
      {
        res.send(err.message)
      }
    }
  });
}

Data.addAnInvoice = async (req, res, next) =>
{
  verifyUser(req, async (err, user) =>
  {
    // error first, approach
    if (err)
    {
      console.log(err);
      // let the front-end know that their token is bunk
      res.send('invalid token');
    }
    else
    {
      try
      {
        const item = new Invoice(req.body);
        await item.save();
        res.status(200).json(item);
      }
      catch (err)
      {
        next(err.message);
      }
    }
  });
}

Data.editAInvoice = async (req, res, next) =>
{
  verifyUser(req, async (err, user) =>
  {
    console.log('user is verified in add letter');
    // error first, approach
    if (err)
    {
      console.log(err);
      // let the front-end know that their token is bunk
      res.send('invalid token');
    }
    else
    {
      try
      {
        let id = req.params.id;
        let result = await Invoice.findByIdAndUpdate(id, req.body, {
          new: true,
          overwrite: true,
        });
        res.status(200).send(result);
        console.log(result)
      }
      catch (err)
      {
        next(err);
      }
    }
  }
  )
}

module.exports = Data;
