import express from "express";

const router = express.Router();

router
  .route("/paypal")
  .get((req, res) => res.send(process.env.PAYPAL_CLIENT_ID));
router
  .route("/flutterwave")
  .get((req, res) => res.send(process.env.FLUTTERWAVE_PUB_KEY));
router
  .route("/mailchimp")
  .get((req, res) => res.send(process.env.MAILCHIMP_API_KEY));

export default router;

// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );
// app.get("/api/config/flutterwave", (req, res) =>
//   res.send(process.env.FLUTTERWAVE_PUB_KEY)
// );
// app.get("/api/config/mailchimp", (req, res) =>
//   res.send(process.env.MAILCHIMP_API_KEY)
// );
