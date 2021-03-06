import axios from "axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Button, ListGroup } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";

// payment method "flutt"
export const Flutterwavefunc = ({ info }) => {
  const config = {
    public_key: info.pub_key,
    tx_ref: info.tx_ref,
    amount: info.amount,
    currency: info.currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: info.email,
      phonenumber: info.number ? info.number : null,
      name: info.name,
    },
    customizations: {
      title: "Raneda Store",
      description: "Payment for Raneda shopping",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
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
      <Button onClick={handleFlutterPaymentHandler}>Pay with Paystack</Button>
    </>
  );
};

export const addPayPalScript = async (setSdkReady) => {
  const { data: clientId } = await axios.get("/api/config/paypal");
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  script.async = true;
  script.onload = () => {
    setSdkReady(true);
  };
  document.body.appendChild(script);
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
