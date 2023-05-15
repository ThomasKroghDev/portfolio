import React from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';
import SnackbarProvider from '../context/snackbar/SnackbarProvider';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <SnackbarProvider>
        <main style={{ flex: '1 0 auto' }}>{children}</main>
      </SnackbarProvider>
      <Footer />
    </div>
  );
};

export default Layout;
