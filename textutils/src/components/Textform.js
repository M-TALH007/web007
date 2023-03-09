import React,{useState} from 'react'

export default function Textform(props) {
  const [text, settext] = useState('');
  const handleupclick = ()=>{
     //console.log("uper was click"+text);
    let newstext=text.toUpperCase();
    settext(newstext);
  }
  const handleLoclick = ()=>{
    //console.log("uper was click"+text);
   let newstext=text.toLowerCase();
   settext(newstext);
   props.showAlert("light mode has been enabled","success");
 }
 const handleClearclick = ()=>{
 let newstext='';
 settext(newstext);
 props.showAlert("light mode has been enabled","success");
}

  const handleOnChange = (event)=>{
   // console.log("change was clicked");
    settext(event.target.value);
    props.showAlert("light mode has been enabled","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy to clipborad!","sucess")
  }
  // const handlefindChange = (event) => {
  //   findWord(event.target.value);
  // };
  // const handleReplaceChange = (event) => {
  // console.log(replaceWord(event.target.value)) ;
  // };
  // const handleReplaceClick = () => {
  //   let newText = text.replaceAll(fWord,rWord);
  //   settext(newText);
  // };
  // const handleBinToDec = () => {
  //   let len = text.length;
  //   let x = 0;
  //   for (let i = 0; i < len; i++) {
  //     x = x + (text[i] - "0") * (1<<(len - i - 1));
  //   }
  //   // console.log(x);
  //   let newText = x.toString();
  //   settext(newText);
  // };
//   const capitalFirstLetter = ()=>{
//     let words = text.split(" ")
//    let uppercaseword = ''
//     words.forEach(element => {
//        uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
//     });
//     settext(uppercaseword)
// }
function DownLoadFile(filename, NewText) {
  const element = document.createElement("a");

  //A blob is a data type that can store binary data
  // "type" is a MIME type
  // It can have a different value, based on a file you want to save
  const blob = new Blob([NewText], { type: "plain/text" });

  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);

  //setAttribute() Sets the value of an attribute on the specified element.
  element.setAttribute("href", fileUrl); //file location
  element.setAttribute("download", filename); // file name
  element.style.display = "none";

  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();

  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
}
const DownloadText = () => {
  let fileName = "your.txt";

  DownLoadFile(fileName, text);
};

  return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} id="Box" rows="10" value={text} 
        style={{background:props.mode===`dark`?`#13466e`:`white` ,color:props.mode===`dark`?`white`:`#042743`}} ></textarea>

        {/* <div style={{display:"flex",marginTop:"25", gap:"5px",flexDirection:"column",justifySelf:"flex-end",justifyContent:"left"}}> */}
        <button disabled={text.length===0} style ={{margin:"7px"}} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to upper case</button>
        <button disabled={text.length===0}  onClick={handleLoclick} className="btn btn-primary mx-1 my-1">Convert to lower case</button>
        {/* <button disabled={text.length===0} style ={{margin:"7px"}} className="btn btn-primary" onClick={capitalFirstLetter}>Capital First Letter</button> */}
        {/* <button disabled={text.length===0} style ={{margin:"10px"}} className="btn btn-primary mx-2" onClick={handleDownloadclick}>Download text </button> */}
        <button disabled={text.length===0}  type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
        <button disabled={text.length===0}  type="submit" onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
        <button disabled={text.length===0}  type="submit" onClick={DownloadText} className="btn btn-primary  my-1mx-1">download text file</button>
        
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear text </button>
        {/* <button type="submit" onClick={DownLoadFile} className="btn btn-primary mx-1">download file</button> */}

        <button  disabled={text.length===0} type="submit" onClick={(event) =>{
          const box = document.getElementById("Box");
          box.setAttribute('style', 'font-style :italic;');
        }} className="btn btn-primary mx-1">Italic</button>

        {/* <button type="submit" onClick={handleBinToDec} className="btn btn-primary mx-1">String to equivalent decimal</button> */}

        
        {/* <button style ={{margin:"10px" } } className="btn btn-primary">Convert to itallic </button> */}
     
        
        
  
        </div>
    </div>
    <div className="continer my-3" style={{color:props.mode===`dark`?`white`:`black`}}>
      <h4 style={{ fontSize: 50,paddingTop: "10px" }}>Your Text Summary</h4>
      <p style={{fontsize:"25"}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words 
      and {text.length} characters</p>
      <p style={{fontsize:"25"}}>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the character</p>
      <h6 style={{ fontSize: 50,   paddingTop: "10px" }}> Preview</h6>
      <div><p>{text.length>0?text:"Nothing to preview"}</p></div>


    </div>
    </> 
  )
}
