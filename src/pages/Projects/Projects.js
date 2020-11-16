import React from 'react';
import { homeObjTwo,  homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home
