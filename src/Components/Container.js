import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import australia from "../Images/aus_flag.png"
import { Button } from 'react-bootstrap';
import tick from '../Images/tick.png'
import frame from '../Images/Frame.png'
import arrow from '../Images/Arrow - Right.png'

const Container = () => {
    const [selectedIncome, setSelectedIncome] = useState('$18,201 - $45,000');
    const [taxRate, setTaxRate] = useState('Nil + 19% of excess over $18,200');
    const [purchaseValue, setPurchaseValue] = useState("");
    const [saleValue, setSaleValue] = useState("");
    const [expenseValue, setExpenseValue] = useState("");
    const [gainValue, setGainValue] = useState("");
    const [discountValue, setDiscountValue] = useState("");
    const [netGains, setNetGains] = useState(0);
    const [taxToPay, setTaxToPay] = useState(0);
    const [termButton, setTermButton] = useState('short');

    const handleIncomeSelect = (selectedItem) => {
        setSelectedIncome(selectedItem);
        if (selectedItem === "$0 - $18,200") {
            setTaxRate("0%")
        } else if (selectedItem === "$18,201 - $45,000") {
            setTaxRate("Nil + 19% of excess over $18,200")
        } else if (selectedItem === "$45,001 - $120,000") {
            setTaxRate("$5,092 + 32.5% of excess over $45,000")
        } else if (selectedItem === "$120,000 - $180,000") {
            setTaxRate("$29,467 + 37% of excess over $120,000")
        } else setTaxRate("$51,667 + 45% of excess over 180,000")
    }

    const handleChange = (e) => {
        if (e.target.id === "purchase") {
            setPurchaseValue(e.target.value);
        } else if (e.target.id === "sale") {
            setSaleValue(e.target.value);
        } else if (e.target.id === "expense") {
            setExpenseValue(e.target.value);
        }
    }

    const handleTermClick = (term) => {
        setTermButton(term);
    };

    const calculateGain = () => {
        const purchaseAmount = parseFloat(purchaseValue);
        const saleAmount = parseFloat(saleValue);
        const expenseAmount = parseFloat(expenseValue);

        if (isNaN(purchaseAmount) || isNaN(saleAmount) || isNaN(expenseAmount)) {
            setGainValue("");
        } else {
            const amount = saleAmount - purchaseAmount - expenseAmount;
            setGainValue(amount.toFixed(2));
        }
    }

    const calculateDiscount = () => {
        const gainAmt = parseFloat(gainValue);
        if (gainAmt >= 0) {
            const disAmt = gainAmt / 2;
            setDiscountValue(disAmt.toFixed(2));
        }
    }

    const calculateNetGains = () => {
        const gainAmt = parseFloat(gainValue);
        const disAmt = parseFloat(discountValue);

        if (isNaN(gainAmt) || isNaN(disAmt)) {
            setNetGains(0);
        } else {
            const netAmt = gainAmt - disAmt;
            setNetGains(netAmt);
        }
    }

    const calculateTax = () => {
        if (selectedIncome === "$0 - $18,200") {
            setTaxToPay(0);
        } else if (selectedIncome === "$0 - $18,200") {
            if (termButton === "short") {
                let taxValue = 19 * gainValue / 100
                setTaxToPay(taxValue);
            } else {
                let taxValue = 19 * discountValue / 100
                setTaxToPay(taxValue);
            }
        } else if (selectedIncome === "$45,001 - $120,000") {
            if (termButton === "short") {
                let taxValue = 32.5 * gainValue / 100
                setTaxToPay(taxValue);
            } else {
                let taxValue = 32.5 * discountValue / 100
                setTaxToPay(taxValue);
            }
        } else if (selectedIncome === "$120,000 - $180,000") {
            if (termButton === "short") {
                let taxValue = 37 * gainValue / 100
                setTaxToPay(taxValue);
            } else {
                let x = 37 * discountValue / 100
                setTaxToPay(x);
            }
        } else if (selectedIncome === "$180,001+") {
            if (termButton === "short") {
                let taxValue = 45 * gainValue / 100
                setTaxToPay(taxValue);
            } else {
                let taxValue = 45 * discountValue / 100
                setTaxToPay(taxValue);
            }
        }
    }

    useEffect(() => {
        calculateGain();
        calculateDiscount();
        calculateNetGains();
        calculateTax();
    }, [purchaseValue, saleValue, expenseValue, gainValue, discountValue]);

    return (
        <>
            <div className='container'>
                <div className='container-box'>
                    <h1 className='container-title'>Free Crypto Tax Calculator Australia</h1>
                    <section className='container-section1'>
                        <div className='financial_yr'>
                            <p>Financial Year</p>
                            <Dropdown>
                                <Dropdown.Toggle className='financial-toggle'>
                                    FY 2023-24
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">FY 2023-24</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='country'>
                            <p>Country</p>
                            <Dropdown>
                                <Dropdown.Toggle className='country-toggle'>
                                    <div className='country-toggle-items'>
                                        <img src={australia} alt="aus_flag" />
                                        Australia
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='flag_menu'>
                                    <Dropdown.Item className='flag_item' href="#/action-1">
                                        <img src={australia} alt="aus_flag" />
                                        Australia
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </section>
                    <section className='container-section2'>
                        <div className='crypto_price'>
                            <Form.Label className='crypto_price_label'>Enter purchase price of Crypto</Form.Label>
                            <div className="crypto_input_container">
                                <Form.Control
                                    type="text"
                                    id="purchase"
                                    className='crypto_price_input'
                                    value={purchaseValue}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='crypto_sale'>
                            <Form.Label className='crypto_sale_label'>Enter sale price of Crypto</Form.Label>
                            <div className="crypto_input_container">
                                <Form.Control
                                    type="text"
                                    id="sale"
                                    className='crypto_sale_input'
                                    value={saleValue}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </section>
                    <section className='container-section3'>
                        <div className='expenses'>
                            <Form.Label className='expenses_label'>Enter your Expenses</Form.Label>
                            <div className="crypto_input_container">
                                <Form.Control
                                    type="text"
                                    id="expense"
                                    className='crypto_expenses_input'
                                    value={expenseValue}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='investment'>
                            <p>Investment Type</p>
                            <div className='invest_btn'>
                                <div>
                                    <Button variant={termButton === 'short' ? 'outline-primary' : 'outline-secondary'} id="short" onClick={() => handleTermClick('short')}>Short Term{termButton === 'short' ? <img className='tick' src={tick} /> : <img className='tick_hide' src={tick} />}</Button>
                                    <p>&lt; 12 Months</p>
                                </div>
                                <div>
                                    <Button variant={termButton === 'long' ? 'outline-primary' : 'outline-secondary'} id="long" onClick={() => handleTermClick('long')}>Long Term{termButton === 'long' ? <img className='tick' src={tick} /> : <img className='tick_hide' src={tick} />}</Button>
                                    <p>&gt; 12 Months</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='container-section4'>
                        <div className='income'>
                            <p>Select Your Annual Income</p>
                            <Dropdown>
                                <Dropdown.Toggle className='income-toggle'>
                                    <div className='income-toggle-items'>
                                        {selectedIncome}
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" onClick={() => handleIncomeSelect('$0 - $18,200')}>
                                        $0 - $18,200
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={() => handleIncomeSelect('$18,201 - $45,000')}>
                                        $18,201 - $45,000
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={() => handleIncomeSelect('$45,001 - $120,000')}>
                                        $45,001 - $120,000
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={() => handleIncomeSelect('$120,000 - $180,000')}>
                                        $120,000 - $180,000
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={() => handleIncomeSelect('$180,001+')}>
                                        $180,001+
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='tax'>
                            <p>Tax Rate:</p>
                            <p>{taxRate}</p>
                        </div>
                    </section>
                    {termButton === "long" ? (
                        <section className='container-section5'>
                            <div className='gains'>
                                <Form.Label className='gains_label'>Capital gains amount</Form.Label>
                                <Form.Control
                                    type="text"
                                    className='gains_input'
                                    disabled={true}
                                    value={`$ ${gainValue}`}
                                />
                            </div>
                            <div className='discount'>
                                <Form.Label className='discount_label'>Discount for long term gains</Form.Label>
                                <Form.Control
                                    type="text"
                                    className='discount_input'
                                    disabled={true}
                                    value={`$ ${discountValue}`}
                                />
                            </div>
                        </section>
                    ) : (null)}
                    <section className='container-section6'>
                        <div className='net_capital'>
                            <h4>Net Capital gains tax amount</h4>
                            <h2 className='net_capital_value'>{`$ ${netGains}`}</h2>
                        </div>
                        <div className='tax_pay'>
                            <h4>The tax you need to pay*</h4>
                            <h2 className='tax_pay_value'>{`$ ${taxToPay}`}</h2>
                        </div>
                    </section>
                </div>
                <div className='container-box2'>
                    <h3 className='container2_title'>Get Started with KoinX for FREE</h3>
                    <p className='container2_subtitle'>With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.</p>
                    <img className='frame' src={frame} alt='frame' />
                    <button>Get Started for FREE <img src={arrow} /></button>
                </div>
            </div>
        </>
    )
}

export default Container