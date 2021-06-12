import axios from 'axios';
import { useEffect, useState } from 'react';

interface IForksProps {
  forksUrl: string;
}

export default function Forks({ forksUrl }: IForksProps) {
  const [forks, setForks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(forksUrl)
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
      <h4>Last 3 forks: </h4>
      {renderForks(forks)}
    </div>
  );
}
