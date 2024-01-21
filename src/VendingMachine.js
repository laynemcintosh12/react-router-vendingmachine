import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
    <div>
      <h1>Vending Machine</h1>
        <p>Please select an item:</p>
            <Link to="/chips">Chips</Link>
        <br />
            <Link to="/soda">Soda</Link>
        <br />
            <Link to="/candy">Candy</Link>
    </div>
  );

}

export default VendingMachine;