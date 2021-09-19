import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Вилка" },
    { value: 4, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const indexOfItemToChange = newCounters.findIndex(
      (item) => item.id === counterId
    );
    newCounters[indexOfItemToChange].value += 1;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const indexOfItemToChange = newCounters.findIndex(
      (item) => item.id === counterId
    );
    if (newCounters[indexOfItemToChange].value > 0) {
      newCounters[indexOfItemToChange].value -= 1;
      setCounters(newCounters);
    }
  };

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id != counterId);
    setCounters(newCounters);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a,c) =>a+c.value, 0)} />
        <Counters
        counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
