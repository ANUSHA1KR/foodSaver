document.getElementById("donorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const foodName = document.getElementById("foodName").value;
  const quantity = document.getElementById("quantity").value;
  const expiry = document.getElementById("expiry").value;
  const location = document.getElementById("location").value;
  const photo = document.getElementById("photo").files[0];

  // For now, just simulate saving
  console.log("Food Posted:", { foodName, quantity, expiry, location, photo });

  document.getElementById("resultMsg").textContent = " Food posted successfully!";

  // Optional: reset form
  this.reset();
});
