import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Capitalization  is done', 'success')
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Lowercase  is done', 'success')
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleCopyOnClick = () => {
        var copyText = document.getElementById("myBox")
        copyText.select();
        //Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        // alert("Copied the text: " + copyText.value);
        props.showAlert('Text is copied to clipboard', 'success')
    }

    const handleClear = () => {
        setText('')
        props.showAlert('Cleared Text', 'danger')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed', 'warning')
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label" />
                    <textarea
                        className="form-control"
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'grey' : 'white' }}
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-success mx-2" onClick={handleCopyOnClick}>Copy to Clipboard</button>
                <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your text summary</h2>
                <p>words:{text.split(" ").length} and letters:{text.length}</p>
            </div>
        </>
    );
}
