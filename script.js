function addRow() {
    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cols = 5; // Number of columns

    for (var i = 0; i < cols; i++) {
        var cell = newRow.insertCell(i);
        if (i === cols - 1) {
            cell.innerHTML = '<div class="action-buttons"><button class="add" onclick="addRow()">+</button><button class="delete" onclick="deleteRow(this)">x</button></div>';
        } else if (i === 2) {
            cell.innerHTML = '<input type="date" class="input-box">';
        } else {
            cell.innerHTML = '<input type="text" class="input-box" placeholder="">';
        }
    }
}


function deleteRow(btn) {
    var row = btn.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
}