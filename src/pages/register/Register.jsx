import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            totam eos dolores suscipit incidunt sequi reiciendis?
          </p>
          <span>
            Do you have an account?
          </span>
          <Link to='/login'>
            <Button color='purple'>Login</Button>
          </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum!</p>
            <form>
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <input type="text" name="name" id="name" placeholder="Name" />

                <Button textColor='white' bgColor='bgPrimary'>Register</Button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
