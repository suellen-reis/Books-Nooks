function showHide(id) {
    var display = document.getElementById(id).style.display;
    console.log(display)
    if (display === "none" || display === "") {
        document.getElementById(id).style.display = "table-row-group";
    }
    else {
        document.getElementById(id).style.display = "none";
    }
    
}
