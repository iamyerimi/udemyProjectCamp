let addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartItemsList = document.querySelector(".cart-items");

console.log(addToCartButtons);
console.log("cartItemsList: ", cartItemsList);

//각각의 버튼이 들어왔을 때
//반복문으로 버튼 하나씩 하나씩 하는거임 forEach 써서
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
});

//li 태그 만드는 func
function addToCart(name, price) {
  const cartItem = document.createElement("li"); //요건 todoList만들때 요래쓰면 된다
  cartItem.textContent = `${name} - ${price}`;

  //li 생성 후 cartItemsList에 넣어줌.
  cartItemsList.appendChild(cartItem);
  console.log(cartItemsList.appendChild(cartItem));
}
