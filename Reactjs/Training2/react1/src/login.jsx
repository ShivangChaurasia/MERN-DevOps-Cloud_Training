
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [email,setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();


    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePass = (e)=>{
        setPass(e.target.value);
    }

    const authenticate=()=>{
        if(pass.length>=8 && /[A-Za-z]/.test(pass) && /[0-9]/.test(pass)){
            return true;
        }
        return false;
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(authenticate()){
            navigate('/dashboard');
            // alert(`Login Successful!! Your email is ${email}`);
        }else{
            alert('Credentials Wrong!!')
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <input type="email" placeholder="Enter your E-Mail" value={email} onChange={handleEmail}></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="Password" value={pass} onChange={handlePass}></input>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
            </form>


        </>
    )
}