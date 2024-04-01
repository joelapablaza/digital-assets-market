import { Producto } from '@/backend/payload-types';
import { toast } from 'sonner';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type CartItem = {
  product: Producto;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Producto) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const isOnCart = state.items.filter(
            (i) => i.product.id === product.id
          );

          if (isOnCart.length > 0) {
            toast.error('Ya agregaste el item al carrito');
            return state;
          }
          return { items: [...state.items, { product }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
