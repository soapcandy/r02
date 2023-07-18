import { Link } from "react-router-dom";


const REST_KEY='afda205eafa16e4bcbad4ef1fdca99aa'
const REDIRECT_URI='http://localhost:8080/api/member/kakao'
const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return ( 
        <div className="text-3xl text-white">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>
     );
}
 
export default KakaoLoginComponent;