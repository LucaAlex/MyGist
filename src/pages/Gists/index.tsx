import React, { useEffect, useContext, useState } from 'react';

import axios from 'axios';

import Layout from '../../components/Layout';
import { GistsCards } from '../../components/Cards';
import './gists.css';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Gists() {
  const [gists, setGists] = useState(null);
  const global = useContext(GlobalContext);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://api.github.com/users/${global.userName}/gists`)
        .then((response) => {
          setGists(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [global.userName]);

  return (
    <>
      <Layout>
        <div className="Gists">
          <div className="columns">
            {' '}
            <GistsCards gists={gists} />
          </div>
        </div>
      </Layout>
    </>
  );
}
