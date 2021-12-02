import { render } from 'react-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { App } from './App'
import { theme } from './theme'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>,
  rootElement
)
