import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [thickness, setThickness] = useState(0);

  const { addQuery } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newQuery = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addQuery(newQuery);
  };

  return (
    <>
      <h3>Add new query</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="length">
            Length <br />
            
          </label>
          <input
            type="number"
            value={length}
            onChange={e => setLength(e.target.value)}
            placeholder="Enter length..."
          />
          <label htmlFor="width">
            Width <br />
            
          </label>
          <input
            type="number"
            value={width}
            onChange={e => setWidth(e.target.value)}
            placeholder="Enter width..."
          />
          <label htmlFor="thickness">
            thickness <br />
            
          </label>
          <input
            type="number"
            value={thickness}
            onChange={e => setThickness(e.target.value)}
            placeholder="Enter thickness..."
          />
        </div>
        <button className="btn">Add Query</button>
      </form>
    </>
  );
};
