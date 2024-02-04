// export default function Today() {
//     const day = new Date()
//     console.log(day)
//     return day
// }

export default function getDay(reg) {
    let today = new Date();
    let country = reg
    let options = {weekday: 'long', month: 'long', day: 'numeric'}
    return  today.toLocaleString(country,options)
  }
  