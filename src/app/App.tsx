"use client"
import { store } from '@/Redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const App = ({children} : {children : React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}

export default App