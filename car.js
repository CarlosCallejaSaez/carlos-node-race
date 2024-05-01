class Car {
    constructor(name, maxSpeed, acceleration) {
      this.name = name;
      this.speed = 0;
      this.maxSpeed = maxSpeed;
      this.acceleration = acceleration;
    }
  
    accelerate() {
      this.speed += this.acceleration;
      if (this.speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      }
    }
  }
  
  module.exports = Car;
  