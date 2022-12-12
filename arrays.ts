const carMakers: string[] = ['ford','toyota','chevy'];
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values to the array
// carMakers.push(100);

// we can get help with 'map', 'forEach', 'reduce' functions
carMakers.map( (car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string) [] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // ERROR only string or dates

