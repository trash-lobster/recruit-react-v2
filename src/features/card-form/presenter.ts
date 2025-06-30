import { CardFormContent } from "../../app";

export function createCardFormPresenter(
    cardForm: CardFormContent, 
    setCardForm: React.Dispatch<CardFormContent>
) {
    const updateCreditCardNumber = (value: string) => {
        const newCardFormDetail: CardFormContent = {
            ...cardForm,
            creditCardNumber: value
        }
        setCardForm(newCardFormDetail);
    }

    const updateCvc = (value: string) => {
        const newCardFormDetail: CardFormContent = {
            ...cardForm,
            cvc: value
        }
        setCardForm(newCardFormDetail);
    }

    const updateMonth = (value: string) => {
        const newCardFormDetail: CardFormContent = {
            ...cardForm,
            expiryMonth: value
        }
        setCardForm(newCardFormDetail);
    }

    const updateYear = (value: string) => {
        const newCardFormDetail: CardFormContent = {
            ...cardForm,
            expiryYear: value
        }
        setCardForm(newCardFormDetail);
    }

    const submit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Card number: ${cardForm.creditCardNumber}\nCVC: ${cardForm.cvc}\nExpiry date: ${cardForm.expiryMonth}/${cardForm.expiryYear}`);
    }

    return {
        updateCreditCardNumber,
        updateCvc,
        updateMonth,
        updateYear,
        submit
    }
}