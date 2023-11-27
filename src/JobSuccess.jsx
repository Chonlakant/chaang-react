import "./styles.css";
import React, { useState, useEffect } from "react";
import Signature from "signature_pad";
import { FaSave, FaUndo, FaRedo, FaEraser, FaSignature } from "react-icons/fa";


function JobSuccess() {
    const [signaturePad, setSignaturePad] = useState();
    const [savedSignature, setSavedSignature] = useState("");
    let signatureRedoArray = [];
  

    const readyPad = () => {
        let wrapper = document.getElementById("signature-pad");
        let canvas = wrapper?.querySelector("canvas");
        canvas.getContext("2d").scale(1, 1);
        let tempSignaturePad = new Signature(canvas, {
          backgroundColor: "rgb(255, 255, 255)"
        });
        setSignaturePad(tempSignaturePad);
      };
    
      const handleSave = () => {
        setSavedSignature(signaturePad.toDataURL());
      };

      const handleUndo = () => {
        let signatureRemovedData = [];
        let signatureData = signaturePad.toData();
        let signatureRedoData = _.cloneDeep(signatureData); //original data
    
        if (signatureData.length > 0) {
          signatureData.pop(); // remove the last dot or line
          signaturePad.fromData(signatureData);
          signatureRemovedData = signatureRedoData[signatureRedoData.length - 1];
          signatureRedoArray.push(signatureRemovedData);
        }
      };

      const handleRedo = () => {
        if (signatureRedoArray.length !== 0) {
          let values = signaturePad.toData();
          let lastValue = signatureRedoArray[signatureRedoArray.length - 1];
          values.push(lastValue);
          signaturePad.fromData(values);
          signatureRedoArray.pop(lastValue); //remove the redo item from array
        }
      };
    
      const handleClear = () => {
        signaturePad.clear();
      };
    
      useEffect(() => {
        readyPad();
      }, []);


  return (
    <div className="App">
    <div id="signature-pad">
      <canvas className="signature-canvas"></canvas>
      <div>
        <button onClick={handleSave}>
          <FaSave /> Save
        </button>
        <button onClick={handleUndo}>
          <FaUndo /> Undo
        </button>
        <button onClick={handleRedo}>
          <FaRedo /> Redo
        </button>
        <button onClick={handleClear}>
          <FaEraser /> Clear
        </button>
      </div>
    </div>
    <div className="saved-signature">
      <h3>
        Your Signature <FaSignature />
      </h3>
      <img
        className="signature-image"
        alt="saved-signature"
        src={savedSignature}
      />
    </div>
  </div>
  )
}

export default JobSuccess