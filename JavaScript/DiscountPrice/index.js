function calculateDiscount() {
  const purchaseAmount = parseFloat(document.getElementById("amount").value);
  let discount = 0; // Initialize discount to 0

  if (purchaseAmount >= 100) {
    discount = 20; // Discount for purchases of 100 or more
  } else if (purchaseAmount >= 50) {
    discount = 10; // Discount for purchases of 50 or more
  } else {
    discount = 0; // No discount for amounts below 50
  }

  const discountedPrice = purchaseAmount - (purchaseAmount * discount) / 100;
  alert(`Discount: ${discount}% & Final Price: ₹${discountedPrice}`);
}
