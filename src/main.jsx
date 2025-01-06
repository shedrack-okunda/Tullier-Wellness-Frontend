import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>  
    </ThemeProvider>
  </StrictMode>,
)
