import React from 'react'
import Pic from '../Images/pic.png'

const Banner = () => {
    return (
        <>
            <div className='banner-container'>
                <div className='banner'>
                    <div>
                        <img src={Pic} alt='pic' />
                    </div>
                    <div>
                        <h2 className='banner_title'>Stay up to date with latest cryto news and events. Subscribe to ou newsletter</h2>
                        <form>
                            <input className='email_input' type="email" name="email" placeholder="Enter your email address" />
                            <button className='email_btn' type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner