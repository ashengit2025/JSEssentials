// let exp1;
// let exp2;
// let exp3;

function totalexpense(exp1,exp2,exp3) {
    exp1 = parseFloat(document.getElementById('grocery1').value);
    exp2 = parseFloat(document.getElementById('grocery2').value);
    exp3 = parseFloat(document.getElementById('grocery3').value);

    let total  = exp1 + exp2 + exp3
    document.getElementById('result').innerText = `The total amount is: ${total}`;

}