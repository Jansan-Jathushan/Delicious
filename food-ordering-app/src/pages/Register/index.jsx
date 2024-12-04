// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Button from "../../components/elements/Button";
// import { app } from "../../firebase-config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//     let navigate = useNavigate();
//     const { register, handleSubmit } = useForm();
//     const [loading, setLoading] = useState(false);

//     const onSubmit = (data) => {
//         setLoading(true);
//         const authentication = getAuth();
//         let uid = '';
//         createUserWithEmailAndPassword(authentication, data.email, data.password)
//             .then((response) => {
//                 uid = response.user.uid;
//                 sessionStorage.setItem('User Id', uid);
//                 sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
//                 window.dispatchEvent(new Event("storage"))
//             })
//             .catch((error) => {
//                 if (error.code === 'auth/email-already-in-use') {
//                     toast.error('Email Already In Use')
//                 }
//             })
        
//             fetch('http://localhost:8000/api/create-user', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: data.email,
//                     name: data.name,
//                     _id: uid
//                 })
//             }).then((response) => {
//                 if (response.status === 200) {
//                     setLoading(false);
//                     toast.success('Account created successfully!🎉', {
//                         position: "top-right",
//                         autoClose: 5000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: 'dark'
//                         });
//                     navigate('/');
//                 } else {
//                     console.log(response.json());
//                 }
//             }).catch((error) => {
//                 setLoading(false);
//                 console.log(error)
//             })
//     }
//     return (
//         <div className="h-screen bg-black flex  items-center justify-center">
//             <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
//                 <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
//                 <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
//                     <h5 className="text-3xl">Register</h5>
//                 <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
//                     <div>
//                         <label 
//                         htmlFor="name"
//                         className="block text-lg font-medium text-gray-200">Name</label>
//                         <input 
//                         {...register('name')}
//                         id="name"
//                         type="text"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
//                     <div>
//                         <label 
//                         htmlFor="email"
//                         className="block text-lg font-medium text-gray-200">Email</label>
//                         <input 
//                         {...register('email')}
//                         id="email"
//                         type="email"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
//                     <div>
//                         <label 
//                         htmlFor="password"
//                         className="block text-lg font-medium text-gray-200">Password</label>
//                         <input 
//                         {...register('password')}
//                         id="password"
//                         type="password"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
//                     <Button size="large">{loading ? "loading" : 'Register'}</Button>
//                 </form>
//                 <ToastContainer />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register;

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Button from "../../components/elements/Button";
// import { app } from "../../firebase-config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//     let navigate = useNavigate();
//     const { register, handleSubmit } = useForm();
//     const [loading, setLoading] = useState(false);

//     const onSubmit = async (data) => {
//         setLoading(true);
//         const authentication = getAuth();
//         try {
//             // Firebase Authentication
//             const response = await createUserWithEmailAndPassword(authentication, data.email, data.password);
//             const uid = response.user.uid;
//             sessionStorage.setItem('User Id', uid);
//             sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
//             window.dispatchEvent(new Event("storage"));

//             // API Call to Backend
//             const apiResponse = await fetch('http://localhost:8000/api/create-user', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: data.email,
//                     name: data.name,
//                     _id: uid,
//                 }),
//             });

//             if (apiResponse.ok) {
//                 toast.success('Account created successfully! 🎉', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: 'dark',
//                 });
//                 navigate('/');
//             } else {
//                 const errorData = await apiResponse.json();
//                 toast.error(`Error: ${errorData.message || 'Failed to create user'}`);
//             }
//         } catch (error) {
//             if (error.code === 'auth/email-already-in-use') {
//                 toast.error('Email Already In Use');
//             } else {
//                 toast.error(`Error: ${error.message}`);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="h-screen bg-black flex items-center justify-center">
//             <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
//                 <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
//                 <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
//                     <h5 className="text-3xl text-white mb-6">Register</h5>
//                     <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
//                         <div>
//                             <label
//                                 htmlFor="name"
//                                 className="block text-lg font-medium text-gray-200">Name</label>
//                             <input
//                                 {...register('name', { required: true })}
//                                 id="name"
//                                 type="text"
//                                 className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block text-lg font-medium text-gray-200">Email</label>
//                             <input
//                                 {...register('email', { required: true })}
//                                 id="email"
//                                 type="email"
//                                 className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="password"
//                                 className="block text-lg font-medium text-gray-200">Password</label>
//                             <input
//                                 {...register('password', { required: true })}
//                                 id="password"
//                                 type="password"
//                                 className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                             />
//                         </div>
//                         <Button size="large">{loading ? "Loading..." : 'Register'}</Button>
//                     </form>
//                     <ToastContainer />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;


import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const auth = getAuth();
        try {
            // Log the data to check if it is correct
            console.log('Data to submit:', data);

            // Firebase Authentication: Create user
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password);

            // Check if the response has the expected structure
            console.log('Firebase response:', response);
            
            const uid = response.user.uid;

            // Store user data in sessionStorage (or any preferred method)
            sessionStorage.setItem('User Id', uid);
            sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
            window.dispatchEvent(new Event("storage"));

            // API Call to Backend: Create user in backend
            const apiResponse = await fetch('http://localhost:8000/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    _id: uid,
                }),
            });

            // Check if backend call is successful
            if (apiResponse.ok) {
                toast.success('Account created successfully! 🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
                navigate('/');
            } else {
                const errorData = await apiResponse.json();
                toast.error(`Error: ${errorData.message || 'Failed to create user'}`);
            }
        } catch (error) {
            // Log the error for debugging
            console.error('Error during registration:', error);

            // Check for specific Firebase errors
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email Already In Use');
            } else {
                toast.error(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-3xl text-white mb-6">Register</h5>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-gray-200">Name</label>
                            <input
                                {...register('name', { required: true })}
                                id="name"
                                type="text"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-200">Email</label>
                            <input
                                {...register('email', { required: true })}
                                id="email"
                                type="email"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-gray-200">Password</label>
                            <input
                                {...register('password', { required: true })}
                                id="password"
                                type="password"
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <Button size="large">{loading ? "Loading..." : 'Register'}</Button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;
