import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import { router } from './app/Router';
import { AuthProvider } from './auth/AuthProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
