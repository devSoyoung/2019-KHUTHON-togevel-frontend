import React from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'antd';
import Card from 'components/card';

const TravelGroup = ({ myTravel, schoolTravel, doneTravel }) => {
  const allCards = myTravel.concat(schoolTravel).concat(doneTravel);
  return (
    <Carousel effect="scrollx" dotPosition="top" autoplay>
      {allCards.map((card, idx) => (
        <Card info={card} key={`travel_card_item_${idx}`}/>
      ))}
    </Carousel>
  );
};

const mapStateToProps = state => ({
  myTravel: state.travel.myTravel,
  schoolTravel: state.travel.schoolTravel,
  doneTravel: state.travel.doneTravel,
});

const mapDispatchToProps = dispatch => ({
  // addNewTravel: (item) => dispatch(TravelActionCreators.addNewTravel(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelGroup);
