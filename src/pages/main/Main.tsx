import React from 'react';
import { Input } from '../../components';
import './Main.scss';

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main__description">
        Rick and Morty follows the misadventures of cynical mad scientist Rick Sanchez and his
        good-hearted, but fretful grandson Morty Smith, who split their time between domestic life
        and interdimensional adventures.
        <br />
        <br />
        The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and
        Morty. You will have access to about hundreds of characters, images, locations and episodes.
        The Rick and Morty API is filled with canonical information as seen on the TV show.
      </div>
      <Input />
    </div>
  );
};

export default Main;
