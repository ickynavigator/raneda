import mongoose from "mongoose";
const mailchimp = require("@mailchimp/mailchimp_marketing");
// import admin from "firebase-admin";
// const admin = require("firebase-admin");

export const connectFIRE = async () => {
  const serviceAccount = process.env.FIREBASE_SA_KEY;
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log(
      `\nFireBaseDB Connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`\nError: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
  // const db = admin.firestore();
  // return db;
  return admin.firestore();
};

export const connectMONGO = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`\nMongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`\nError: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export const connectMAILCHIMP = async () => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

  async function callPing() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }

  callPing();
};
