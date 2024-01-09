import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StDiv, StDiv2, StInput, TextDiv, StBtn } from './styled';
import api from '../axios/api';
import { Cookies } from 'react-cookie';

// 회원가입 페이지
export default function SignUpPage() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const accessToken = cookies.get('token');
    const [inputValue, setInputValue] = useState({
        id: '',
        password: '',
    });

    useEffect(() => {
        // console.log('+++', accessToken);
        if (accessToken) {
            navigate('/home');
        } // 토큰 만료 추가 코딩
        // JWT의 유효시간이 만료된 경우, 유저에게 재로그인을 할 것을 표시합니다
    }, []);

    const signUpHandler = async () => {
        // 아이디와 비밀번호가 모두 입력되지 않으면, API 요청을 보내지 않도록 합니다.
        if (inputValue.id === '' && inputValue.password === '') {
            alert('아이디와 비밀번호를 입력해주세요!');
            return;
        }
        try {
            // mock 서버 API 명세 // 
            // 기능: 유저 회원가입 // method: post // url: register // request: inputValue(id, password) 
            //  response: 201, token(없음) // error: 401 (3가지 경우)
            const response = await api.post('/register', inputValue);
            console.log(response);
            navigate('/');
        } catch (error) {
            if (error.response.status === 401 && error.response.data.message.includes('이미 존재하는 유저')) {
                // alert(error.response.data.message);
                alert("이미 존재하는 아이디입니다.");
            } else if (error.response.status === 401 && error.response.data.message.includes('존재하지 않습니다.')) {
                alert(error.response.data.message); // id 또는 password가 존재하지 않습니다.
            } // "401 id 또는 password가 string이 아닙니다. 구현하지 않음" status가 201로 뜸
        }
    };

    return (
        <StDiv>
            <h1>회원가입</h1>
            <StDiv2>
                <TextDiv>아이디</TextDiv>
                <StInput
                    type="text"
                    value={inputValue.id}
                    onChange={(e) => {
                        setInputValue({ ...inputValue, id: e.target.value });
                    }}
                    placeholder="아이디를 입력하세요"
                ></StInput>
                <TextDiv>비밀번호</TextDiv>
                <StInput
                    type="password"
                    value={inputValue.password}
                    onChange={(e) => {
                        setInputValue({ ...inputValue, password: e.target.value });
                    }}
                    placeholder="비밀번호를 입력하세요"
                ></StInput>
                <StBtn onClick={signUpHandler}>회원가입</StBtn>
                <StBtn onClick={() => navigate('/')}>로그인하기</StBtn>
            </StDiv2>
        </StDiv>
    );
}
