function somaNumero() {
   
    const num1 = parseInt(document.getElementById("n1").value);
    const num2 = parseInt(document.getElementById("n2").value);
    const num3 = parseInt(document.getElementById("n3").value)
    
    let sum = num1 + num2 + num3;
  
    
    document.getElementById("resultado").innerHTML = "A soma é: " + sum;
  }
  
function calcular() {
			const input1 = parseFloat(document.getElementById("input1").value);
		  const input2 = parseFloat(document.getElementById("input2").value);
			const input3 = parseFloat(document.getElementById("input3").value);

  		let resultado = input1 + input2 + input3;

		document.getElementById("resultado2").innerHTML = "Resultado: " + resultado;
	}