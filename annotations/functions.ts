const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b:number): number => {
  return a - b;
};

function divide(a: number, b:number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number{
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

// we will not reach the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: {date: Date; weather: string}): void => {
const logWeather = ({date, weather}: {date: Date; weather: string}): void => {

  console.log(date);  // console.log(forecast.date);
  console.log(weather); // console.log(forecast.weather);

}

logWeather(todaysWeather);
