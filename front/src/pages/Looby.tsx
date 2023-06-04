import { useState } from "react";
import Board from "../components/Board";
import { Link } from "react-router-dom";

const Looby = () => {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(false);
  const [ouii, setOuii] = useState("salut");
  return (
    <div className="global">
      <Board></Board>
      <button
        onClick={() => {
          setHello(!hello);
          setOuii(ouii + "t");
        }}
      >
        {hello && <p>Hello</p>}
        {ouii}
      </button>
      <button
        onClick={() => {
          console.log(ouii);
          if (hello === true) setOuii("salut");
        }}
      >
        Oui
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {count}
      </button>
      <div>{hello ? <p>Hello</p> : <p>Not Hello</p>}</div>
      <Link to="/ToDoList">
        <button> To Do List </button>
      </Link>
      <Link to="/Contact">
        <button> Contact </button>
      </Link>
    </div>
  );
};

export default Looby;
