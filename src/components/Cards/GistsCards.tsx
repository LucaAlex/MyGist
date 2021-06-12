import React, { useState } from 'react';

import axios from 'axios';

import { GistsCard } from '.';
import Layout from '../../components/Layout';

const getForks = (forksUrl: string) => {
  const token = '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';
  axios
    .get(forksUrl, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  return [];
};

export default function GistsCards(props: any) {
  const { gists } = props;

  const renderGists = (gists: any) => {
    if (gists) {
      return gists.map((element: any) => {
        return (
          <GistsCard
            key={element.id}
            authorName={element.owner.login}
            description={element.description}
            forksUrl={element.forks_url}
            avatar_url={element.owner.avatar_url}
            gist={element.url}
            files={element.files}
          />
        );
      });
    }
    return null;
  };

  return <div>{renderGists(gists)}</div>;
}
