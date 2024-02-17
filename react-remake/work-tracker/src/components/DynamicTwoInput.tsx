import React, { useState, useEffect } from "react";

interface DataItem {
  name: string;
  value: number;
}

function DynamicTwoInput() {
  const [data, setData] = useState<DataItem[]>([]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]") as DataItem[];

    setData(storedData);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleClick = () => {
    setData([...data, { name: "", value: 0 }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newData = [...data];
    newData[index] = { ...newData[index], [name]: name === "value" ? parseInt(value) : value };
    setData(newData);
  };

  const handleIncrement = (index: number) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].value += 0.5;
      return newData;
    });
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      {data.map((val, i) => (
        <div key={i}>
          <input
            name="name"
            value={val.name}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            name="value"
            type="number" // Ensure input is of type number for the value
            value={val.value}
            onChange={(e) => handleChange(e, i)}
          />
          <button onClick={() => handleIncrement(i)}>+</button>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DynamicTwoInput;
