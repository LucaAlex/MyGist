import React from 'react';
import Layout from '../../components/Layout';
import { GistsCard } from '../../components/Cards';
import './gists.css';

export default function Gists() {
  return (
    <>
      <Layout>
        <div className="Gists">
          <GistsCard
            authorName="Alex"
            description="performance"
            filename="Perf.py"
            language="pyhton"
            avatar_url=""
          ></GistsCard>
          <GistsCard
            authorName="Alex"
            description="performance"
            filename="Perf.py"
            language="pyhton"
            avatar_url=""
          ></GistsCard>
        </div>
      </Layout>
    </>
  );
}
