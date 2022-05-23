import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';

// 모듈;
import { actionCreators as reviewActions } from '../redux/modules/review';

// 컴포넌트
import { Text } from '../elements/index';
import Review from '../components/Review';
import TutorCard from '../components/TutorCard';
import DivBanner from '../elements/DivBanner';

const Main = () => {
  const dispatch = useDispatch();
  const tutorListDB = useSelector((state) => state.tutor.list);
  const reviewList = useSelector((state) => state.review.list);

  useEffect(() => {
    dispatch(reviewActions.getReviewDB());
  }, []);

  let tutorList = [];

  if (tutorListDB.length > 11) {
    for (let i = 0; i < 12; i++) {
      tutorList.push(tutorListDB[i]);
    }
  }

  return (
    <Wrap>
      <DivBanner>
        <Banner>
          <p className="bannerTitle">
            <span>Wanna learn Korean?</span>
            <span>We are here!</span>
            <span>Your closest Korean friends, Friengls😎</span>
          </p>
          <p className="bannerText">
            <span>온라인 언어 교환으로 놀면서 스펙 쌓자!</span>
            <span> 님도 보고 뽕도 따는 두 마리 토끼 전략~</span>
            <span> 수다 떨면서 한국어 실력 올리는 사람 나야 나!</span>
          </p>
          <button
            onClick={() => {
              alert('여긴 어디로 가야되야나??');
            }}
          >
            예약하러 가기 ▶︎
          </button>
        </Banner>
      </DivBanner>
      <InnerWrap>
        <TutorListWrap>
          <TutorTitleWrap>
            <div>
              <span>지난 주 가장 예약이 많았던 튜터에요</span>
              <span className="tutorMoreBtn">더보기 ></span>
            </div>
            <p>인기 선생님 리스트</p>
          </TutorTitleWrap>
          <CardList>
            {tutorList.map((tutor, idx) => {
              return <TutorCard tutor={tutor} key={`tutorCard_${idx}`} />;
            })}
          </CardList>
        </TutorListWrap>

        {/* 리뷰 부분 */}
        <ReviewWrap>
          <ReviewContainer>
            <ReviewTitleWrap>
              <div>
                <span className="subTitle">
                  다른 튜티들의 리뷰를 들어보세요
                </span>
                <span className="reviewMoreBtn">더보기 ></span>
              </div>
              <p className="title">수강 추천 리뷰</p>
            </ReviewTitleWrap>
            <ReviewList>
              {reviewList
                ? reviewList.map((r, idx) => {
                    return <Review key={idx} {...r} />;
                  })
                : null}
            </ReviewList>
          </ReviewContainer>
        </ReviewWrap>
      </InnerWrap>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  /* 공통 */
  width: 100%;
  min-height: 905px;
`;

/* 배너 */
const Banner = styled.div`
  max-width: 1280px;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  .bannerTitle {
    display: flex;
    flex-direction: column;
  }
  .bannerTitle > span {
    font-size: 34px;
    font-weight: bolder;
    letter-spacing: 1px;
    color: #fff;
  }
  .bannerText {
    display: flex;
    flex-direction: column;
    margin: 10px 0 28px;
    /* background-color: red; */
  }
  .bannerText > span {
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
    letter-spacing: 1px;
    color: #fff;
  }

  button {
    width: 210px;
    height: 56px;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    background: #fff;

    border: 2px solid #000;
    border-radius: 40px;
    box-shadow: 2px 6px 16px 0px #0000004b;
  }
`;

/* 컨텐츠 */
const InnerWrap = styled.div`
  width: 80%;
  max-width: 1280px;
  padding-top: 70px;
  margin: auto;
`;

// 튜터 리스트 부분
const TutorListWrap = styled.div`
  width: 100%;
`;

const TutorTitleWrap = styled.div`
  margin-bottom: 70px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .tutorMoreBtn {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  p {
    font-size: 38px;
    font-weight: bold;
  }
`;

const CardList = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
  /* grid-gap: 2rem; */
  row-gap: 2rem;
  column-gap: 0rem;
`;

// 리뷰 부분
const ReviewWrap = styled.div`
  width: 100%;
  min-height: 600px;
  margin: 140px auto 200px;
`;

const ReviewContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const ReviewTitleWrap = styled.div`
  margin-bottom: 80px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .reviewMoreBtn {
      cursor: pointer;
    }
  }

  p {
    font-size: 36px;
    font-weight: bold;
  }
`;

const ReviewList = styled.div`
  width: 90%;
  min-height: 188px;
  margin: auto;
`;
