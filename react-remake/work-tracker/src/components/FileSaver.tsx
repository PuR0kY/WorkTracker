import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

export default function createFile() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const countersData = [];
    const dataData = [];

    // Loop through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key:any = localStorage.key(i);
      const value = localStorage.getItem(key);

      if (key && value) {
        // Check if the key is "counters" or "data" and parse accordingly
        if (key === "counters") {
          const counters = JSON.parse(value);
          for (const counterKey in counters) {
            countersData.push({ name: counterKey, value: counters[counterKey] });
          }
        } else if (key === "data") {
          const data = JSON.parse(value);
          for (const item of data) {
            dataData.push({ name: item.name, value: item.value });
          }
        }
      }
    }

    // Combine both sets of data
    const combinedData = [...countersData, ...dataData];

    // Modify the data format before setting it
    const newCsvData:any = combinedData.map((item) => ({
      "Name": item.name,
      "Value": item.value
    }));

    // Update CSV data state
    setCsvData(newCsvData);
  }, [localStorage]); // Watch for changes in localStorage

  return (
    <CSVLink data={csvData} filename={"WorkTracker.csv"}>
      <button>Export</button>
    </CSVLink>
  );
}
