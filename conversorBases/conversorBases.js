function convertir(event) {
    event.preventDefault();
    const num = document.getElementById("numero").value;
    const base1 = document.getElementById("base1").value;
    const base2 = document.getElementById("base2").value;
    
    if (base1 === "10") {
      // Convertir de decimal a otra base
      const resultado = decimalToBase(num, base2);
      document.getElementById("resultado").textContent = `El resultado es ${resultado}`;
    } else if (base2 === "10") {
      // Convertir de otra base a decimal
      const resultado = baseToDecimal(num, base1);
      document.getElementById("resultado").textContent = `El resultado es ${resultado}`;
    } else {
      // Convertir entre dos bases diferentes
      const decimal = baseToDecimal(num, base1);
      const resultado = decimalToBase(decimal, base2);
      document.getElementById("resultado").textContent = `El resultado es ${resultado}`;
    }
  }
  
  function decimalToBase(num, base) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    while (num > 0) {
      const remainder = num % base;
      result = digits[remainder] + result;
      num = Math.floor(num / base);
    }
    return result;
  }
  
  function baseToDecimal(num, base) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    const numDigits = num.toString().toUpperCase().split("").reverse();
    for (let i = 0; i < numDigits.length; i++) {
      const digitValue = digits.indexOf(numDigits[i]);
      result += digitValue * Math.pow(base, i);
    }
    return result;
  }