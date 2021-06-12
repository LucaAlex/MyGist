import React from 'react';
import Layout from '../../components/Layout';
import './home.css';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="Homepage">
          <div className="columnLeftSide"></div>
          <div className="columnRightSide"></div>
        </div>
      </Layout>
    </>
  );
}