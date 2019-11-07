import React from 'react';

import TravelGroup from './TravelGroup';
import KorailDescription from '../korail/KorailDescription';

const MainPage = () => {
  return (
    <>
      <TravelGroup />
      <div style={{ marginTop: '15px' }}>
        <KorailDescription/>
      </div>
    </>
  );
};

export default MainPage;
