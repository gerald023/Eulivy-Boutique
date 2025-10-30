import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/core/styles.css';
import { AuthProvider } from "./server/context/authContext";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </MantineProvider>
  </StrictMode>,
)
