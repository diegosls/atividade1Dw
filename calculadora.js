function calculadora(a, b, operador) {
    if (operador === '+') {
      return a + b;
    } else if (operador === '-') {
      return a - b;
    } else if (operador === '*') {
      return a * b;
    } else if (operador === '/') {
      if (b !== 0) {
        return a / b;
      } else {
        return "Erro: Divisão por zero não permitida!";
      }
    } else {
      return "Operador inválido!";
    }
  }
  
  console.log(calculadora(1, 1, '+')); 
  console.log(calculadora(1, 1, '-')); 
  console.log(calculadora(1, 1, '*')); 
  console.log(calculadora(1, 1, '/')); 
  