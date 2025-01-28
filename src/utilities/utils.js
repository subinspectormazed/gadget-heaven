import { toast } from "react-toastify";

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
  if (cartList.includes(id)) {

  } else {
    cartList.push(id);
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem("cart-item", cartListStr);
  }
};

const removeFromCart = (id) => {
  const cartList = getWishList();
  localStorage.removeItem(id);
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
    toast.warn("Product already exists");
  } else {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish-list", wishListStr);
    toast.success("Successfully added to cart");
  }
};

export { addToCartList, addToWishList, getCartList, getWishList, removeFromCart };
