// or optimize karna ho to hum useId hook ka bhi use kar sakte he ye hook 
// har baar ek uniq value generate kar ke deta he 


import React ,{useId}from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurreny = "used",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    // useId hook ka use ager karna ho to kar sakte he nhi to kaam to ho jayega
    // useId hook use 
    
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurreny}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                    </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
