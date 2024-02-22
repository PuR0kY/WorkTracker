import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

interface CreateFileProps {
  uniqueId: string;
}

export default function createFile({ uniqueId }: CreateFileProps) {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const countersData = [];
    const dataData = [];

    const localStorageKey = `data_${uniqueId}`;

    const value = localStorage.getItem(localStorageKey);
    if (value) {
      const data = JSON.parse(value);
      for (const item of data) {
        dataData.push({ name: item.name, value: item.value });
      }
    }

    // Loop through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key === "counters") {
        const counters = JSON.parse(localStorage.getItem(key)!);
        for (const counterKey in counters) {
          countersData.push({ name: counterKey, value: counters[counterKey] });
        }
      }
    }

    // Combine both sets of data
    const combinedData = [...countersData, ...dataData];

    // Modify the data format before setting it
    const newCsvData: any = combinedData.map((item) => ({
      "Druh práce": item.name,
      "Hodnota": item.value
    }));

    // Update CSV data state
    setCsvData(newCsvData);
  }, [uniqueId]); // Watch for changes in uniqueId

  // Generate a unique filename based on the current date and time
  const currentDate = new Date().toISOString().replace(/:/g, "-").replace(/\..+/, "");
  const filename = `${currentDate}.csv`;

  return (
    <CSVLink data={csvData} filename={filename} target="_blank" separator={";"} enclosingCharacter="">
      <button>Export</button>
    </CSVLink>
  );
}
