import React,{useState} from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { postLoginUser } from "../slices/authSlice";
import { useNavigate } from "react-router";

function Login(props) {
    const users=useSelector((state)=>state?.auth?.user)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    console.log(users);
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const [showPassword,setShowPassword]=useState(false)


    const handleInputChange=(e,name)=>{
        const value=e.target.value;
        console.log(value ,name);
        setLoginData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    console.log(loginData);

    const handleSubmit=(e)=>{
        e.preventDefault();
        try {
            debugger
            dispatch(postLoginUser({loginData:loginData})).unwrap().then((x)=>{
                console.log("xxxxxxxxx",x);
                if(x?.message == "Logged In Successfully")
                {
                    navigate("/")
                }
            })
        } catch (error) {
            console.log(error,"error");
        }

    }

    const handleToggle=()=>{
        setShowPassword(!showPassword);
    }

  return (
    <div className="flex items-center justify-center mt-20 ">
      <div className="p-10 rounded-lg w-[500px] min-w-[600px] shadow-2xl">
        <div className="text-center text-[20px] mb-5">
            Login
        </div>
        <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          className="p-2  pb-5 mb-5 w-full border-2 border-gray-400"
          value={loginData.email}
          onChange={(e)=>handleInputChange(e,"email")}
        />
        <br></br>

        <div className="relative flex">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="p-2 pb-5 w-full border-2 border-gray-400"
          value={loginData.password}
          onChange={(e)=>handleInputChange(e,"password")}
        />

    <div className="absolute right-2 top-3 ">
        {
            showPassword ? (
                <>
                <AiFillEye size={20} onClick={handleToggle}
                className="cursor-pointer"/>
                </>
            ):(
                <>
                <AiFillEyeInvisible size={20}
                onClick={handleToggle}
                className="cursor-pointer"/>
                </>
            )
        }
        
    </div>
        </div>

        <div>
            <button type="submit" className="p-3 mt-10 text-white bg-blue-300 rounded-md">Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
