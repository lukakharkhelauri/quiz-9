import React, { useState } from 'react'
import classes from '../modules/Credit.module.scss';

const CreditCard = () => {
    const [nextPage, setNextPage] = useState(1)
    const [showError, setShowError] = useState(false)
    const [cardNumber, setCardNumber] = useState ('')
    const [cardHolder, setCardHolder] = useState ('')
    const [expDateMM, setExpDateMM] = useState ('')
    const [expDateYY, setExpDateYY] = useState('')
    const [cvc, setCvc] = useState ('')

    const errorHandler = () => {
        if (cardNumber === "" || cardHolder === "" || expDateMM === "" || expDateYY === "" || cvc === "") {
            setShowError(true)
        }else {
            setShowError(false)
            goToNextPage()
        }
    }

    const goToNextPage = () => {
        setNextPage(nextPage + 1)
    }

    const goToPrevPage = () => {
        setNextPage(nextPage - 1)
    }

    return (
        <>
        {nextPage === 1 && (
        <div className={classes['card-wrapper']}>
            <div className={classes['details']}>
                <input 
                    type='text'
                    placeholder='Card-Holder'
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <input 
                    type='number'
                    placeholder='Card-Number'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </div>
            <div className={classes['exp-cvc-wrapper']}>
                <input 
                    tpye='number'
                    placeholder='expDateMM'
                    value={expDateMM}
                    onChange={(e) => setExpDateMM(e.target.value)}
                />
                <input 
                    type='number'
                    placeholder='expDateYY'
                    value={expDateYY}
                    onChange={(e) => setExpDateYY(e.target.value)}
                />
                <input 
                    type='number'
                    placeholder='cvc'
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                />
            </div>

            {showError && (
                 <div className={classes['error']}>
                   <span className={classes['error-message']}>
                     Please fill in all fields.
                   </span>
                 </div>
               )}

            <button onClick={errorHandler} className={classes['confirm-button']}>Confirm</button>
        </div>
        )}

        {nextPage === 2 && (
            <div className={classes['thank-you']}>
                <h1>thank you</h1>
                    <h3>We've added your card details</h3>
                    <button onClick ={goToPrevPage} className={classes['confirm-button']}>Continue</button>
            </div>
        )}
        </>
    )
};

export default CreditCard;


