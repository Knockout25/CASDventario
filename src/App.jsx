import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './app/pages/sign-in/index';
import SignUp from './app/pages/sign-up/index';
import ForgotPassword from './app/pages/forgotpassword';
import AdmUserManagement from './app/pages/admmanagement';
import { ThemeProvider } from './components/theme-provider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/usermanagement" element={<AdmUserManagement />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
