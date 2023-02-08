import axios from "axios";
import generateSignatureAndBody from "./utililes";

const auth = {
  username: process.env.REACT_APP_USERNAME_BASIC_AUTH,
  password: process.env.REACT_APP_PASSWORD_BASIC_AUTH,
};

export const billPaymentReport = async (oldReqBody) => {
  try {
    const { signature, body } = await generateSignatureAndBody(oldReqBody);

    const res = await axios.post(
      // `https://contactpay-api-iframe.contact.eg/bill-payment/report`,
      "http://192.168.42.49:5000/bill-payment/report",

      body,
      {
        auth: auth,
        headers: {
          "cp-signature": signature,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
