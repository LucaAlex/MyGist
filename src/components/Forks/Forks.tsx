import axios from 'axios';
import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';

interface IForksProps {
  forksUrl: string;
}

export default function Forks({ forksUrl }: IForksProps) {
  const [forks, setForks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = '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';
      axios
        .get(forksUrl, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setForks(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [forksUrl]);

  const renderForks = (forks: any) => {
    console.log(forks);
    return forks.map((element: any) => {
      return <img key={element.id} src={element.owner.avatar_url} alt="" />;
    });
  };

  return <div>{renderForks(forks)}</div>;
}
