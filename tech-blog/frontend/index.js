import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme ({
  palette: {
    primary: { main: '#1e1f26'},
    secondary: { main: '#e8a209'}
  }
})

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  
)
