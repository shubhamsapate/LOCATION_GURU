var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["idinp"] = document.getElementById('idinp').value;
    formData["genderinp"] = document.getElementById('genderinp').value;
    formData["fname"] = document.getElementById('fname').value;
    formData["lname"] = document.getElementById('lname').value;
    formData["cnumber"] = document.getElementById('cnumber').value;
    formData["ncode"] = document.getElementById('ncode').value;
    return formData;

}

function insertNewRecord(data) {
    var table = document.getElementById('userList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idinp;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.genderinp;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.lname;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cnumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ncode;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)"><i class="material-icons">edit</i></a>
	<a onClick="onDelete(this)"><i class="material-icons">delete</i></a>`;


}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("cnumber").value = "";
    document.getElementById("genderinp").value = "";
    document.getElementById("idinp").value = "";
    document.getElementById("ncode").value = "";
    selectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idinp").value = selectedRow.cells[0].innerHTML;
    document.getElementById("genderinp").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cnumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("ncode").value = selectedRow.cells[5].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idinp;
    selectedRow.cells[1].innerHTML = formData.genderinp;
    selectedRow.cells[2].innerHTML = formData.fname;
    selectedRow.cells[3].innerHTML = formData.lname;
    selectedRow.cells[4].innerHTML = formData.cnumber;
    selectedRow.cells[5].innerHTML = formData.ncode;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("userList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fname", "cnumber", "lname", "ncode").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

var Cnum = document.querySelector('#cnumber');

Cnum.addEventListener('input', restrictNumber);

function restrictNumber(e) {
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
}
var IDinp = document.querySelector('#idinp');

IDinp.addEventListener('input', restrictNumber);

function restrictNumber(e) {
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
}

paginator({
    table: document.getElementById("userList").getElementsByTagName("table")[0],
    box: document.getElementById("box"),
});