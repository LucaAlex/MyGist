import React, { ReactNode } from 'react';
import './PageContainer.css';
import Header from './Header';

interface IPageContainerProps {
  children: ReactNode;
}
export default function PageContainer({ children }: IPageContainerProps) {
  return (
    <>
      <Header></Header>
      <div className="Page">{children}</div>
    </>
  );
}
