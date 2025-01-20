import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("");

    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success : ");
    }
    const handleonchange = (event)=>{
        setText(event.target.value);
    }
    const handleloclick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to Lowercase","Success : ");

    }
    const handleclrclick = () =>{
        let clrText = "";
        setText(clrText);
        props.showAlert("Text is Cleared","Success : ");

    }
    const handlecopy =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copy","Success : ");

    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed","Success : ");

    }
  return (
    <>
    <div className='container'  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloclick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclrclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>

        </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
            {text.split(/\s/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters.
        </p>
        <p>
            {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
  )
}
