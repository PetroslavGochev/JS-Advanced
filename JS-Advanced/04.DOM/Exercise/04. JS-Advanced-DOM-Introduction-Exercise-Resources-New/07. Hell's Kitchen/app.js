function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   onClick();
   function onClick() {
      //    let test = '["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]';
      let textArea = document.getElementById('inputs').getElementsByTagName('textarea')[0].value;
      if(textArea != ''){
         let result = {};
         let collection = textArea.replace('"]', '').split('","');
   
         for (const restaurantData of collection) {
   
            let restaurant = restaurantData.split(' - ');
            let nameOfRestaurant = restaurant.shift().replace('["', '');
   
            if (!result[nameOfRestaurant]) {
               result[nameOfRestaurant] = [];
            }
            let workersData = [];
            if (restaurant.length > 0) {
               workersData = restaurant[0].split(', ');
            }
   
            for (let index = 0; index < workersData.length; index++) {
               let personData = workersData[index].split(' ');
               let name = personData[0];
               let salary = Number(personData[1]);
   
               let worker = {
                  name: name,
                  salary: salary,
               }
                  ;
               result[nameOfRestaurant].push(worker);
            }
            result[nameOfRestaurant].sort(function (a, b) { return b.salary - a.salary });
         }
         let restaurantAverageSalary = [];
         for (const [key, value] of Object.entries(result)) {
            let averageSalary = 0;
            for (const salary of value) {
               averageSalary += salary.salary;
            }
            averageSalary /= value.length;
            restaurantAverageSalary.push([key, averageSalary]);
         }
         restaurantAverageSalary.sort(function (a, b) { return b[1] - a[1] });
   
         let bestRestaurantName = restaurantAverageSalary[0][0];
         let bestRestaurantAverage = restaurantAverageSalary[0][1].toFixed(2);
         let bestSalary = Math.round(result[bestRestaurantName][0].salary);
         let bestRestaurantParagraph = document.getElementById('bestRestaurant').getElementsByTagName('p')[0];
         bestRestaurantParagraph.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAverage} Best Salary: ${bestSalary.toFixed(2)}`;
   
         // console.log(bestRestaurantParagraph);
   
         let workers = document.getElementById('workers').getElementsByTagName('p')[0];
         workers.textContent = result[bestRestaurantName].map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
   
         // console.log(workers);
      }
   }
}