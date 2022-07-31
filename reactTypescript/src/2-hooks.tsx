import React, { useRef } from "react";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

interface AddItemProps {
  handleClick: (text: Todo["text"]) => void;
}

function AddItem({ handleClick }: AddItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="add-todo">
      <input ref={inputRef} placeholder="what do you need to do?" />
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

function App() {
  const [item, setItems] = useState<Todo[]>([]);

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
    </div>
  );
}

export default App;
