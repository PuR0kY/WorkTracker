import React, { useState, useEffect } from "react";
import "../css/App.css"

//array objektů, ukládat do localStorage, vytvoří komponentu s tlačítkem Add, dva inputy, a tlačítka pro ovládání
function DynamicInput() {

    //Array s objekty (name: , value:)
    //useState,
    //useEffect pro localStorage jednotliveho prvku
    // handleAdd, handleIncrease, handleDecrease, handleReset
    // onChange, pro přepisování změn v inputech

    //Uložení array of objects do localStorage:

    function addEntry() {
        // Parse any JSON previously stored in allEntries
        var existingEntries = JSON.parse(localStorage.getItem("data"));
        if(existingEntries == null) existingEntries = [];
        var entryTitle = document.getElementById("data").name;
        var entryText = document.getElementById("data").value;
        var entry = {
            "name": entryTitle,
            "value": entryText
        };
        localStorage.setItem("entry", JSON.stringify(entry));
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("data", JSON.stringify(existingEntries));
    };


    //Práce s DynamicInputem:

    const [data, setData] = useState([{name: "", value: 0}]);

    const handleClick = () => {
        setData([...data, { name: "", value: 0 }]);
    }

    const handleChange =(e:any,i:any)=>{
    const {name,value}=e.target
    const onChangeVal:any = [...data]
    onChangeVal[i][name]=value
    setData(onChangeVal)
    }

    const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    }

    return( //Vrátit tlačítko add, které zobrazí dva inputy, plus a mínus tlačítka a tlačítko pro remove
        <>
            <div>
                <button onClick={handleClick}>Add</button>
                <button onClick={addEntry}>Submit</button>
                {
                    data.map((val,i)=>
                    <div>
                        <input name="name" value={val.name} onChange={(e)=>handleChange(e,i)}/>
                        <input name="value" value={val.value} onChange={(e)=>handleChange(e,i)}/>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                    )
                }
                <p>{JSON.stringify(data)}</p>
            </div>
        </>
    )
}

export default DynamicInput