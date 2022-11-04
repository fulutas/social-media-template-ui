import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left"> 
          <h1>Hello World.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            totam eos dolores suscipit incidunt sequi reiciendis?
          </p>
          <span>
            Don't you have an account?
          </span>
          <Link to='/register'>
            <Button color='purple'>Register</Button>
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum!</p>
            <form>
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <Button onClick={handleLogin} textColor='white' bgColor='bgPrimary'>Login</Button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
