import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
    }

    function handleUpCase() {
        setText(text)
        let uppercase
        if (uppercase = text.toUpperCase()) {
            setText(uppercase)
            props.showAlert('Success convert to uppercase', 'success')
        } else {
            props.showAlert('text has been empty', 'warning')
        }
    }

    function handleLoCase() {
        let lowercase
        if (lowercase = text.toLowerCase()) {
            setText(lowercase)
            props.showAlert('Success convert to lowercase', 'success')
        } else {
            props.showAlert('text has been empty', 'warning')
        }

    }

    function handelCopyText() {
        if (text === '') {
            props.showAlert('text has been empty', 'warning')
        } else {
            navigator.clipboard.writeText(text)
            props.showAlert('Text Copied to Clipboard!', 'success')
        }
    }

    function handleExtraSpace() {
        if (text === "") {
            props.showAlert('text has been empty', 'warning')
        } else {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert('Remove extra spaces', 'success')
        }
    }

    function clearText() {
        if (text === '') {
            props.showAlert('text has been allready empty', 'warning')
        } else {
            setText('')
            props.showAlert('text has been cleared', 'success')
        }
    }


    return (
        <div>
            <div className='w-50 m-auto py-5 mt-5'>
                <div className="mb-3">
                    <h2 className='fs-4 my-3'>{props.heading}</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter text here' rows={3} value={text} onChange={handleChange} />
                </div>
                <button type='submit' className='btn btn-primary me-2 my-1' onClick={handleUpCase}>Convert Uppercase</button>
                <button type='submit' className='btn btn-primary me-2 my-1' onClick={handleLoCase}>Convert Lowercase</button>
                <button type='submit' className='btn btn-primary me-2 my-1' onClick={handelCopyText}>Copy Text</button>
                <button type='submit' className='btn btn-primary me-2 my-1' onClick={handleExtraSpace}>Remove Spaces</button>
                <button type='submit' className='btn btn-primary my-1' onClick={clearText}>Clear Text</button>
            </div>
            <div className='container w-50 m-auto'>
                <h2>Text summary</h2>
                <p> <span className='fs-6 fw-bold text-success'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</span> words and <span className='fs-6 fw-bold text-success'>{text.length}</span> Charaters</p>
                <p><span className='fs-6 fw-bold text-success'>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> Minutes read</p>
            </div>
        </div>
    )
}

export default TextForm