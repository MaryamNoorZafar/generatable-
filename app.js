// function generateTable() {
//     var getData = document.getElementById("number").value;
// var putData = document.getElementById("display");
// var i, temp;
// for(i=1; i<=10; i++){
// putData.innerHTML+=getData*i+"<br>";
// }




// }


function generateTable() {
    const num = document.getElementById('number').value;
    const tableDiv = document.getElementById('table');
    
    tableDiv.innerHTML = '';

    if (num) {
        const table = document.createElement('div');
        table.innerHTML = `<h3>Table of ${num}</h3>`;
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('div');
            row.textContent = `${num} x ${i} = ${num * i}`;
            table.appendChild(row);
        }
        tableDiv.appendChild(table);
    } else {
        alert('Please enter a number');
    }
}
