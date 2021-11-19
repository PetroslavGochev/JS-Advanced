function filter(data,criteria){
    let dataObject = JSON.parse(data);

    let [prop,value] = criteria.split('-');
    
    let result = dataObject.filter(item => item[prop] == value);

    for (let index = 0; index < result.length; index++) {
        console.log(`${index}. ${result[index].first_name} ${result[index].last_name} - ${result[index].email}`)
    }
}

console.log(filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
));