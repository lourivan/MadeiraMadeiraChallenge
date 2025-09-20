import { useContext, useState, createContext, ReactNode } from 'react'
import { ProductsType } from '~/commons/types/productTypes'

export interface ProductsCartProps extends ProductsType {
  quantity?: number
}

interface CartContextProps {
  cartItems: ProductsCartProps[]
  addToCart: (product: ProductsCartProps) => void
  decrementFromCart: (id: number) => void
  removeFromCart: (index: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductsCartProps[]>([])

  const addToCart = (product: ProductsCartProps) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id)

      if (existingIndex >= 0) {
        const updatedCart = [...prev]
        updatedCart[existingIndex].quantity! += 1
        return updatedCart
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const decrementFromCart = (id: number) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === id)

      if (existingIndex >= 0) {
        const updatedCart = [...prev]
        const qty = updatedCart[existingIndex].quantity ?? 1
        if (qty > 1) {
          updatedCart[existingIndex].quantity! -= 1
        } else {
          updatedCart.splice(existingIndex, 1)
        }
        return updatedCart
      }
      return prev
    })
  }

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        decrementFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }

export function useCart() {
  return useContext(CartContext)
}
