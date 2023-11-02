import React from 'react'
import logo from "../Images/Logo2.png"
import social from "../Images/social.png"

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-section1'>
                    <div className='logo2'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='social'>
                        <img src={social} alt="Social" />
                    </div>
                </div>
                <div className='footer-section2'>
                    <div className='row-1'>
                        <h5>Crypto Taxes for</h5>
                        <p>Individuals and investors</p>
                        <p>Tax Professionals and Accountants</p>
                        <p>Businesses</p>
                    </div>
                    <div className='row-2'>
                        <h5>Crypto Taxes for</h5>
                        <p>Individuals and investors</p>
                        <p>Tax Professionals and Accountants</p>
                        <p>Businesses</p>
                    </div>
                    <div className='row-3'>
                        <h5>Crypto Taxes for</h5>
                        <p>Individuals and investors</p>
                        <p>Tax Professionals and Accountants</p>
                        <p>Businesses</p>
                    </div>
                    <div className='row-4'>
                        <h5>Crypto Taxes for</h5>
                        <p>Individuals and investors</p>
                        <p>Tax Professionals and Accountants</p>
                        <p>Businesses</p>
                    </div>
                    <div className='row-5'>
                        <h5>Crypto Taxes for</h5>
                        <p>Individuals and investors</p>
                        <p>Tax Professionals and Accountants</p>
                        <p>Businesses</p>
                    </div>
                </div>
                <p className='footer-end'>© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
            </footer>
        </>
    )
}

export default Footer