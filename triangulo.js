function verificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      return "none";
    }
  
    if (a === b && b === c) {
      return "equilateral";
    }
  
    if (a === b || b === c || a === c) {
      return "isosceles";
    }
  
    return "scalene";
  }
  
  console.log(verificarTriangulo(2, 2, 2)); // "equilateral"
  console.log(verificarTriangulo(10, 10, 10)); // "equilateral"
  console.log(verificarTriangulo(3, 4, 4)); // "isosceles"
  console.log(verificarTriangulo(4, 3, 4)); // "isosceles"
  console.log(verificarTriangulo(4, 4, 3)); // "isosceles"
  console.log(verificarTriangulo(10, 10, 2)); // "isosceles"
  console.log(verificarTriangulo(3, 4, 5)); // "scalene"
  console.log(verificarTriangulo(10, 11, 12)); // "scalene"
  console.log(verificarTriangulo(5, 4, 2)); // "scalene"
  console.log(verificarTriangulo(0, 0, 0)); // "none"
  console.log(verificarTriangulo(3, 4, -5)); // "none"
  console.log(verificarTriangulo(1, 1, 3)); // "none"
  console.log(verificarTriangulo(2, 4, 2)); // "none"
  