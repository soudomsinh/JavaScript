// Array Map

const numbers = [10,20,30,40,50];
const result = numbers.map(fooElement =>{
    const bazz = fooElement*2
    return bazz
    // you can simply do this below
    // return bazz *2
})

console.log(result); // output: [ 20, 40, 60, 80, 100 ]
console.log(`Array Map = ${result}` );  //Array Map = 20,40,60,80,100

`

Here is how it works
[10,20,30,40,50]
[10*2, 20*2, 30*2, 40*2, 50*2]
[ 20, 40, 60, 80, 100 ]

`

const Weather = ["raining", "sunny", "cloudy", "snowing", "thunder", "lightning", "foggy"];
const mapWeather = Weather.map((fooWeather, day)=>{
    return `Day = ${day+1}, Weather = ${fooWeather}`
})

console.log(mapWeather);

`
[
    'Day = 1, Weather = raining',
    'Day = 2, Weather = sunny',
    'Day = 3, Weather = cloudy',
    'Day = 4, Weather = snowing',
    'Day = 5, Weather = thunder',
    'Day = 6, Weather = lightning',
    'Day = 7, Weather = foggy'
  ]

`

                                // Array Object

const myArrObject = [
    {day: "10/06/2023",weather:"raining", temp: 20 },
    {day: "10/06/2023",weather:"sunny", temp: 27 },
    {day: "10/06/2023",weather:"cloudy", temp: 30 },
    {day: "10/06/2023",weather:"foggy", temp: 23 },
    {day: "10/06/2023",weather:"stormy", temp: 36 },
    {day: "10/06/2023",weather:"gloomy", temp: 24 },
    {day: "10/06/2023",weather:"sunny", temp: 28 },

]
console.log(myArrObject);

const objectWeather = myArrObject.map(bazz =>{
    return bazz.weather
})
console.log(objectWeather);

// or, you can do like this
const objectDay = myArrObject.map(zazz => zazz.day)
console.log(objectDay);