import React from 'react';

import { Carousel } from 'antd';
import Card from 'components/card';

const mockCards = [
  {
    id: 1,
    title: '경희대학교 가을 농활',
    coverImage: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
    organiser: {    // 주최자인 사용자 정보
      email: 'test@test.com',
      name: '김철수',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-20 ~ 2019-12-23',
    schools: ['경희대학교'],
    totalPeopleNum: 30,
    currentPeopleNum: 12,
    status: 'in progress',    // 모집 중(in progress), 완료(done)
  },
  {
    id: 2,
    title: '남한산 등반 모임',
    coverImage: 'https://www.outsideonline.com/sites/default/files/styles/full-page/public/2018/05/15/deadly-mountains_h.jpg?itok=SMwA1ypO',
    organiser: {    // 주최자인 사용자 정보
      email: 'test@test.com',
      name: '홍길동',
      school: '성균관대학교',
      grade: 4,
    },
    date: '2019-11-09 ~ 2019-11-11',
    schools: ['경희대학교', '성균관대학교', '아주대학교'],
    totalPeopleNum: 15,
    currentPeopleNum: 15,
    status: 'done',    // 모집 중(in progress), 완료(done)
  },
  {
    id: 3,
    title: '강릉 카페거리 여행',
    coverImage: 'https://travelblog.expedia.co.kr/wp-content/uploads/2016/04/06.jpg',
    organiser: {    // 주최자인 사용자 정보
      email: 'test@test.com',
      name: '이소영',
      school: '경희대학교',
      grade: 4,
    },
    date: '2019-12-09 ~ 2019-12-10',
    schools: ['경희대학교'],
    totalPeopleNum: 20,
    currentPeopleNum: 15,
    status: 'in progress',    // 모집 중(in progress), 완료(done)
  }
];

const TravelGroup = () => {
  return (
    <Carousel effect="scrollx" dotPosition="top" autoplay>
      {mockCards.map((card, idx) => (
        <Card info={card} key={`travel_card_item_${idx}`}/>
      ))}
    </Carousel>
  );
};

export default TravelGroup;
