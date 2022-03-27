import axios from "axios";
import { login_user } from "../Redux/authReducer/authActions";
import { useSelector , useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
   // const [email, setemail] = useState({});

    const token = useSelector((store) => store.login.token);
    console.log('tokenhfghgf: ', token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login",{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }).then(res =>{
            // console.log(res.data.token)
            dispatch(login_user(res.data.token))
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/")
        })
        
    }
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" required/><br />
                <input type="password" placeholder="Password" required /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
// {

// }
//https://reqres.in/api/login