import React from 'react';
import { Card, Button } from 'antd';

import './Card.css';

const { Meta } = Card;

const backgroundColor = {
  'done': '#E53A40',
  'in progress': '#30A9DE',
};

const statusName = {
  'in progress': '모집중',
  'done': '마감',
};

const MyCard = ({ info }) => {
  const { title, coverImage, schools, date, organiser, totalPeopleNum, currentPeopleNum, status } = info;
  return (
    <Card
      hoverable
      className="card-item"
      cover={<img className="card-main-image" alt="여행 대표이미지" src={coverImage || 'https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png'} />}
    >
      <Meta
        title={(
          <>
            <div className="card-status" style={{backgroundColor: backgroundColor[status]}}>{statusName[status]}</div>
            {title}
          </>
        )}
        description={(
          <>
            <p className="card-info">
              <span className='card-info-title'>주최자</span>
              {organiser.name} ({organiser.school})
            </p>
            <p className="card-info">
              <span className='card-info-title'>참여학교</span>
              {schools.toString(', ')}
            </p>
            <p className="card-info">
              <span className='card-info-title'>여행일정</span>
              {date}
            </p>
            <p className="card-info">
              <span className='card-info-title'>인원수</span>
              {currentPeopleNum}명 / {totalPeopleNum}명
            </p>
          </>
        )}
      />
    </Card>
  );
};

export default MyCard;
