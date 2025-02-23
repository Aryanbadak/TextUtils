import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

function About(props) {
    
    return (
        <div>
            <div className={`w-50 m-auto mt-5 pt-5 bg-${props.mode}`}>
            <Accordion defaultActiveKey="0" flush>
                <h1 className='text-center mb-3'>About Us</h1>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header >Analyze your text</Accordion.Header>
                    <Accordion.Body>
                        Textutils gives you a way to analyze your text quickly and efficiently.Be it word count, character count
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Free to use</Accordion.Header>
                    <Accordion.Body>
                        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.Textutils reports the number of words and characters.Thus it is suitable for writing text with word / character limit
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    )
}

export default About
