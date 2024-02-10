
window.onload = function(){

  // Get references to all buttons and counters
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const button4 = document.getElementById('button4');
  const button5 = document.getElementById('button5');

  
  const counter1 = document.getElementById('counter1');
  const counter2 = document.getElementById('counter2');
  const counter3 = document.getElementById('counter3');
  const counter4 = document.getElementById('counter4');
  const counter5 = document.getElementById('counter5');

  // Initialize counters to 0
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;

  // Function to update counters
  function updateCounters() {
      counter1.textContent = count1;
      counter2.textContent = count2;
      counter3.textContent = count3;
      counter4.textContent = count4;
      counter5.textContent = count5;
  }

  // Add event listeners to buttons
  button1.addEventListener('click', function() {
      count1++;
      updateCounters();
  });

  button2.addEventListener('click', function() {
      count2++;
      updateCounters();
  });

  button3.addEventListener('click', function() {
      count3++;
      updateCounters();
  });

  button4.addEventListener('click', function() {
      count4++;
      updateCounters();
  });

  button5.addEventListener('click', function() {
    count5++;
    updateCounters();
});

  // Initial update of counters
  updateCounters();

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
}