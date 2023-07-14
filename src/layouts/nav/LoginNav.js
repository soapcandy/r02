import { Link } from "react-router-dom";


const LoginNav = () => {



    return ( 
        <div>
            <div>
                <Link to={"/member/login"}>LOGIN</Link>
            </div>
        </div>
     );
}
 
export default LoginNav;