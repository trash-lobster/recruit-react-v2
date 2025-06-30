import React, { useState } from "react";
import * as styles from "./app.module.scss";
import { installNavPanel } from "./features/nav-panel/install";
import { installCardForm } from "./features/card-form/install";

export interface CardFormContent {
  creditCardNumber: string;
  cvc : string;
  expiryMonth: string;
  expiryYear: string;
}

export interface User {
  firstName: string;
  lastName: string;
}

export const App = () => {
  const [ isNavMenuActive, setIsNavMenuActive ] = useState(false);
  const [ user, setUser ] = useState<User>({
    firstName: 'Test',
    lastName: 'User'
  })

  const { NavPanel } = installNavPanel(isNavMenuActive, setIsNavMenuActive);
  const { CardForm } = installCardForm();
  
  return (
    <>
      <NavPanel/>
      <body>
        {
          isNavMenuActive ? 
            <div>Menu content</div> : 
            <div>
              <div>
                Welcome {user.firstName}
              </div>
              <CardForm/>
            </div>
        }
      </body>
    </>
  );
};
