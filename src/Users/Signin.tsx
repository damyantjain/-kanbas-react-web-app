import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    console.log("start");
    var d = await client.signin(credentials);
    console.log(d);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="col-md-4 col-12">
      <div className="form-group">
        <h1>Signin</h1>
        <input
          className="form-control mb-2"
          placeholder="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button className="form-control btn btn-primary mb-3" onClick={signin}>
          {" "}
          Signin{" "}
        </button>
        <span>
          Don't have an account?{" "}
          <Link
            to="/Kanbas/Account/Signup"
            className="w-100 mt-2"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}
