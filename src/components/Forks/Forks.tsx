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
    return forks
      .reverse()
      .slice(0, 3)
      .map((element: any) => {
        if (element.owner !== undefined)
          return <img key={element.id} src={element.owner.avatar_url} alt="" />;
        else
          return (
            <img
              key={element.id}
              src={
                'https://www.gravatar.com/avatar/05b6d7cc7c662bf81e01b39254f88a49?d=identicon'
              }
              alt=""
            />
          );
      });
  };

  return (
    <div className="item">
      <h3>Last 3 forks: </h3>
      {renderForks(forks)}
    </div>
  );
}
