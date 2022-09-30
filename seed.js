'use strict';

// create seed data for invoices
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Invoice = require('./models/invoice.js');

async function seed()
{
  await Invoice.create(
    {
      project_name: 'Website',
      company_name: 'ABC Company',
      description: 'Build a Website',
      hourly_rate: 35,
      hours_worked: 100,
      email: 'diablokitty@gmail.com',
    });

  await Invoice.create(
    {
      project_name: 'Eating',
      company_name: 'Nook Co.',
      description: 'I ate them',
      hourly_rate: 9001,
      hours_worked: 99,
      email: 'rheamimicarillo@gmail.com',
    });

  await Invoice.create(
    {
      project_name: 'Sleeping',
      company_name: 'Sleep Inc.',
      description: 'Company dedicated to good naps',
      hourly_rate: 10,
      hours_worked: 8,
      email: 'adrian.cosme5850@gmail.com',
    });

  mongoose.disconnect();
}

seed();
