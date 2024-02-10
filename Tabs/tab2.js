window.onload = function(){
  
    // Get references to all buttons and counters
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');
    const button10 = document.getElementById('button10');
    const button11 = document.getElementById('button11');
    const button12 = document.getElementById('button12');
  
    
    const counter6 = document.getElementById('counter6');
    const counter7 = document.getElementById('counter7');
    const counter8 = document.getElementById('counter8');
    const counter9 = document.getElementById('counter9');
    const counter10 = document.getElementById('counter10');
    const counter11 = document.getElementById('counter11');
    const counter12 = document.getElementById('counter12');
  
    // Initialize counters to 0
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9= 0;
    let count10 = 0;
    let count11 = 0;
    let count12 = 0;
  
    // Function to update counters
    function updateCounters() {
        counter6.textContent = count6;
        counter7.textContent = count7;
        counter8.textContent = count8;
        counter9.textContent = count9;
        counter10.textContent = count10;
        counter11.textContent = count11;
        counter12.textContent = count12;
    }
  
    // Add event listeners to buttons
    button6.addEventListener('click', function() {
        count6++;
        updateCounters();
    });
  
    button7.addEventListener('click', function() {
        count7++;
        updateCounters();
    });
  
    button8.addEventListener('click', function() {
        count8++;
        updateCounters();
    });
  
    button9.addEventListener('click', function() {
        count9++;
        updateCounters();
    });
  
    button10.addEventListener('click', function() {
        count10++;
      updateCounters();
    });

      button11.addEventListener('click', function() {
        count11++;
        updateCounters();
    });
  
    button12.addEventListener('click', function() {
        count12++;
      updateCounters();
  });
  
    // Initial update of counters
    updateCounters();
}