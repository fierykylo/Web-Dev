function calculateArea(event) {
    event.preventDefault(); // stops page reload

    const a = parseFloat(document.getElementById("side1").value);
    const b = parseFloat(document.getElementById("side2").value);
    const c = parseFloat(document.getElementById("side3").value);

    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.querySelector("#result").innerText = "Area = " + area.toFixed(2);
}