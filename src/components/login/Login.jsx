import { useState } from "react";
import Input from "../common/Input";
import { Link } from "react-router-dom";

// import { useEffect } from "react"
function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="w-fill h-full bg-no-repeat bg-center bg-fixed bg-cover"
      style={{
        backgroundImage: "url('src/images/hero.jpg')",
      }}
    >
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/src/images/logo.png" alt="logo" className="h-12" />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70  md:px-16 md:py-16 self-center mt-8 lg:w:2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  label="UserName"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  type="text"
                  value={username}
                />
                <Input
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />

                <Input
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="Password"
                  type="password"
                  value={password}
                />
              </div>
              <Link to={"/profile"}>
                <button className="bg-red-600 py-3 text-white rounded-lg w-full mt-10 hover:bg-red-500 transition">
                  login
                </button>
              </Link>
              <p className="text-neutral-500  mt-10 text-lg">
                Hello, First Time Using?
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  Contact Me!
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Login;
