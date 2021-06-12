import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { isSetAccessorDeclaration } from 'typescript';
import { GlobalContext } from '../../../src/contexts/GlobalContext';
import { File } from '../../components/File';
import Layout from '../../components/Layout';

export default function Files() {
  const global = useContext(GlobalContext);
  const [files, setFiles] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = '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';
      axios
        .get(global.gist, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setFiles(response.data.files);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [global.gist]);

  const renderFiles = (files: any) => {
    if (files) {
      let content: any = [];
      Object.keys(files).forEach((key) => {
        content.push(files[key].content);
      });
      return content.map((element: any) => {
        return <File file={element}></File>;
      });
    }
    return null;
  };
  return (
    <Layout>
      <div>{renderFiles(files)}</div>
    </Layout>
  );
}
