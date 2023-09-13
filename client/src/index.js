import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./components/Context/Context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publicKey =
  "pk_test_51NnKDcG86FyTsUaehBElFO7QF9xHzI1xO5kf3yfGEpYM7QV08Z4AHv4fSBu0cBjdFSh9nASYFQ8Uo03DOHf3IRvu00Mkx8UUPS";
const stripePromise = loadStripe(publicKey);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
