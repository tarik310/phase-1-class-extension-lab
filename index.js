// Define the Polygon class
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, cur) => acc + cur, 0);
    }
  }
  
  // Define the Triangle class
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
  }
  
  // Define the Square class
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
  
    get area() {
      if (!this.isValid) {
        return undefined;
      }
      const [a, b, c, d] = this.sides;
      return a * b;
    }
  }
  