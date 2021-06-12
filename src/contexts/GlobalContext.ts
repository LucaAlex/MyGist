import React from 'react';

export interface IGlobal {
  userName: String;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const global: IGlobal = {
  userName: '',
  setUserName: (value) => {},
};

export const GlobalContext = React.createContext(global);
