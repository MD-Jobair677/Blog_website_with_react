import { useEffect, useState } from 'react';
import { useLoginUserMutation } from '../../redux/AuthSlice/auth.jsx'
import { setCredentials } from '../../redux/AuthSlice/authSlice.jsx'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [loginUser, { isError, isSuccess }] = useLoginUserMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const hundleChange = ((e) => {

        setForm({ ...form, [e.target.name]: e.target.value })

    })


    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {

                navigate('/index')

            }, 200)

            return () => clearTimeout(timer)

        }

    })



    const handleLogin = async (e) => {
        e.preventDefault();



        const response = await loginUser({
            ...form
        }).unwrap()

      

        if (response.status == true) {
              
            dispatch(
                setCredentials({
                    token: response.token,
                    userData: response.userData,

                })


            )


        }
    };

    // console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('userData'));  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={hundleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            value={form.password}
                            onChange={hundleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <p className="text-center text-sm mt-4">
                        Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
