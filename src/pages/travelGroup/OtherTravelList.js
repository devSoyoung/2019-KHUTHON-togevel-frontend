import React from 'react';
import { Link } from 'react-router-dom';
import { TravelActionCreators } from 'store/travel/travel.action';
import { connect } from 'react-redux';
import { Avatar, Button, List } from 'antd';

const OtherTravelList = ({ data, user, myTravel, schoolTravel, doneTravel, applyTravel }) => {
  const clickRegister = async (title) => {
    const schoolNewTravel = schoolTravel.filter(travelItem => travelItem.title !== title);
    const myNewTravel = myTravel.concat(schoolTravel.filter(travelItem => travelItem.title === title));
    await fetch('http://13.125.48.94:3000/', {
      mode: 'no-cors',
    });
    applyTravel({
      myTravel: myNewTravel,
      schoolTravel: schoolNewTravel,
    });
  };

  return (
    <List
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <div className="group-item">
            <Avatar
              style={{
                position: 'absolute',
                left: '10px',
                top: '3px'
              }}
              src={item.coverImage}
              shape="square"
            />
            <div className="group-item-title">
              <Link to="/">{item.title}</Link>
              <div className="group-item-date">{item.date}</div>
            </div>
            <div className="group-item-button">
              {(user.email !== item.organiser.email && item.status !== 'done') && (
                <Button size="small" type="link" onClick={() => clickRegister(item.title)}>신청하기</Button>
              )}
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = state => ({
  user: state.app.user,
  myTravel: state.travel.myTravel,
  schoolTravel: state.travel.schoolTravel,
  doneTravel: state.travel.doneTravel,
});

const mapDispatchToProps = dispatch => ({
  // payload: { myTravel, schoolTravel }
  applyTravel: (payload) => dispatch(TravelActionCreators.applyTravel(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtherTravelList);

