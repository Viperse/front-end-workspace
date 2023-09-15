import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({text, click}) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text : PropTypes.string.isRequired,
  click : PropTypes.func.isRequired
};  // propTypes를 지정해 주면 알맞은 변수 타입을 넣지 않았을 때 에러가 나기 때문에 혼란을 방지할 수 있다.

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter -1);
  };

  console.log("always~~");

  // useEffect는 특정한 조건일 때만 리로드 시켜 주는 컴포넌트

  useEffect(() => {
    console.log("useEffect~~");
  }, []);

  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);

  return (
    <div style={{backgroundColor : "pink", color : "skyblue"}}>
      <h1>Total Clicks : {counter}</h1>
      <Button text="+1" click={plus}/>
      <Button text="-1" click={minus}/>
      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button> */}
    </div>
  );
}

export default Counter;