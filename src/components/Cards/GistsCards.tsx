import axios from 'axios';

import { GistsCard } from '.';

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
