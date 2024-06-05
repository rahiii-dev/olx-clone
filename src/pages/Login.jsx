import { useState } from "react";
import HeaderBlank from "../components/HeaderBlank";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  
  const redirectTo = location.state?.from ?? '/';

  const validateForm = () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false
    }
    
    return valid;
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if(error){setError('');}
      navigate(redirectTo, {replace : true})

    } catch (error) {
      setError('Failed to login. Please check your email and password.');
    }
  };


  return (
    <>
      <HeaderBlank />
      <main>
        <section>
          <div className="container py-8">
            <h1 className="text-center text-xl font-semibold uppercase mb-3">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="w-full max-w-[600px] bg-white mx-auto px-4 py-8 border border-gray-300 rounded">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Email*
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                {emailError && <div className="text-red-500">{emailError}</div>}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Password*
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                  </div>
                  
                {passwordError && <div className="text-red-500">{passwordError}</div>}
                {error && <div className="text-red-500">{error}</div>}
                </div>

                <div className="flex justify-between items-end">
                  <button
                    type="submit"
                    disabled={false}
                    className="font-bold p-3 rounded bg-black text-white disabled:bg-gray-300 disabled:text-gray-400"
                  >
                    Login
                  </button>

                  <div>
                    <span className="font-semibold">New user signup?</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
