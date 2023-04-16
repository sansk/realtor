import { useState } from 'react';
import { Link } from 'react-router-dom';
import SigninImage from '../assests/signin.jpg';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onChange = e => {
    setEmail(e.target.value);
  }

  return (
    <section className="m-8">
      <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="signinImage">
          <img src={SigninImage} className="w-5/6 m-auto rounded-2xl" alt="Signing In" />
        </div>
        <div className="p-10 w-5/6 md:w-full lg:w-4/6 m-auto">
          <form className="w-full">
            <input type="email" className="w-full rounded-md mb-2" placeholder="Email Address" id="email" value={email} onChange={onChange}/>
            
            <div className="flex justify-between flex-col md:flex-row mb-2 font-bold">
              <p>Don't have a account?
                <Link to='/sign-up' className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link>
              </p>
              <p>
                <Link to='/sign-in' className="text-sky-600 hover:text-sky-700 transition duration-200 ease-in-out">Sign In Instead!</Link>
              </p>
            </div>
            <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-md mb-2 font-semibold hover:bg-sky-700 transition duration-200 ease-in-out">Reset Password</button>
          </form>
          
          <div className="w-full mb-2 flex items-center before:border-t before:flex-1 before:border-gray-300 before:border-2 after:border-t after:flex-1 after:border-gray-300 after:border-2">
            <p className="text-center font-semibold px-2">OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  )
}
