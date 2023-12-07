import React, {useState} from 'react'

export default function TextForm(props) {
    const [text , setText ]= useState('');
    // text="abc"; // wrong way to update state variable
    // setText('abc') // correct way to update state variable
    
    const handleclick=()=>{
        console.log("Upper case was clicked "+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!!", "success");

    }

    const handleloclick=()=>{
        console.log("Upper case was clicked "+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase!!","success");
    }

    const handlecopytext = () =>{
        var text=document.getElementById("mybox");
        //text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!!","success");
    }
    const handleclearclick=()=>{
        console.log("clear clicked "+text);
        let newtext='';
        setText(newtext);
        props.showAlert("Cleared text!!","success");
    }

    const handleextraspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces!!","success");
    }

    const handleonchange=(event)=>{
        console.log('on change');
        setText(event.target.value);

    }

    
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'? 'white': '#042743'}}>
    <h1 >{props.heading}</h1>
        <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'? 'white': '#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopytext}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>Remove extra space</button>
    </div>

    <div className="contatiner" style={{color : props.mode==='dark'? 'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>Words count {text.split(" ").filter((element)=>{return element.length!==0}).length} and characters count {text.length}</p>
        <h3>Text Preview</h3>
        <p>{text.length>0? text: "Enter something in above text box to preview it here"}</p>
    </div>
    </>
  )
}
