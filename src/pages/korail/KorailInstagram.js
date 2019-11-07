import React from 'react';
import { Icon } from 'antd';
import feedImages from './images';

const KorailInstagram = () => {
  return (
    <div className="korail-instagram-feed">
      <h2>
        <Icon type="instagram" style={{ marginRight: '5px'}}/>
        <span style={{ color: '#1890ff', fontWeight: 800 }}>내일로</span> in Instagram
        <Icon type="instagram" style={{ marginLeft: '5px'}}/>
      </h2>
      {feedImages.map(feedImage => (
        <a target="_blank" href={feedImage.link}>
          <img
            className="instagram-img"
            alt="인스타그램 이미지"
            src={feedImage.thumbUrl}
          />
        </a>
      ))}
    </div>
  );
};

export default KorailInstagram;
