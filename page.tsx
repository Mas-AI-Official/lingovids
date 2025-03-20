import React, { FC, ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add your global layout components here, e.g., header, footer */}
      {children}
    </div>
  );
};

const Page = () => {
  return (
    <RootLayout>
      {/* Page content goes here */}
      <h1>Welcome to the Page</h1>
    </RootLayout>
  );
};

export default Page;
