// import axios from "axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Button, ListGroup } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";

// payment method "flutt"
export const Flutterwavefunc = ({ info, handler }) => {
  console.log(info);
  const config = {
    public_key: info.pub_key,
    tx_ref: info.tx_ref,
    amount: info.amount,
    currency: info.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: info.customer.email,
      phonenumber: info.customer.number,
      name: info.customer.name,
    },
    customizations: {
      title: "Raneda Store",
      description: "Payment for Raneda shopping",
      logo: "/favicon.ico",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleFlutterPaymentHandler = () => {
    handleFlutterPayment({
      callback: (res) => {
        const val = {
          id: res.transaction_id,
          flw_ref: res.flw_ref,
          tx_ref: res.tx_ref,
          status: res.status,
          update_time: Date.now(),
          paymentMethod: res.paymentResult,
          payer: {
            email_address: res.customer.email,
            phone_number: res.customer.phonenumber,
          },
        };
        handler(val);
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  return (
    <>
      <Button onClick={handleFlutterPaymentHandler}>
        Pay with Flutterwave
      </Button>
    </>
  );
};

export const Paypalfunc = ({ sdkReady, amount, handler }) => {
  return (
    <>
      {!sdkReady ? (
        <Loader />
      ) : (
        <PayPalButton amount={amount} onSuccess={handler} />
      )}
    </>
  );
};

export const AcctNum = () => {
  return (
    <>
      <h3>"ACCOUNT NUMBER HERE"</h3>
      <h3>"BANK ACCOUNT HERE"</h3>
      <LinkContainer
        to={"STRING FOR WHATSAPP"}
        className="d-flex justify-content-center align-items-center"
      >
        <Button variant="primary" className="btn-sm">
          Verify with Whatsapp
        </Button>
      </LinkContainer>
    </>
  );
};

export const DeliverButt = ({ handler }) => {
  return (
    <ListGroup.Item>
      <Button type="button" className="btn btn-block" onClick={handler}>
        Mark as Delivered
      </Button>
    </ListGroup.Item>
  );
};

export const PayButt = ({ handler }) => {
  return (
    <ListGroup.Item>
      <Button type="button" className="btn btn-block" onClick={handler}>
        Mark as Paid
      </Button>
    </ListGroup.Item>
  );
};
