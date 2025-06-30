import React from "react";

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

export function CardForm({ submit }: CardFormProps) {
    return (
        <form onSubmit={submit}>
            <input type="tel" id='creditCardNumber' placeholder="Credit Card Number"/>
            <input type="text" placeholder="cvc"/>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}