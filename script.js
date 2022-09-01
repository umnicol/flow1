let people = []

function calculateBMI() {
let personName = document.getElementById("bmi-name").value;
  let weightNumber = document.getElementById("bmi-weight").value ;
  let heightNumber = (document.getElementById("bmi-height").value)/100 ;

  count = weightNumber / (heightNumber * heightNumber);
  console.log(count);
  
  const element = document.querySelector("h2");
  element.textContent = personName + ", your BMI is " + count.toFixed(1);
  
let person = {
   name: personName,
   weight: weightNumber,
   height: heightNumber,
   BMI: count
}
console.log(person);

people.push(person);
console.log(people);

 document.getElementById("bmi-name").value ='';
 document.getElementById("bmi-weight").value='';
 document.getElementById("bmi-height").value = '';
}

















