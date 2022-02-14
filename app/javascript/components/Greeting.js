import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/reducers/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingStore = useSelector((store) => store.greetingReducer);
  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const displayOneGreeting = () => {
    console.log(greetingStore);
  }

  return (
    <div id="greeting">
      <h1>Title</h1>
      <button className="getGreetingsBtn" onClick={ () => displayOneGreeting() }>Get a Random Greeting</button>
    </div>
  );
};

export default Greeting;
