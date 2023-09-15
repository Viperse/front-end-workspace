import { useState, useEffect } from 'react';

const Converter = () => {
    const [number, setNumber] = useState("");
    const [bool, setBool] = useState(true);
    const [text, setText] = useState("Invert");

    const change = (event) => {
        setNumber(event.target.value);
    }

    const reset = () => {
        setNumber("");
    }

    const invert = () => {
        setBool(!bool);
        reset();
    }

    useEffect(() => {
        if(bool) setText("Invert");
        else setText("Turn Back");
    }, [bool])

    
    return(
        <div>
            <h1>Time Converter</h1>
            <div>
                <label>Mitues</label><input type="number" placeholder='Mitues' disabled={!bool} onChange={change} value={bool ? number : Math.floor(number * 60)} />
            </div>
            <div>
                <label>Hours</label> <input type="number" placeholder='Hours' disabled={bool} value={bool ? Math.floor(number / 60) : number} onChange={change}/>
            </div>
            <Btn click={reset} btnText="Reset" backgroundColor="tomato"/>
            <Btn click={invert} btnText={text} backgroundColor="skyblue"/>
        </div>
        
    );
};

const Btn = ({click, btnText, backgroundColor}) => {
    return <button onClick={click} 
            style={{backgroundColor, // 매개변수명과 속성명을 일치시키면 그대로 들어감
                    color : 'white', 
                    padding : "15px 20px", 
                    border : "none", 
                    borderRadius : "10px"
                    }}
            >{btnText}</button>
            
}

export default Converter;