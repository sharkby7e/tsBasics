import React, { useReducer, useState, useRef } from "react";
// import { useState, useRef } from "react";

interface Todo {
  id: number;
  text: string;
}

interface AddItemProps {
  handleClick: (text: Todo["text"]) => void;
}

const initialState = { count: 0 };

enum ACTION_TYPE {
  increment = "increment",
  decrement = "decrement",
}

function AddItem({ handleClick }: AddItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="add-todo">
      <input ref={inputRef} placeholder="What do you need to do?" />
      <button
        onClick={() => {
          if (inputRef.current && inputRef.current.value) {
            handleClick(inputRef.current.value);
            inputRef.current.value = "";
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

function reducer(state: typeof initialState, action: { type: ACTION_TYPE }) {
  switch (action.type) {
    case ACTION_TYPE.increment:
      return { count: state.count + 1 };
    case ACTION_TYPE.decrement:
      return { count: state.count - 1 };
    default:
      throw new Error("What in the world?");
  }
}

function App() {
  const [item, setItems] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(text: Todo["text"]) {
    return setItems([...item, { text, id: item.length + 1 }]);
  }

  function remove(id: Todo["id"]) {
    return setItems([...item.filter((item) => item.id !== id)]);
  }

  return (
    <div className="App">
      <h1>You have {item.length} ToDo's</h1>
      <ul>
        {item.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => remove(item.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <AddItem handleClick={handleClick} />
      Count {state.count}
      <button onClick={() => dispatch({ type: ACTION_TYPE.decrement })}>
        -
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
        +
      </button>
    </div>
  );
}

export default App;
