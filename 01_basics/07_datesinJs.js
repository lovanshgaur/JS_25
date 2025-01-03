// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

/* 
OUTPUTS--

2025-01-03T20:39:20.866Z
Sat Jan 04 2025 02:09:20 GMT+0530 (India Standard Time)
Sat Jan 04 2025
2025-01-03T20:39:20.866Z
2025-01-03T20:39:20.866Z
4/1/2025
4/1/2025, 2:09:20 am
*/

let newDate = new Date()
console.log(newDate.toLocaleString())
console.log(
newDate.toLocaleString('default',{
    weekday: "long"
})
)