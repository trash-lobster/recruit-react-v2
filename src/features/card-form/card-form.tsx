import React from "react";
import * as styles from "../../app.module.scss";

interface CardFormProps {
    creditCardNumber: string;
    cvc: string;
    expiryMonth: string;
    expiryYear: string;
    updateCreditCardNumber : (value: string) => void;
    updateCVC : (value: string) => void;
    updateExpiryMonth: (value: string) => void;
    updateExpiryYear: (value: string) => void;
    submit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

/**
 * @param param0 
 * @returns 
 * 
 * Form validation has not been implemented but placeholder for functions to update state are included
 */
export function CardForm({ submit }: CardFormProps) {
    return (
        <form onSubmit={submit} className={styles.form}>
            <input type="tel" id='creditCardNumber' className={styles.creditCardNumber} placeholder="Credit Card Number"/>
            <fieldset>
                <input type="text" id='cvc 'placeholder="cvc"/>
                <input type="text" id='expiryDate' placeholder="MM/YY"/>
            </fieldset>
            <button>Submit</button>
        </form>
    )
}