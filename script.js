/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
     arr.map(function(a){
      if(a.profession=="developer"){
        console.log(a.name);
      }
  
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
      arr.forEach(function(a){
      if(a.profession=="developer"){
        console.log(a.name);
      }
  
    })
  }
  
  function addData() {
    //Write your code here, just console.log
      let Id = prompt("enter id")
    let Name = prompt("enter name")
    let Age = prompt("enter age")
    let Profession = prompt("enter profession")
    let a =arr.length;
   arr[a]={id:Id,name:Name,age:Age,profession:Profession}
   console.log(arr)
    arr.forEach((a)=>console.log(a))
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(let x=0 ;x<arr.length;x++){
    if(arr[x].profession=="admin"){
      arr.splice(x,1)
    }
   }
    console.log(arr)
    arr.forEach((a)=>console.log(a))
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
    { id: 4, name: "Ajay", age: "20", profession:"analyst" },
    { id: 5, name: "Rahul", age: "19", profession:"analyst"},
    { id: 6, name: "Sumit", age: "17", profession:"analyst" },
  ];
  let arr3 = arr.concat(arr1)
  console.log(arr3)
  }