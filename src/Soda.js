import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
    return (
        <div>
          <p>Here is a soda</p>
          <Link to="/">Return to Vending Machine</Link>
        </div>
      );
}

export default Soda;