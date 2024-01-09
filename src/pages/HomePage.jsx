import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StDiv, StBtn } from './styled';
import { Cookies } from 'react-cookie';
import api from '../axios/api';

export default function HomePage() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    // const accessToken = cookies.get('token');

// 토큰 만료 추가 코딩
// JWT의 유효시간이 만료된 경우, 유저에게 재로그인을 할 것을 표시

    // 로그아웃 기능을 구현합니다.
    const logoutHandler = async () => {
        cookies.remove('token');
        navigate('/');
        window.location.reload(); // 새로고침 코드
        // 새로고침을 해야 쿠키에서 토큰이 사라짐
        // 새로고침을 안해도 사라지게 하는 방법
        try {
            // mock 서버 API 명세 //
            // 기능: 유저 인증확인 // method: get // url: user // request: header authorization: string
            //  response: 200 {message: “인증에 성공한 요청입니다.”} // error: 401
            const accessToken = cookies.get('token'); // 토큰을 가져옵니다.
            // 로그인을 하지 않은 경우에는 로그인/회원가입 페이지만 접근 가능합니다.
            if (!accessToken) {
                // 토큰이 없으면 로그아웃 처리
                navigate('/');
                return;
            }
            const response = await api.get('/user', { headers: { Authorization: accessToken } }); // 실제 토큰으로 요청
            console.log(response);
            navigate('/');
        } catch (error) {
            if (error.response.status === 401 && error.response.data.message.includes('토큰은 60분간 유지')) {
                // alert(error.response.data.message); // 토큰이 만료되었습니다. 토큰은 60분간 유지됩니다.
                alert('아이디가 만료되었습니다.'); // 어디서 확인하지?
            } else if (error.response.status === 401 && error.response.data.message.includes('존재하지 않습니다.')) {
                alert('존재하지 않는 아이디입니다.'); 
            } // header에 authorization 정보가 존재하지 않습니다. // token value가 존재하지 않습니다.
        } // 5가지 error 모두 나타내야 하는지??
    };

    return (
        <StDiv>
            <h1>Home</h1>
            <h1>무엇을 할까요?</h1>
            <div>
                <StBtn onClick={logoutHandler}>로그아웃</StBtn>
            </div>
        </StDiv>
    );
}
