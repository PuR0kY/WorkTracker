export default function createFile(){
    //const allItems = [];
    let text = "";
    // Loop through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        // Get the key
        const key = localStorage.key(i);
        
        if (key !== null) {
            // Get the value associated with the key
            const value = localStorage.getItem(key);
        
        // Check if value is not null
        if (value !== null) {
            // Add the key-value pair to the allItems array
            //allItems.push(`${key}: ${value}`); // Push the formatted key-value pair
            text += (`${localStorage.key(i)}: ${value}`);
            text = text.replace(/,/g, ",\n");
            }
        }
        text = text.replace("counters: ", "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/debug: honey:core-sdk:\*/g, ""); 
    }
     // Create a string representation of the data
     

     // Create a blob with the data
    const blob = new Blob([text], { type: "text" });
 
     // Create a URL for the blob
     const url = URL.createObjectURL(blob);
 
     // Create a temporary anchor element to trigger the download
     const a = document.createElement("a");
     a.href = url;
     a.download = "localStorageData.txt";
 
     // Trigger the download
     a.click();
 
     // Clean up
     URL.revokeObjectURL(url);
}
  