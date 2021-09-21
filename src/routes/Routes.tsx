import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
