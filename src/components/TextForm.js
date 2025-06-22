import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, SetText] = useState("");
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    SetText(newText);
    props.showAlert("Your Text has been converted into UpperCase","warning");
  };
  const handleDownClick = () => {
    let newText = Text.toLowerCase();
    SetText(newText);
    props.showAlert("Your Text has been converted into LowerCase","warning");
  };
  const handleOnChange = (event) => {
    SetText(event.target.value);
  };
  const handleClearClick = (event) => {
    let newText = "";
    SetText(newText);
    props.showAlert("Your Text has been Cleared","danger");
  };
  const handleSpaceClick = (event) => {
    let newText = Text.split(/[ ]+/);
    SetText(newText.join(" "));
    props.showAlert("Extra Space has been Removes","warning");
  };
  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Your Text has been Copy To Clipboard","success")
  };

  const handleDownloadTextClick = () => {
    const element = document.createElement("a");
    const file = new Blob([Text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Your Text has been Downloaded in form Of text.txt","success")
  };
  return (
    <div style={{color:props.mode==='light'?'#212529':'white'}}>
      <div className="mb-3 mt-2" >
        <h3 className="mx-3 my-2">Fastest online tool to manipulate your text for FREE!</h3>
        <textarea
          className="form-control mx-3"
          id="exampleFormControlTextarea1"
          value={Text}
          onChange={handleOnChange}
          placeholder="Type Or Paste Your Text Here"
          rows="7"
          style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='light'?'#212529':'white'}}
        ></textarea>
      </div>
      {Text.trim() === ''? (
        <button className="btn btn-secondary mx-2">
        Convert To UpperCase
      </button>
      ) : (
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      )}
       {Text.trim() === ''? (
        <button className="btn btn-secondary mx-2">
        Convert To LowerCase
      </button>
      ) : (
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert To LowerCase
      </button>
      )}
       {Text.trim() === ''? (
        <button className="btn btn-secondary mx-2">
        Remove Extra Spaces
      </button>
      ) : (
        <button className="btn btn-info mx-2" onClick={handleSpaceClick}>
        Remove Extra Spaces
      </button>
      )}
      {Text.trim() === ''? (
        <button className="btn btn-secondary mx-2">
        Clear
      </button>
      ) : (
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
        Clear
      </button>
      )}
      <div className="container">
        <h3 className="my-3">Text Summary:</h3>
        <h5>
          {Text.split(" ").length} words and {Text.length} characters
        </h5>
        <h6>Read Time : {0.008 * Text.split(" ").length} Minutes</h6>
        <hr/>
        <h3 className="my-3">Text Preview : </h3>
        <p>{Text.length>0?Text:"Nothing To Preview"}</p>
      {Text.trim() === ''? (
        <button className="btn btn-secondary">
        Copy To Clipboard
      </button>
      ) : (
        <button className="btn btn-warning" onClick={handleCopyClick}>
        Copy To Clipboard
      </button>
      )}
      {Text.trim() === ''? (
        <button className="btn btn-secondary mx-2">
          Download Text
      </button>
      ) : (
        <button className="btn btn-warning mx-2" onClick={handleDownloadTextClick}>
        Download Text
      </button>
      )}
      </div>
    </div>
  );
}
