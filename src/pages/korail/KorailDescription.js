import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const KorailDescription = () => {
  return (
    <Card
      hoverable
      className="card-item"
      // cover={<img className="card-main-image" alt="여행 대표이미지"
      //             src='http://www.efnews.co.kr/news/photo/201505/57542_28138_0949.jpg' />}
    >
      <Meta
        description={(
          <div className="korail-description-area">
            <h2 className="korail-page-title">대학생이라면 한 번쯤 내일로 :)</h2>
            <a className="korail-link" href="http://www.letskorail.com/ebizprd/EbizPrdPassRailroIntroW_hc11901.do" target="_blank">
              내일로 홈페이지 바로가기
            </a>
            <p className="korail-description">
              내일로 패스는 <br/>
              <strong>만 27세 이하 청년</strong>들이 패스 한 장으로<br/>
              일정 기간동안 해당열차를<br/>
              <strong>무제한 이용</strong>하며 여행할 수 있는 상품입니다.<br/> <br/>
              일상을 떠나 전국 곳곳의 <strong>숨은 명소</strong>를 찾아보고 <br/>
              내일의 희망과 활기도 함께 찾아보세요!
            </p>

            <img className="card-main-image" alt="여행 대표이미지"
                        src='http://www.efnews.co.kr/news/photo/201505/57542_28138_0949.jpg' />
          </div>
        )}
      />
    </Card>
  );
};

export default KorailDescription;
