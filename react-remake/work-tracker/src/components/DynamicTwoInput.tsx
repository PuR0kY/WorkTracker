import React, { useState, useEffect } from "react";
import "../css/App.css"

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
  
  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div >
      <div className="add">
        <button className="add-button" onClick={handleClick}>Add</button>
      </div>
      {data.map((val, i) => (
        <div className="inputs" key={i}>
          <input
            name="name"
            value={val.name || "Název"}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            name="value"
            type="number" // Ensure input is of type number for the value
            value={val.value}
            onChange={(e) => handleChange(e, i)}
          />
          <div className="delete">
              <button className="delete-button" onClick={() => handleDelete(i)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicTwoInput;
