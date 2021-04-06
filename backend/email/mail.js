import { SMTPClient } from "emailjs";
import { registerMessage } from "./messages.js";

const client = new SMTPClient({
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  ssl: process.env.SMTP_SSL,
});

const testclient = new SMTPClient({
  user: "gabrielobi.of@gmail.com",
  password: "duvibwnpvvvhbhbi",
  host: "smtp.gmail.com",
  ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
testclient.send(
  registerMessage({
    fromAcct: "gabrielobi.of@gmail.com",
    toAcct: "fortuneobi0@gmail.com",
    subject: "nothing important",
  }),
  function (err, message) {
    console.log(err || message);
  }
);

// you can continue to send more messages with successive calls to 'client.send',
// they will be queued on the same smtp connection

// or instead of using the built-in client you can create an instance of 'smtp.SMTPConnection'
