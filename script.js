console.error("Hello! I am an Error! Fix me if you Dare!");
productArray = [];
function addProduct() {
  let input = document.getElementById("product").value;

  // const newDiv = document.createElement("div");
  // // newDiv.textContent = "This is a new div element.";
  // // newDiv.innerHTML =
  // //   "<h2> Hello!</h2><p>This is a new div created using JavaScript.</p>";
  // newDiv.id = "myNewDiv";
  // newDiv.classList.add("myClass");
  // newDiv.classList.add("anotherClass");
  // document.body.appendChild(newDiv);
  // const parentElement = document.getElementById("output");
  // if (parentElement) {
  //   parentElement.appendChild(newDiv);
  // }

  let newProduct = { name: input };
  productArray.push(newProduct);
  console.log(productArray);
  const product = ["Hammer", "Nail", "Screwdriver", "Wrench", "Pliers"];
  let aLen = product.length;
  let text = "<ul>";
  for (let i = 0; i < aLen; i++) {
    text += "<li>" + product[i].name + "</li>";
  }
  text += "</ul>";

  const myInput = document.getElementById("product");
  myInput.value = "";
  const output = document.getElementById("output");
  output.style.display = "block";
  for (let i = 0; i < productArray.length; i++) {
    const productDiv = document.createElement("div");
    productDiv.textContent = `${productArray[i].name}`;
    output.appendChild(productDiv);
  }
  const products = [
    { name: "Hammer", price: "22.97" },
    { name: "Nail", price: "3.49" },
    { name: "Screwdriver", price: "2.49" },
    { name: "Wrench", price: "5.99" },
    { name: "Pliers", price: "7.49" },
  ];

  return false;
}
