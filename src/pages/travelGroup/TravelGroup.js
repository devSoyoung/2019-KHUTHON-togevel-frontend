import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import TravelList from './TravelList';
import OtherTravelList from './OtherTravelList';

import './TravelGroup.css';

const myTravel = [
  {
    id: '1',
    title: '경희대학교 가을 농활',
    coverImage: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
    organiser: {
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-23',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
  {
    id: '3',
    title: '경희 겨울 유럽 탐방',
    coverImage: 'https://scontent-gmp1-1.cdninstagram.com/vp/1fbb1c4acb0116d4240dc67206aaa948/5E571FD7/t51.2885-15/e35/s150x150/73038327_553282212154092_3371667566039381545_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100',
    organiser: {
      email: 'test4@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2020-01-20 ~ 2019-02-03',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
];

const schoolTravel = [
  {
    id: '1',
    title: '노을 사진여행 with KHUPIC',
    coverImage: 'https://scontent-gmp1-1.cdninstagram.com/vp/ec576ca78236dbb60c59dbdd39ab9916/5E412138/t51.2885-15/sh0.08/e35/p640x640/74917339_145258270088867_4762509233851527172_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111',
    organiser: {
      email: 'test4@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-20',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
  {
    id: '2',
    title: '경희대학교 가을 농활',
    coverImage: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
    organiser: {
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-23',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
  {
    id: '3',
    title: '경희 겨울 유럽 탐방',
    coverImage: 'https://scontent-gmp1-1.cdninstagram.com/vp/1fbb1c4acb0116d4240dc67206aaa948/5E571FD7/t51.2885-15/e35/s150x150/73038327_553282212154092_3371667566039381545_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100',
    organiser: {
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2020-01-20 ~ 2019-02-03',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
];

const inProgressTravel = [
  {
    id: '1',
    title: '경희대학교 가을 농활',
    organiser: {
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-23',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
  {
    id: '2',
    title: '경희대학교 가을 농활',
    organiser: {
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-23',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',
  },
];

const TravelGroupPage = ({ user }) => {
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
        <h4 className="box-title">{user.school} 여행</h4>
        <OtherTravelList data={schoolTravel} />
      </div>
      <div className="box">
        <h4 className="box-title">모집중인 여행</h4>
        <OtherTravelList data={inProgressTravel} />
      </div>
    </>
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
)(TravelGroupPage);
