import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MantineProvider } from '@mantine/core';
import App from './App';
// eslint-disable-next-line
const rootElement: HTMLElement | any = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
