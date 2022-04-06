// Conforms to the Form's questions
export type Questions = Partial<{
  'What is your size?': string;
  'How many t-shirts are you purchasing?': string;
  'How do you want your t-shirts delivered?': string;
  'Mailing Address': string;
  'Postal Code': string;
  'Full Name': string;
  'Email Address': string;
  'Graduating Class': string;
  'Graduating Year': string;
  'Contact Number': string;
  'Home Number': string;
}>;

export type Order = Partial<{
  Shirt_Size: string;
  Shirt_Quantity: string;
  Delivery_Type: string;
  Delivery_Location: string;
  Delivery_PostalCode: string;
  Customer_Name: string;
  Customer_Tel: string;
  Customer_HomeTel: string;
  Customer_Email: string;
  Customer_Graduating_Class: string;
  Customer_Graduating_Year: string;
}>;

export type DocumentData = Partial<{}>;
