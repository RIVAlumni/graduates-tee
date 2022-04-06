///<reference path="utilities.ts"/>

import { Questions, Order } from './index.types';

const SALES_ORDER_ID = '1eICUwBol5a2SPT_6FHE17FiNEQyYD-eAkDcJTuMoVWQ';
const DELIVERY_ORDER_ID = '';

const form = FormApp.getActiveForm();
const docs = DocumentApp.openById(SALES_ORDER_ID);

function onSubmit() {
  const response: Questions = {};
  const formResponse = form.getResponses().slice(-1).pop();
  const itemResponses = formResponse.getItemResponses();

  for (let i = 0; i < itemResponses.length; i++) {
    const itemResponse = itemResponses[i];
    const titleResponse = itemResponse.getItem().getTitle();
    const answerResponse = itemResponse.getResponse();

    if (!titleResponse.includes('PDPA'))
      response[titleResponse] = answerResponse;
  }

  return normalize(response);
}

function normalize(response: Questions) {
  const data: Order = {};

  data['Shirt_Size'] = response['What is your size?'];
  data['Shirt_Quantity'] = response['How many t-shirts are you purchasing?'];
  data['Delivery_Type'] = response['How do you want your t-shirts delivered?'];
  data['Delivery_Location'] = response['Mailing Address'];
  data['Delivery_Postal_Code'] = response['Postal Code'];
  data['Customer_Name'] = response['Full Name'];
  data['Customer_Tel'] = Util.formatInternational(response['Contact Number']);
  data['Customer_HomeTel'] = Util.formatInternational(response['Home Number']);
  data['Customer_Email'] = response['Email Address'];
  data['Customer_Graduating_Class'] = response['Graduating Class'];
  data['Customer_Graduating_Year'] = response['Graduating Year'];

  return documentMergeData(data);
}

function documentMergeData(order: Order) {
  Logger.log(order);
}
