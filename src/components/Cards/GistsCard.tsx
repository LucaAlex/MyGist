import React from 'react';
import './GistsCard.css';
import { Forks } from '../Forks';

interface IGistsCardProps {
  authorName: string;
  filename?: string;
  description: string;
  language?: string;
  files?: Array<any>;
  forksUrl: string;
  avatar_url?: string;
}

export default function GistsCard({
  authorName,
  description,
  language,
  forksUrl,
  files,
  avatar_url,
}: IGistsCardProps) {
  return (
    <div className="Gists">
      <div className="item">
        <img src={avatar_url} alt=""></img>
      </div>
      <div className="item">{authorName}</div>
      <div className="item">{description}</div>
      <div className="item">{language}</div>
      <Forks forksUrl={forksUrl}></Forks>
    </div>
  );
}
