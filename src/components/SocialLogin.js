import React from "react"
import '../styles/components/SocialLogin.css';

const SocialLogin = ({ onLoginSuccess }) => {
 
    const handleNaverLogin = () => {
        // 네이버 로그인 버튼 클릭 시 호출
        const handleNaverLogin = () => {
            window.location.href = "https://nid.naver.com/oauth2.0/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
        }

        // 네이버 로그인 성공 후 콜백으로 userId를 받는 로직 필요
        const userId = 'naver-user-456'; // 실제 로그인 후 받아온 유저 ID로 대체
        onLoginSuccess(userId);
    }
    
    const handleKakaoLogin = () => {
        // 카카오 OAuth 인증 페이지로 리다이렉트 (실제 구현 시 이 부분에서 리다이렉트된 후 인증 코드 처리 필요)
        window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
    
        // 카카오 로그인 성공 후 콜백으로 userId를 받는 로직 필요
        const userId = 'kakao-user-123'; // 실제 로그인 후 받아온 유저 ID로 대체
        onLoginSuccess(userId); // 성공 시 부모 컴포넌트로 유저 ID 전달
    }
    
    return (
        <div className="social-login">
            <button type="button" className="social-button" onClick={handleNaverLogin}>
                <img src="/images/socialLoginButtons/naverSocialLogin.png" alt="네이버 로그인" className="social-img" />
            </button>
            <button type="button" className="social-button" onClick={handleKakaoLogin}>
                <img src="/images/socialLoginButtons/kakaoSocialLogin.png" alt="카카오 로그인" className="social-img" />
            </button>
        </div>
    )
}

export default SocialLogin;