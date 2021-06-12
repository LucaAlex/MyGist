import React, { useEffect, useContext, useState } from 'react';

import axios from 'axios';

import { useHistory, Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { GistsCard, GistsCards } from '../../components/Cards';
import './gists.css';
import { GlobalContext } from '../../contexts/GlobalContext';

export default function Gists() {
  const history = useHistory();
  const [gists, setGists] = useState(null);
  const global = useContext(GlobalContext);
  useEffect(() => {
    const fetchData = async () => {
      const token = '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';
      axios
        .get(`https://api.github.com/users/${global.userName}/gists`, {
          headers: { Authorization: `Bearer ${token}` },
        })
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
          <GistsCards gists={gists} />
        </div>
      </Layout>
    </>
  );
}
