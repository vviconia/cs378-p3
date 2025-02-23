import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader'
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const menuHeader = [
  {
    id: 11,
    title: 'UT-Japan',
    logoName: 'JPLogo.png',
    restaurant: 'Asia Brought to Texas',
    description: 'The Flavor Spot of UT',
  }
];

function App() {
  // State to track item counts
  const [counts, setCounts] = useState({});

  const addItem = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const subtractItem = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  const clearAll = () => {
    setCounts({});  // Reset counts to 0 for all items
  };

  const handleOrder = () => {
    // Filter out items that have a count of 0
    const orderedItems = menuItems.filter(item => counts[item.id] > 0);
    
    if (orderedItems.length === 0) {
      alert("No items in cart");
      return;
    }

    // Build the message for the alert
    const orderMessage = orderedItems
      .map(item => `${item.title}: ${counts[item.id]}`)
      .join("\n");

    // Show the alert with the order details
    alert(`Your order has been placed!\n\n${orderMessage}`);
  };

  // Calculate subtotal dynamically
  const subtotal = menuItems.reduce((total, item) => {
    return total + (counts[item.id] || 0) * item.price;
  }, 0);

  return (
    <div class="parent">
      <div id="container">

        <div class="text-center">
          <img src={`${process.env.PUBLIC_URL}/JPLogo.png`} alt="restaurant logo" class="logoImage" />
        </div>

        <MenuHeader title={menuHeader[0].title} />
        <MenuHeader logoName={`${process.env.PUBLIC_URL}/${menuHeader[0].logoName}`} />
        <MenuHeader restaurant={menuHeader[0].restaurant} />
        <MenuHeader description={menuHeader[0].description} />
        

        <h1>Menu</h1>

        <div>
          {/* Display menu items dynamicaly by iterating over the provided menuItems */}
          {menuItems.map(({ id, title, imageName, description, price }, index) => (
            <MenuItem 
              key={id} 
              title={title} 
              imageName={`${process.env.PUBLIC_URL}/images/${imageName}`} 
              description={description} 
              price={price} 
              count={counts[id] || 0}
              onAdd={() => addItem(id)}
              onSubtract={() => subtractItem(id)}
            />
          ))}
        </div>

        <div class="row">
          <div class="col-8">
            <p>Subtotal: ${subtotal}</p>
          </div>
          <div class="col-2">
          <button type="button" className="orderButton" onClick={handleOrder}>Order</button>
          </div>
          <div class="col-2">
            <button type="button" className="clearButton" onClick={clearAll}>Clear all</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
