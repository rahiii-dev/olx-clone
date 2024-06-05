import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpssword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()
    const location = useLocation();

    const redirectTo = location.state?.from ?? "/";

    const validateForm = () => {
        let valid = true;
        setNameError("");
        setEmailError("");
        setPasswordError("");

        if(!firstName || !lastName){
            setNameError("Firstname and Lastname is required");
            valid = false;
        }
        else if(firstName.length < 3){
            setNameError("Firstname is too short");
            valid = false;
        }
    
        if (!email) {
          setEmailError("Email is required");
          valid = false;
        }
    
        if (!password || !cpassword) {
          setPasswordError("Password is required");
          valid = false;
        }
        else if (password.length < 6){
          setPasswordError("Password must be minimum 6 character");
        }
        else if(password !== cpassword){
            setPasswordError("Passwords don't match");
            valid = false;
        }
    
        return valid;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(newUser.user, {
                displayName : `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
            })
            navigate(redirectTo, { replace: true });
        } catch (error) {
            setError("Failed to create an account")
        }
        finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section>
      <div className="container py-8">
        <h1 className="text-center text-xl font-semibold uppercase mb-3">
          Register
        </h1>
        <form onSubmit={handleRegister}>
          <div className="w-full max-w-[600px] bg-white mx-auto px-4 py-8 border border-gray-300 rounded">
            
            <div className="mb-3 grid grid-cols-2 gap-4">
              <div>
                <label
                    htmlFor="firstname"
                    className="block font-medium leading-6 text-gray-900"
                >
                    Firstname*
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => setFirstName(e.target.value.trim())}
                    value={firstName}
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                </div>
                  {nameError && <div className="text-red-500">{nameError}</div>}
              </div>
              <div>
                <label
                    htmlFor="lastname"
                    className="block font-medium leading-6 text-gray-900"
                >
                    Lastname*
                </label>
                <div className="mt-2">
                    <input
                    onChange={(e) => setLastName(e.target.value.trim())}
                    value={lastName}
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    />
                </div>
              </div>
            </div>

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
                  onChange={(e) => setEmail(e.target.value.trim())}
                  value={email}
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
                  onChange={(e) => setPassword(e.target.value.trim())}
                  className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                />
              </div>

              {passwordError && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="confirm_password"
                className="block font-medium leading-6 text-gray-900"
              >
                Confirm Password*
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  onChange={(e) => setCpssword(e.target.value)}
                  className="block w-full rounded border-0 py-2 px-2 outline-none h-[45px]
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                />
              </div>

              {error && <div className="text-red-500">{error}</div>}
            </div>

            <div className="flex justify-between items-end">
              <button
                type="submit"
                className={`font-bold p-3 rounded  text-white ${isSubmitting ? 'bg-slate-400' : 'bg-black'} `}
                disabled={isSubmitting}
              >
                {isSubmitting ?'Registering....' :'Register'}
              </button>

              <div>
                <span onClick={() => navigate('/auth/login')} className="cursor-pointer font-semibold transition-colors duration-300 hover:text-teal-600">Have an account SignIn?</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    );
}

export default Register;
