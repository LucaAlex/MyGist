import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import axios from 'axios';

interface IFilesProps {
  file: string;
}

export default function File({ file }: IFilesProps) {
  console.log(file);

  return (
    <div>
      <p>{file}</p>
    </div>
  );
}
