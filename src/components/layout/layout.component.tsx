import React from 'react';
import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
