function GetInputValue(tabIndex) {
    const button = document.querySelector(`.tabPanel:nth-child(${tabIndex + 1}) .counter-button`);
    return button.value;
}

let counters = [
    { count1: 0, count2: 0, count3: 0, count4: 0, count5: 0},
    { count6: 0, count7: 0, count8: 0, count9: 0, count10: 0, count11: 0, count12: 0 }
];


document.getElementById('exportButton').addEventListener('click', function() {
    let textContent = '';

    for (let i = 0; i < counters.length; i++) {
        const counter = counters[i];
        const count = counter.count;
        const tabPanelIndex = i + 1;

        textContent += `Tab ${tabPanelIndex}:\n`;

        // Loop through buttons and corresponding counters
        for (let j = 1; j <= 5; j++) { // Assuming you have 5 buttons and counters
            const button = document.querySelector(`.tabPanel:nth-child(${tabPanelIndex}) #button${j}`);
            const counterValue = counter[`count${j}`]; // Dynamically access count property

            textContent += `${button.textContent}: ${counterValue}\n`;
        }

        textContent += '\n';
    }

    var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "counters.txt");
});