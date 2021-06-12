import React, { useContext, useEffect, useState } from 'react';
import './GistsCard.css';
import { Forks } from '../Forks';
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../../../src/contexts/GlobalContext';
import axios from 'axios';

interface IGistsCardProps {
  authorName: string;
  filename?: string;
  description: string;
  language?: string;
  gist: any;
  files: any;
  forksUrl: string;
  avatar_url?: string;
}

export default function GistsCard({
  authorName,
  description,
  language,
  forksUrl,
  gist,
  files,
  avatar_url,
}: IGistsCardProps) {
  // const global = useContext(GlobalContext);
  // const [files, setFiles] = useState<any>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = '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';
  //     axios
  //       .get(gist, { headers: { Authorization: `Bearer ${token}` } })
  //       .then((response) => {
  //         setFiles(response.data.files);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };
  //   fetchData();
  // }, [gist]);

  const renderFiles = (files: any) => {
    if (files) {
      let filesInfo: any = [];
      Object.keys(files).forEach((key) => {
        filesInfo.push({
          url: files[key].raw_url,
          name: files[key].filename,
          language: files[key].language,
        });
      });
      return filesInfo.map((element: any) => {
        return (
          <div>
            <a key={element.url} href={element.url}>
              {element.name}
            </a>
            <span>{element.language}</span>
          </div>
        );
      });
    }
    return null;
  };

  return (
    <div className="Gist" onClick={() => {}}>
      <div className="item">
        <img src={avatar_url} alt=""></img>
      </div>
      <div className="item">{authorName}</div>
      <div className="item">
        <h4>Description: </h4>
        {description}
      </div>
      <div>{renderFiles(files)}</div>
      <div className="item">{language}</div>
      <Forks forksUrl={forksUrl}></Forks>
    </div>
  );
}
