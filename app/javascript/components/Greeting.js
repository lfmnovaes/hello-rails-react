import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/reducers/greetingReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingStore = useSelector((store) => store.greetingStore);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const displayOneGreeting = () => {
    console.log('get one greet');
  }

  return (
    <>
      Greeting: 
      <button className="getGreetingsBtn" onClick={ () => displayOneGreeting() }>Get a Random Greeting</button>
      <br />
    </>
  );
}

export default Greeting;
