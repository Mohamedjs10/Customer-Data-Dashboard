import * as React from "react";
import CustomerData from "./contents/CustomerData";
import BillPaymentUser from "./contents/BillPaymentUser";
import CustomerInsights from "./contents/CustomerInsights";
import TransactedOrderSucceeded from "./contents/TransactedOrderSucceeded";
import IapprovalWithLimit from "./contents/IapprovalWithLimit";
import IapprovalWithoutLimit from "./contents/IapprovalWithoutLimit";
import { useSelector } from "react-redux";
export default function Content() {
  const tab = useSelector((state) => state.tab.tab);
  return tab == "Customer Data" ? (
    <CustomerData></CustomerData>
  ) : tab == "Bill Payment User" ? (
    <BillPaymentUser></BillPaymentUser>
  ) : tab == "Customer Insights" ? (
    <CustomerInsights></CustomerInsights>
  ) : tab == "Transacted Order Succeeded" ? (
    <TransactedOrderSucceeded></TransactedOrderSucceeded>
  ) : tab == "Iapproval With Limit" ? (
    <IapprovalWithLimit></IapprovalWithLimit>
  ) : tab == "Iapproval Without Limit" ? (
    <IapprovalWithoutLimit></IapprovalWithoutLimit>
  ) : (
    <></>
  );
}
