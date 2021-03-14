// import axios from "axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Button, ListGroup } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";

// payment method "flutt"
export const Flutterwavefunc = ({ info }) => {
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
        console.log(res);
        closePaymentModal(); // this will close the modal programmatically
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
      <LinkContainer to={"STRING FOR WHATSAPP"}>
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
