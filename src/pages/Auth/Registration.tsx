
import { useNavigate } from "react-router-dom";


import { useEffect, useState } from 'react';
import { useRegisterUserMutation } from '../../redux/AuthSlice/Auth';
import { useDispatch } from 'react-redux';
import {setCredentials} from '../../redux/AuthSlice/authSlice.jsx'
import { Link } from "react-router-dom";
const Registration = () => {

  const dispatch = useDispatch();
    const [registerUser, { isLoading, isSuccess ,isError}] = useRegisterUserMutation();

    const [error, setError] = useState(null);
     const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // const submitData = new FormData(e.target);

      
        try {

            const response = await registerUser({
                ...form
            }).unwrap();




            if(response.status ===true){

                dispatch(
                    setCredentials({
                        token: response.token,
                        userData: response.userData,
                    })
                );


                

            }





        } catch (error) {

            console.error("Registration failed:", error);
            setError(error);

        }




    };



        useEffect(()=>{
            if(isSuccess){
                const timer = setTimeout(()=>{
                    navigate("/login");
                },200)
                   return () => clearTimeout(timer);
            }


           


        },[isSuccess, navigate]);

        




      if(isLoading){
        return(
            <>
                <h1>please wait.............</h1>
            
            </>
        )
        };


        if(isError){
            return (
                <>
                <h1>error hare</h1></>

            )

        }
        
           
    return (


    

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Register</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            value={form.password_confirmation}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm mt-4">
                        Already have an account? <Link to={"/login"} className="text-green-600 hover:underline" >Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
