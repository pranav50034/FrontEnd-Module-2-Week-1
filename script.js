/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  
  //Printing the array with map()
  arr.map((element) => {
    if(element.profession==="developer"){
      console.log(element)
    }
  })
}

function PrintDeveloperbyForEach() {
  
  //Printing the array with forEach()
  arr.forEach((element) => {
    if(element.profession==="developer"){
      console.log(element)
    }
  })
}

function addData() {

  //Creating a new object
  let object = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }

  //Pushing it into the array
  arr.push(object)

  //Printing the final array
  for(let i = 0 ; i<arr.length; i++){
    console.log(arr[i])
  }
}

function removeAdmin() {
  
  //Creating a variable to store the index of the element to be deleted
  let desiredIndex = [-1]

  //Iterating over the array to look for the desired element
  for(let i = 0; i<arr.length; i++){

    if(arr[i].profession==="admin"){

      //Assigning the index  value to the variable created
      desiredIndex = i

    }
  }

  //Using splice() to delete the element at index 'desiredIndex'
  arr.splice(desiredIndex, 1)

  //Printing the final array
  for(let i = 0 ; i<arr.length; i++){
    console.log(arr[i])
  }
}


function concatenateArray() {
  
  //Creating a new array
  let arr2 = [
    { id: 5, name: "merlin", age: "22", profession: "consultant" },
    { id: 6, name: "jacob", age: "23", profession: "advisor" },
    { id: 7, name: "bella", age: "21", profession: "HR" },
  ];

  //Pushing the elements of new array to the existing one
  for(let i = 0; i<arr2.length; i++){
    arr.push(arr2[i])
  }

  //Printing the final array
  for(let i = 0 ; i<arr.length; i++){
    console.log(arr[i])
  }
}
