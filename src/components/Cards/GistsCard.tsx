import './GistsCard.css';
import { Forks } from '../Forks';

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
          <div className="links">
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
