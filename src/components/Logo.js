import React from "react";
import styled from "styled-components";
import guns from "../things/idlogo.png";
import { AiFillStar } from "react-icons/ai";

export default function Logo() {

    const StyledLogo = styled.div`

        img {
            display: inline-block;
            position: relative;
            left: 7rem;
        }

        .stars {
            display: inline-block;
            position: relative;
            left: -12.7rem;
            top: -4rem;
            font-size: 1.5rem;
        }
        
        .s {
            color: black;    
        }

        .pubg {
            
            display: inline-block;
            color: #ffc600;
            font-size: 2rem;
            position: relative;
            text-transform: uppercase;
            text-shadow: 2px 3px 1px rgba(0,0,0,1); 
        }
    `;

        /* position: fixed;
        display: inline-block;
        
        .state {
            color: #ffc600;
            font-size: 2.5rem;
            position: relative;
            left: 9.4rem;
            top: 5.3rem;
            text-transform: uppercase;
            text-shadow: 2px 3px 1px rgba(0,0,0,1);
        }
        
        .of {
            color: #ffc600;
            font-size: 2rem;
            position: relative;
            top: -16.5rem;
            left: 7rem;
            text-transform: uppercase;
            text-shadow: 2px 3px 1px rgba(0,0,0,1);
        }

        .the {
            color: #ffc600;
            font-size: 2rem;
            position: relative;
            top: -18.6rem;
            left: 15.5rem;
            text-transform: uppercase;
            text-shadow: 2px 3px 1px rgba(0,0,0,1);
        }

        .art {
            color: #ffc600;
            font-size: 2.3rem;
            position: relative;
            top: -13.7rem;
            left: 10.5rem;
            text-transform: uppercase;
            text-shadow: 2px 3px 1px rgba(0,0,0,1);
        }
     */

    
    return (
        <div>
        <StyledLogo>
            <img src={guns} alt="logo" />
            <div className="stars">
                <AiFillStar className="s" />
                <AiFillStar className="s" />
                <AiFillStar className="s" />
                <p className="pubg">pubg</p>
                <AiFillStar className="s" />
                <AiFillStar className="s" />
                <AiFillStar className="s" />
            </div>
        </StyledLogo>
        </div>
    )
}