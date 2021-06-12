import PageContainer from './components/PageContainer';
import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <PageContainer>{children}</PageContainer>
    </>
  );
}
