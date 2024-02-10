
  function GetInputValue() {
    const button = document.querySelector('.counter-button');
    return button.value;
  }

  // Export counters to text file
    // Export counters to text file
    document.getElementById('exportButton').addEventListener('click', function() {
        let textContent = `${button1.textContent}: ${count1}\n`;
        textContent += `${button2.textContent}: ${count2}\n`;
        textContent += `${button3.textContent}: ${count3}\n`;
        textContent += `${button4.textContent}: ${count4}\n`;
        textContent += `${GetInputValue()}: ${count5}\n`;

        var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "counters.txt");
    });
