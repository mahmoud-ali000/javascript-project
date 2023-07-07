// JavaScript code for handling the product view buttons

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get all the view buttons
  const viewButtons = document.querySelectorAll('button');

  // Add a click event listener to each view button
  viewButtons.forEach(function(viewButton) {
    viewButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default button behavior

      // Get the parent li element that contains the product details
      const li = event.target.parentNode;

      // Get the details of the chocolate product
      const title = li.querySelector('h2').textContent;
      const imageSrc = li.querySelector('img').src;
      const description = li.querySelector('p').textContent;
      const price = li.querySelectorAll('p')[1].textContent;
      const inventory = li.querySelectorAll('p')[2].textContent;

      // Display the details in an alert box
      const message = `Title: ${title}\nDescription: ${description}\nPrice: ${price}\nInventory: ${inventory}`;
      alert(message);
    });
  });
});
