import React from 'react';
import './Footer.css'
import Footform from './Footform';

const Footer = () => {
    return(
       <div className="footer">
            <Footform/>
            <section className="info info1">
                <a href="/">HELP</a>
                <a href="/">Contact US</a>
                <a href="/">FAQS</a>
                <a href="/">SHIPPING & RETURNS</a>
                <a href="/">GUEST RESTURNS</a>
                <a href="/">PAYMENT METHODS</a>
                <a href="/">TRACK YOUR ORDER</a>
            </section>
            <section className="info info2">
                <a href="/">LEGAL</a>
                <a href="/">TERMS & CONDITIONS</a>
                <a href="/">ACCESSIBILITY</a>
                <a href="/">COOKIE POLICY</a>
                <a href="/">COOKIE PREFERENCES</a>
                <a href="/">REGULARTORY FRAMEWORK</a>
            </section>
            <section className="info info3">
                <a href="/">FIND US</a>
                <a href="/">POP SHOPS</a>
                <a href="/">INSTAGRAM</a>
                <a href="/">TWITTER</a>
            </section>
       </div>
    )
}

export default Footer;