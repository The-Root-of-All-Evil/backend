'use strict';

// bring in mongoose:
const mongoose = require('mongoose');

// extract the schema property from the mongoose object
const { Schema } = mongoose;

// create an invoice schema, define how our object will be structured
const InvoiceSchema = new Schema({
  project_name: { type: String, required: true },
  company_name: { type: String, required: true },
  description: { type: String, required: true },
  hourly_rate: { type: Number, required: true },
  hours_worked: { type: Number, required: true },
  email: { type: String, required: true}
});

// define the model
// it gives mongoose functionality and a predefined schema to shape our data
// it takes in a string and a scheme
const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);

module.exports = InvoiceModel;
