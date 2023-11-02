import React from 'react';
import faqData from '../Data/faq.json';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <>
            <div className='faq-container'>
                <h1>Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header className='faq_header'>{item.question}</Accordion.Header>
                            <Accordion.Body className='faq-body'>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </>
    );
}

export default Faq;
