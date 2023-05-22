import { useState } from 'react';
import { ReactComponent as Smile } from './assets/emoji-smile.svg';
import classes from './Pray.module.css';

const Pray = (props) => {
  const [rakat, setRakat] = useState(0);

  const incrementHandler = (event) => {
    event.preventDefault();
    setRakat(prevState => prevState + 1);
    props.onGetInfo({
      namaz:props.data.title,
      rakat:(+rakat+1),
      id:props.data.id,
    });

  };

  return(
    <form className={classes.container}>
      <label>{props.data.title}</label>
      {/* <input type="text" value={`${rakat} / ${props.data.bound}`}></input> */}
      <button type='button' onClick={incrementHandler}><Smile/></button>
    </form>
  );
};

export default Pray;