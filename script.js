// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.
console.error("Hello! I am an Error! Fix me if you Dare!");
productArray = [];
function addProduct() {
  let input = document.getElementById("product").value;

  //Assignment One
  const newDiv = document.createElement("div");
  newDiv.textContent = "This is a new div element.";
  newDiv.innerHTML =
    "<h2> Hello!</h2><p>This is a new div created using JavaScript.</p>";
  newDiv.id = "myNewDiv";
  newDiv.classList.add("myClass");
  newDiv.classList.add("anotherClass");
  document.body.appendChild(newDiv);
  const parentElement = document.getElementById("output");
  if (parentElement) {
    parentElement.appendChild(newDiv);
  }

  // You need to change the id that this collects to product.
  // You will need to create a div using javascript,
  // Use this site to help you understand how: https://www.w3schools.com/jsref/met_document_createelement.asp

  // Once you create create a div,
  // you will need to get the output using the same method you did for the input
  // Except you do not need to include the value at the end.

  // CHALLENGE SECTION:
  // If you feel up for a challenge, try and use an if statement if(condition){run this code}
  // to return an alert if the input is empty. You will need to get the id as in previous assignments above
  // and then get the value at the end and check if they are strictly equal to an empty string.
  // If the code you will want to run after checking the condition is to run the alert method.
  // If you do not know the alert method, look it up on google using the w3schools,
  // do not forget to include a return false at the end to not reload your webpage.

  //Assignment Two

  let newProduct = { name: input };
  productArray.push(newProduct);
  console.log(productArray);
  const product = ['Hammer', 'Nail', 'Screwdriver', 'Wrench', 'Pliers'];
  let aLen = product.length;
  let text = "<ul>";
  for (let i = 0; i < aLen; i++) {
    text += "<li>" + product[i] + "</li>";
  }
  text += "</ul>";

  // Assignment 2:
  // You need to put the value of the input into an array to call later.
  // That means you will need to assign your input using brackets around it
  // to a newProduct variable, remember that assign can mean the equals sign(=).
  // Hint: You could push your product to a new array once you create a new variable
  // that makes a single object {} with the product variable you made above.
  // Please look up how to use push on an array here: https://www.w3schools.com/jsref/jsref_push.asp
  // use console.log and pass in the product array to check if you have it setup correctly.
  // console.log(productArray)



  // Examples:
  // for (let i = 0; i < productArray.length; i++) {
  //   const productDiv = document.createElement("div");
  //   productDiv.textContent = productArray[i].name;
  //   document.getElementById("output").appendChild(productDiv);
  // }
//const myInput = document.getElementById('myInputId'); 
// myInput.value = "";
//output.style.display = "block";
// const products = [
//     { name: "Laptop", price: 999 },
//     { name: "Phone", price: 499 },
//     { name: "Tablet", price: 299 }
// ];
// const productListDiv = document.getElementById("product-list");
// for (let i = 0; i < products.length; i++) {
//     const currentProduct = products[i];
//     const productDiv = document.createElement("div");
//     productDiv.textContent = `Index ${i}: ${currentProduct.name} - $${currentProduct.price}`;
//     productListDiv.appendChild(productDiv)

//Assignment Three
const myInput = document.getElementById("product");
myInput.value = "";
const output = document.getElementById("output");
output.style.display = "block";
for (let i = 0; i < productArray.length; i++) {
  const productDiv = document.createElement("div");
  productDiv.textContent = `Index ${i}: ${productArray[i].name}`;
  output.appendChild(productDiv);
}
const products = [
  { name: "Hammer", price: "22.97" },
  { name: "Nail", price: "3.49" },
  { name: "Screwdriver", price: "2.49" },
  { name: "Wrench", price: "5.99" },
  { name: "Pliers", price: "7.49" }
];

//Assignment 3:

  // Hint: Use a loop(look up the javascript loop on w3schools.) on your product array and set the max length of the loop to the array using
  // dot notation (array.length) and then you do the following:
  //
  // set the input to empty, similar how you would check in the if statement previously,
  // just get document.getelementbyid then set the .value to an empty string.

  // then set the output div to display block, its normally set to none, which means invisible
  // This means that you need to get your output variable use dot notation to set style.display = "block"

  // set the div.textContent equal to the the array index number [i] and dot notation of the product
  // `${productArray[i].your input}`

  // finally use the appendChild method from the output variable you had from earlier.
  // output.appendChild(yourdivnamehere)

  // this line is to prevent the webpage from reloading. DO NOT MODIFY IT.
  return false;
}
