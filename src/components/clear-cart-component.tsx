'use client';

import { useCart } from '../hooks/use-cart';
import { useEffect } from 'react';

const ClearCartComponent = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default ClearCartComponent;
