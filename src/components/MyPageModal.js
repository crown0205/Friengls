import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Portal from '../shared/Portal';
import EditUser from './EditUser';
import { Buttons, InputBox, InputLabel, Inputs } from '../elements/index';
import { getCookie } from '../shared/Cookie';
// to do: 스크롤 뒷배경 안 움직이도록
const MyPageModal = (props) => {
  const { onClose, userInfo } = props;

  const [pwd, setPwd] = useState('');
  const handlePwd = (e) => {
    setPwd(e.target.value);
  };
  const accessInfo = pwd;

  //비밀번호 검증 될 경우 editUser컴포넌트 렌더링
  const [editUser, setEditUser] = useState(false);
  const handleEditUser = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://hjg521.link/myPage/pwdCheck',
        headers: { token: `${getCookie('token')}` },
        data: {
          pwd: pwd,
        },
      });
      const result = response.data.msg;

      result === 'success'
        ? setEditUser(true)
        : window.alert('비밀번호가 틀립니다.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Portal>
      <Background>
        {editUser ? (
          <EditUser
            onClose={onClose}
            userInfo={userInfo}
            accessInfo={accessInfo}
          />
        ) : (
          <Content>
            <CloseBtnBox>
              <CloseBtn onClick={onClose}>X</CloseBtn>
            </CloseBtnBox>
            <Grid>
              <p>본인확인</p>
            </Grid>
            <Grid>
              <UserImg>
                <img className="userImg" src={userInfo.userProfile} alt="" />
              </UserImg>
            </Grid>
            <Grid>
              {/* 닉네임 */}
              <InputBox styles={{ width: '860px', margin: '0 auto 20px' }}>
                <InputLabel>이메일</InputLabel>
                <Inputs value={userInfo.userEmail} disabled />
              </InputBox>
              {/* 비밀번호 */}
              <InputBox styles={{ width: '860px', margin: '0 auto' }}>
                <InputLabel>비밀번호</InputLabel>
                <Inputs
                  _onChange={handlePwd}
                  placeholder={'비밀번호를 입력해 주세요.'}
                />
              </InputBox>
            </Grid>

            <Grid>
              <Buttons
                _onClick={handleEditUser}
                styles={{ width: '380px', height: '60px' }}
              >
                프로필 수정하기
              </Buttons>
            </Grid>
          </Content>
        )}
      </Background>
    </Portal>
  );
};

export default MyPageModal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 954px;
  width: 1240px;
  margin-top: 420px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  // overflow: scroll;
`;

const CloseBtnBox = styled.label`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const Grid = styled.div`
  margin-bottom: 60px;

  p {
    font-size: 40px;
    font-weight: 700;
  }
`;

const UserImg = styled.div`
  width: 240px;
  height: 240px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;

  .userImg {
    width: 240px;
    height: 240px;
  }
`;