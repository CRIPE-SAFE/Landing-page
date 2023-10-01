
import React, { useState } from 'react'
import axios from 'axios';
import toast,{ Toaster } from "react-hot-toast";

const CRIPE_URL = "https://thadd-dev-realm.ey.r.appspot.com/users"

const sucessNotify = () => toast.success("Account deleted successfully!");
const errorNotify = () => toast.error("Error in deleting account!");

const DeleteForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const config = {
        headers: { 
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        }
    }


    const handleDelete =  async () => {
        // Replace 'your_api_endpoint' with the actual endpoint URL
    
        console.log(username,password)
       await axios
            .delete(CRIPE_URL, {
                params: {
                    username: username,
                    password: password,
                }, 
            })
            .then((response) => {
                console.log(response.data.message);
                sucessNotify()
            })
            .catch((error) => {
                
                 errorNotify()
            });
    };

    const handleGet =  async () => {
        // Replace 'your_api_endpoint' with the actual endpoint URL
    
        
       await axios
            .get("https://thadd-dev-realm.ey.r.appspot.com/ping")
            .then((response) => {
                console.log(response.data.message);
                console.log(response.data)
                sucessNotify()
            })
            .catch((error) => {
                console.log(error)
                 
                 errorNotify()
            });
    };

    



    

  
    
    return (
        <>
  
        <div className='mx-auto py-6 md:px-8 px-4 mt-14 h-full'>
            
            <div className='flex flex-col justify-center items-center lg:mx-32 md:mx-4 text-center'>
                <button onClick={handleGet}>Fettttt</button>
                <h1 className=' lg:text-5xl md:text-3xl text-base font-medium  mt-8'>Delete account</h1>
                <p className='mt-1 md:text-lg text-sm'>Please note that account deletion is irreversible, and all your data, including posts, messages, and profile information, will be permanently removed from our servers. If you ever decide to return to Cripe, you'll need to create a new account.</p>

            </div>
            <div className='lg:mx-[25rem] mx-4 mt-8 mb-28'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                    <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your username" required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>

                <button type="button" onClick={handleDelete} className="text-white from-lightRed to-darkerRed bg-gradient-to-b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full px-5 py-2.5 text-center ">Submit</button>
            </div>
            
        </div>
        </>
    )
}

export default DeleteForm