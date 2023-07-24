import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import  {styled}  from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/* eslint-disable */
const FullPage=styled.div`
height:100vh;
backgroundColor: var(--color-grey-50);
display: flex;
align-items: center;
justify-content: center;
`;
function ProtectedRoute({children}){
    const navigate=useNavigate();
    //1. load the authticated username
    const { isLoading, isAuthenticated}=useUser();

        //3. if there is NO authenicated user, redicret to the /Login
        useEffect(function(){
            if(!isAuthenticated && !isLoading) navigate('/login')
        },[isAuthenticated, isLoading, navigate]);


    //2. while loading, show SpinnerMini
    if(isLoading) return (<FullPage><Spinner/></FullPage>);





    //4. if they are the user, render the app. 
    if(isAuthenticated)return children;
}
export default ProtectedRoute