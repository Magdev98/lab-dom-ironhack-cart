// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity
  product.querySelector('.subtotal span').textContent = subTotal
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Its purpose is to call the function `updateSubtotal` with every `product` DOM node!
  //Start with getting the DOM nodes for each product row. Currently, we have two products; thus, we have two rows with the class `product`. Maybe using [getElementsByClassName].
  const calculateProducts = document.querySelectorAll('.product');
  let totalProducts = 0;
  calculateProducts.forEach(product => {
  totalProducts += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = totalProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
