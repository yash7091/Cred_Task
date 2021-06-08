let data = [
    {
        "date":"2020-06-18",
        "amount":200
    },
    {
        "date":"2019-05-20",
        "amount":100
    },
    {
        "date":"2020-04-20",
        "amount":250
    },
    {
        "date":"2020-05-01",
        "amount":500
    },
    {
        "date":"2019-03-05",
        "amount":600
    }    
]

let result = {}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

for(let obj of data){
    let month = new Date(obj.date).getMonth()
    let year = new Date(obj.date).getFullYear()
    // console.log(obj.date, month, year, obj.amount)
    if(!result[year]){
        result[year] = {total:0, monthly:{}}
    }
    result[year]['total'] += obj.amount
    
    if(!result[year]['monthly'][monthNames[month]]){
        result[year]['monthly'][monthNames[month]] = 0
    }
    result[year]['monthly'][monthNames[month]] += +obj.amount
}

console.log(result)