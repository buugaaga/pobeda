import { render } from 'react-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider, QueryClient } from 'react-query';
import { App } from './App';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </>,
  rootElement
);
