function race(cars, totalDistance) {
    const boost = Math.floor(Math.random() * 3);
    let winner = null;
    let distanceCovered = 0;
    const trackLength = 75;
    const trackSymbol = '🚗';
  
    function drawTrack() {
  
   
      console.log('\nCarlosNodeRace in progress:');
      cars.forEach(car => {
        const progress = Math.floor((car.speed / car.maxSpeed) * trackLength);
        const remaining = trackLength - progress;
        console.log(`${car.name}: [${trackSymbol.repeat(progress)}${' '.repeat(remaining)}]`);
      });
    }
  
    while (!winner) {
      cars.forEach(car => {
        car.accelerate();
        if (boost === 0) {
          car.accelerate();
        } else if (boost === 1) {
          car.accelerate();
          car.accelerate();
        }
        distanceCovered += car.speed;
        drawTrack();
        if (distanceCovered >= totalDistance) {
          winner = car;
        }
      });
    }
    console.log(`\n${winner.name} has won the CarlosNodeRace!\n`);
  }
  
  module.exports = race;