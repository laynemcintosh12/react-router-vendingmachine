import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => {
    return (
        <div>
          <p>Here is some candy</p>
          <Link to="/">Return to Vending Machine</Link>
        </div>
      );
}

export default Candy;