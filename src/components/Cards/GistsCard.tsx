import React from 'react';
import './GistsCard.css';

interface IGistsCardProps {
  authorName: string;
  filename: string;
  description: string;
  language: string;
  avatar_url: string;
}

export default function GistsCard({
  authorName,
  description,
  language,
  avatar_url,
}: IGistsCardProps) {
  return (
    <div className="Gists">
      <div className="item">{authorName}</div>
      <div className="item">{description}</div>
      <div className="item">{language}</div>
    </div>
  );
}
