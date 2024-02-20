import { useState, useEffect } from "react";

function DynamicInput() {

    interface DataItem {
        name: string;
        value: number;
      }

    const [data, setData] = useState<DataItem[]>([]);

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data") || "[]");
        if (storedData) {
            setData(storedData);
        }
    }, []);

    // Save data to localStorage whenever it changes
    const handleSubmit = () => {
        localStorage.setItem("data", JSON.stringify(data));
        console.log("Form data submitted to localStorage:", data);
        window.location.reload(); // Refresh the page
    };
    const handleAdd = () => {
        setData([...data, { name: "", value: 0 }]);
    };

    const handleChange = (e:any, index:any) => {
        const { name, value } = e.target;
        const newData:any = data.map((item:any, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setData(newData);
    };

    const handleIncrement = (index:any) => {
        const newData:any = [...data];
        newData[index].value++;
        setData(newData);
    };

    const handleDecrement = (index:any) => {
        const newData:any = [...data];
        if (newData[index].value > 0) {
            newData[index].value--;
            setData(newData);
        }
    };

    const handleDelete = (index:any) => {
        const newData:any = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    useEffect(() => {
        console.log(localStorage.getItem("data"));
    }, []);

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubmit}>Submit</button>
            {data.map((item:any, index) => (
                <div key={index}>
                    <input
                        name="name"
                        value={item.name}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <input
                        type="number"
                        name="value"
                        value={item.value}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <button onClick={() => handleIncrement(index)}>+</button>
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default DynamicInput;
