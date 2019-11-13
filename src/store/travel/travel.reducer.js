import { TravelActionTypes, TravelActionCreators } from './travel.action';

export const initialState = {
  myTravel: [
    {
      id: '1',
      title: '경희대학교 가을 농활',
      coverImage: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
      organiser: {
        email: 'test@test.com',
        name: '이소영',
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
      coverImage: 'https://img-wishbeen.akamaized.net/plan/1427298337697_%ED%8C%8C%EB%A6%AC.jpg',
      organiser: {
        email: 'test4@test.com',
        name: '강환석',
        school: '경희대학교',
        grade: 3,
      },
      date: '2020-01-20 ~ 2019-02-03',
      schools: ['경희대학교'],
      totalPeopleNum: 30,
      currentPeopleNum: 12,
      status: 'in progress',
    },
  ],
  schoolTravel: [
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
      id: '1',
      title: '도전, 패러글라이딩 여행!',
      coverImage: 'https://blog.hmgjournal.com/images_n/contents/170601_paragliding01.jpg',
      organiser: {
        email: 'test111@test.com',
        name: '이유진',
        school: '경희대학교',
        grade: 4,
      },
      date: '2019-11-17 ~ 2019-11-19',
      schools: ['경희대학교'],
      totalPeopleNum: 20,
      currentPeopleNum: 12,
      status: 'in progress',
    },
  ],
  doneTravel: [
    {
      id: '1',
      title: '여유를 찾아 떠나는 템플스테이',
      coverImage: 'http://img.hani.co.kr/imgdb/resize/2008/0510/121031898335_20080510.JPG',
      organiser: {
        email: 'test11@test.com',
        name: '김철수',
        school: '경희대학교',
        grade: 4,
      },
      date: '2019-11-09 ~ 2019-11-10',
      schools: ['경희대학교'],
      totalPeopleNum: 15,
      currentPeopleNum: 15,
      status: 'done',
    },
    {
      id: '2',
      title: '넥슨컴퓨터박물관 여행',
      coverImage: 'http://ilovejejumag.com/wordpress/wp-content/uploads/2013/12/%EB%84%A5%EC%8A%A8.jpg?w=640',
      organiser: {
        email: 'test12@test.com',
        name: '한용구',
        school: '경희대학교',
        grade: 4,
      },
      date: '2019-11-20 ~ 2019-11-22',
      schools: ['경희대학교'],
      totalPeopleNum: 30,
      currentPeopleNum: 30,
      status: 'done',
    },
    {
      id: '2',
      title: '강원도 바이킹 여행',
      coverImage: 'https://t1.daumcdn.net/cfile/tistory/999954335A0D6A212D',
      organiser: {
        email: 'test4@test.com',
        name: '강환석',
        school: '경희대학교',
        grade: 3,
      },
      date: '2019-11-20 ~ 2019-11-22',
      schools: ['경희대학교', '성균관대학교', '아주대학교'],
      totalPeopleNum: 30,
      currentPeopleNum: 30,
      status: 'done',
    },
  ]
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case TravelActionTypes.ADD_NEW_TRAVEL:
      return {
        ...state,
        myTravel: state.myTravel.concat(action.payload),
        // showSidebar: !state.showSidebar,
      };

    case TravelActionTypes.APPLY_TRAVEL:
      return {
        ...state,
        myTravel: action.payload.myTravel,
        schoolTravel: action.payload.schoolTravel,
      };

    case TravelActionTypes.CANCEL_TRAVEL:
      return {
        ...state,
        myTravel: action.payload.myTravel,
        schoolTravel: action.payload.schoolTravel,
      };

    default:
      return state;
  }
};

export default travelReducer;
