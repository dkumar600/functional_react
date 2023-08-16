import { useState } from "react"

const ColorBank = () => {
    const[colrList, setColrList] = useState([]);
    const[colr, setColr] = useState("");

    const InputColr = () => {
        function enterColr(){
            const x = document.getElementById("colr").value;
            setColr(x);
            setColrList((prevState) => {
                return [...prevState, x]
            });
            console.log(colrList);

        }
        function isColor(strColor){
            var s = new Option().style;
            s.color = strColor;
            return s.color == strColor;
          }
        return(
            <>
            <label>
                Enter your Color:
                <input type="text" id="colr" />
            </label>
            <button onClick={enterColr}>Enter</button>
            <h3>Color Searched:</h3>
            <p>{colr} <span style={{display:'inline-block',backgroundColor: colr,height:10,width:50}}></span></p>
            <h3>List All inputed Colors</h3>
            <ul>
                {
                    colrList.map((item, index) => { 
                        let color1 = item.toLowerCase();
                        if(!(isColor(color1))){
                            color1 = "black";
                        }
                        return(
                        <li key={index}>{item} <span style={{display:'inline-block',backgroundColor: color1,height:10,width:50}}></span></li>
                    )})
                }
            </ul>
            </>
        )
    }
    return(
        <InputColr/>
    )
}
export default ColorBank;