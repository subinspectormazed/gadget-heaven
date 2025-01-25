const getCartList = () => {
  const cartListStr = localStorage.getItem("cart-item");
  if (cartListStr) {
    const cartList = JSON.parse(cartListStr);
    return cartList;
  } else {
    return [];
  }
};

const addToCartList = (id) => {
  const cartList = getCartList();

  cartList.push(id);
  const cartListStr = JSON.stringify(cartList);
  localStorage.setItem("cart-item", cartListStr);
};

const getWishList = () => {
  const wishListStr = localStorage.getItem("wish-list");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const wishList = getWishList();
  if (wishList.includes(id)) {
  } else {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish-list", wishListStr);
  }
};

export { addToCartList, addToWishList, getCartList, getWishList };
