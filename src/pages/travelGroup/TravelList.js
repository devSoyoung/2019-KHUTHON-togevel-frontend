import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, List } from 'antd';
import { Link } from "react-router-dom";

const TravelList = ({ data, user }) => {
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
              {user.email === item.organiser.email ? (
                <Button size="small" type="link">수정하기</Button>
              ) : (
                <Button size="small" type="link">취소하기</Button>
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
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TravelList);

