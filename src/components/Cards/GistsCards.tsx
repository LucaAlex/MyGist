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
          />
        );
      });
    }
    return null;
  };

  return <div>{renderGists(gists)}</div>;
}
