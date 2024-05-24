import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
    const navigation = useNavigate();

    return(
        <div style={{fontWeight:'bold',textAlign:'center'}}>
            <h2>Home Cmponent</h2>
            <div>
                <button onClick={()=> navigation('/about')}>About Page</button>
            </div>
        </div>
    )
}