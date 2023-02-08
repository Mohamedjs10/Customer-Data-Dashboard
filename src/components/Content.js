import * as React from "react";
import NewUsers from "./contents/NewUsers";
import ActiveUsers from "./contents/ActiveUsers";
import BillPaymentUser from "./contents/BillPaymentUser";
import CustomerInsights from "./contents/CustomerInsights";
import TransactedOrders from "./contents/TransactedOrders";
import IapprovalWithLimit from "./contents/IapprovalWithLimit";
import IapprovalWithoutLimit from "./contents/IapprovalWithoutLimit";
import { useSelector } from "react-redux";
export default function Content() {
  const tab = useSelector((state) => state.tab.tab);
  return tab == "New Users" ? (
    <NewUsers></NewUsers>
  ) : tab == "Active Users" ? (
    <ActiveUsers></ActiveUsers>
  ) : tab == "Bill Payment User" ? (
    <BillPaymentUser></BillPaymentUser>
  ) : tab == "Customer Insights" ? (
    <CustomerInsights></CustomerInsights>
  ) : tab == "Transacted Orders" ? (
    <TransactedOrders></TransactedOrders>
  ) : tab == "Iapproval With Limit" ? (
    <IapprovalWithLimit></IapprovalWithLimit>
  ) : tab == "Iapproval Without Limit" ? (
    <IapprovalWithoutLimit></IapprovalWithoutLimit>
  ) : (
    <></>
  );
}
