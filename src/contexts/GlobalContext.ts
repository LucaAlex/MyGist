import React from 'react';

export interface IGlobal {
  userName: String;
  gist: any;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setGist: React.Dispatch<React.SetStateAction<any>>;
}

const global: IGlobal = {
  userName: '',
  gist: null,
  setUserName: (value) => {},
  setGist: (value) => {},
};

export const GlobalContext = React.createContext(global);
