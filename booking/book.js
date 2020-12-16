function UpdateCost() {
    var sum = 0;
    var gn, elem;
    for (i=0; i<4; i++) {
    gn = 'game'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
    }
    document.getElementById('totalcost').value = sum.toFixed(2);
}