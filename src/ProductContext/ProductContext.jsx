import { createContext, useState } from 'react'

const ProductViewModeContext = createContext()

const ProductViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('cards')

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'))
    console.log(viewMode)
  }

  return (
    <ProductViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ProductViewModeContext.Provider>
  )
}

export { ProductViewModeContext, ProductViewModeProvider }
