# Shopping Cart Project

This project is a React-based shopping cart application that allows users to view products, adjust quantities, and see the updated subtotals and total amount. The application primarily uses the Context API to manage state, thereby avoiding the issues associated with prop drilling. It includes responsive design to ensure a seamless experience on both desktop and mobile devices.

# Features

- Display a list of products with images, descriptions, and prices.
- Allow users to adjust the quantity of each product.
- Calculate and display the subtotal for each product.
- Calculate and display the total amount for all products.
- Responsive design with media queries for optimal viewing on different devices.

# Technologies Used

- React.js
- Context API for state management
- CSS for styling
- Media queries for responsive design

# Setting Up the Project

- Create a `UserContext` in your `App.js` or a dedicated context file to manage the global state:
- Create the `Card` component in `components/Card.jsx`:
- Passing your initial data through the `UserContext.Provider` value:

# Project Structure

shopping-cart/
├── public/
│ ├── index.html
├── src/
│ ├── components/
│ │ ├── Card.jsx
│ │ ├── Total.jsx
│ ├── App.js
│ ├── index.js
│ ├── App.css
│ ├── index.css
├── package.json
├── README.md

# Code Explanation

** Card Component **
The `Card` component displays each product and allows users to adjust the quantity. It calculates the subtotal for each product and updates the state accordingly.

** Total Component **
The `Total` component calculates and displays the overall total of all product subtotals.

# website

- [https://shopy-contextapi.netlify.app/]preview

# Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes.
