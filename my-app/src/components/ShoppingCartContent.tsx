import { useContext, createContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContent = {
  // openCart: ()=>  void;
  // closeCart: ()=>  void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  // cartQuantity:number;
  // cartItem :  CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContent = createContext({} as ShoppingCartContent);

export function useShoppingCart() {
  return useContext(ShoppingCartContent);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [carItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return carItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter(item => item.id !== id);
    });

    return (
      <ShoppingCartContent.Provider
        value={{
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
        }}
      >
        {children}
      </ShoppingCartContent.Provider>
    );
  }
}
