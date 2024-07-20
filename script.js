/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(printByMap);
  function printByMap(arr){
    if(arr.profession === "developer"){
      console.log(arr.id + " " + arr.name +" "+ arr.age +" "+ arr.profession)
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printByMap);
  function printByMap(arr){
    if(arr.profession === "developer"){
      console.log(arr.id + " " + arr.name +" "+ arr.age +" "+ arr.profession)
    }
  }
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:5,name:"susan",age:"20",profession:"intern"})
  console.log(arr[arr.length-1])
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach(printByMap);
  function printByMap(arr){
    if(arr.profession === "admin"){
      arr.pop();
    }
    else{
      console.log(arr.id + " " + arr.name +" "+ arr.age +" "+ arr.profession)
    }
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  // first need to make another array
  // then need to concatenate
  // then print in console
  let intern = [
    {id: "1i", department: "sales", manager: "Shahil" },
    {id: "2i", department: "IT", manager: "Pushottam" },
    {id: "3i", department: "sales", manager: "Shahil" }
  ];

  let allEmp = arr.concat(intern);
  allEmp.forEach(printfunction);

  function printfunction(){
    console.log(allEmp);
  }
}
