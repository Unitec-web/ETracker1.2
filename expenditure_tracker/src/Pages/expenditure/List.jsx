import React from 'react';
import './list.css';

// Import the necessary images/icons
import foodIcon from '../../Icons/food.png';
import transportIcon from '../../Icons/transport.png';
import householdIcon from '../../Icons/household.png';
import moneyIcon from '../../Icons/money.png';

const ListItem = ({ name, type, price }) => {
  // Get the appropriate icon based on the type
  let typeIcon;
  switch (type) {
    case 'Food':
      typeIcon = foodIcon;
      break;
    case 'Transport':
      typeIcon = transportIcon;
      break;
    case 'Household':
      typeIcon = householdIcon;
      break;
    default:
      typeIcon = null;
  }

  return (
    <div className="list-item">
      <div className="vertical_align">
        <div className="name">{name}</div>
        {typeIcon && (
          <div className="type">
            <img src={typeIcon} alt={type} className="type-icon" />
            {type}
          </div>
        )}
      </div>
      {moneyIcon && (
        <div className="price">
            <img src={moneyIcon} alt="money" className='type-icon' />
            {price}</div>
      )} 
    </div>
  );
};

const List = () => {
  const items = [
    { name: 'Sugar Ball', type: 'Food', price: 'XAF 100' },
    { name: 'Buea - Douala Transport', type: 'Transport', price: 'XAF 1500' },
    { name: 'Sofa', type: 'Household', price: 'XAF 300k' },
    { name: 'University of Bueas Restau Plate', type: 'Food', price: 'XAF 100' },
  ];

  return (
    <div className="list-container">
      {items.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          type={item.type}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default List;