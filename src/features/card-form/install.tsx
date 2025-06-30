import React, { useState } from 'react';
import { CardFormContent } from '../../app';
import { CardForm as InnerCardForm } from './card-form';
import { createCardFormPresenter } from './presenter';

export function installCardForm() {
    const [ cardFormDetail, setCardFormDetail ] = useState<CardFormContent>({
        creditCardNumber: '',
        cvc: '',
        expiryMonth: '',
        expiryYear: ''
    });

    const {
        updateCreditCardNumber,
        updateCvc,
        updateMonth,
        updateYear,
        submit,
    } = createCardFormPresenter( cardFormDetail, setCardFormDetail );
    
    const CardForm = () => {
        return (
            <InnerCardForm 
                creditCardNumber={cardFormDetail.creditCardNumber}
                cvc={cardFormDetail.cvc}
                expiryMonth={cardFormDetail.expiryMonth}
                expiryYear={cardFormDetail.expiryYear}
                updateCreditCardNumber={updateCreditCardNumber}
                updateCVC={updateCvc}
                updateExpiryMonth={updateMonth}
                updateExpiryYear={updateYear}
                submit={submit}
            />
        )
    }

    return {
        CardForm,
    }
}