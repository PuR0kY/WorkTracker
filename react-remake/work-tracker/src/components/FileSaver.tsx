import { CSVLink } from "react-csv";

export default function createFile() {
  const countersData = [];
  const dataData:any = [];

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
        data.forEach((item:any) => {
          dataData.push(item);
        });
      }
    }
  }

  // Combine both sets of data
  const combinedData = [...countersData, ...dataData];

  // Modify the data format before passing it to CSVLink
  const csvData = combinedData.map((item) => ({
    "Name": item.name,
    "Value": item.value
  }));

  return (
    <CSVLink data={csvData} filename={"localStorageData.csv"}>
      <button>Export</button>
    </CSVLink>
  );
}
