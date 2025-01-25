function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    const ans = num1+num2;
    const res = document.getElementById("res");
    res.innerHTML = "Result : "+ans;
}