"use client";
import NavigationDrawer from './NavigationDrawer';
import CartDrawer from './CartDrawer';
import FloatingCart from './FloatingCart';

export default function GlobalUI() {
  return (
    <>
      <NavigationDrawer />
      <CartDrawer />
      <FloatingCart />
    </>
  );
}
