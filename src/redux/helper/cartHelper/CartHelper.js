export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return [...cartItems].map((item) =>
      item.id === cartItemToAdd.id
        ? {
            ...cartItemToAdd,
            quantity: item.quantity + 1,
            subTotal: item.price * (item.quantity + 1),
          }
        : item
    );
  }
  let initialSubTotal = cartItemToAdd.price;
  return [
    ...cartItems,
    { ...cartItemToAdd, quantity: 1, subTotal: initialSubTotal },
  ];
};

export const increaseQuantity = (cartItems, id) => {
  const existingCartItem = cartItems.find((item) => item.id === id);
  if (existingCartItem) {
    return [...cartItems].map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            subTotal: item.price * (item.quantity + 1),
          }
        : item
    );
  }
};

export const decreaseQuantity = (cartItems, id) => {
  const existingCartItem = cartItems.find((item) => item.id === id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  }
  let newSubTotal = existingCartItem.subTotal - existingCartItem.price;
  return [...cartItems].map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity - 1, subTotal: newSubTotal }
      : item
  );
};

export const removeItemFromCart = (cartItems, id) => {
  return cartItems.filter((item) => item.id !== id);
};
