import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TravelList from './TravelList';
import OtherTravelList from './OtherTravelList';

import { Button } from 'antd';
import './TravelGroup.css';

const TravelGroupPage = ({ user, myTravel, schoolTravel, doneTravel }) => {
  return (
    <>
      <div>
        <Link to="/newgroup">
          <Button className="new-group-button" type="primary" style={{ display: 'block' }}>모임만들기</Button>
        </Link>
      </div>
      <div className="box my-group">
        <h4 className="box-title">나의 여행</h4>
        <TravelList data={myTravel} />
      </div>
      <div className="box">
        <h4 className="box-title">참여 가능한 여행</h4>
        <OtherTravelList data={schoolTravel} />
      </div>
      <div className="box">
        <h4 className="box-title">모집 마감된 여행</h4>
        <OtherTravelList data={doneTravel} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.app.user,
  myTravel: state.travel.myTravel,
  schoolTravel: state.travel.schoolTravel,
  doneTravel: state.travel.doneTravel,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelGroupPage);
