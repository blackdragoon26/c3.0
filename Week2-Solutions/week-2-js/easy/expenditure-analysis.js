/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions){
  let result=[];
 transactions.forEach(e => {
  if (result[e.category]){
     result[e.category]+=e.price;
  }
  else{
    result[e.category]=e.price;
  }
  
 });

 return Object.keys(result).map(category=>({
  category:category,
  totalSpent:result[category]
 }))

}















// function calculateTotalSpentByCategory(transactions) {
//   const categories={};
//   transactions.forEach((element) => {
//     if(!categories[element.category]){
//       categories[element.category]=0;
//     }
//     categories[element.category]+=element.price;
    
    
//   });
//   return Object.keys(categories).map((category)=>({
//   category,
//   totalSpent: categories[category],
// }));
// }

module.exports = calculateTotalSpentByCategory;
