import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {

    const StyledHeader = styled.header`
        color: #000;
        
        ul {
            display: flex;
            list-style: none;
            justify-content: space-around;
        }

        li {
            font-size: 2rem;
            cursor: pointer;
        }
        
        li:nth-child(odd) {
            position: relative;
            /* background-color: rgba(0,0,0,0.8); */
            background-color: #ffc600; 
            top: 10rem;
            padding: 0.5rem;
            /* text-shadow: 2px 3px 1px #78350c;  */
            text-shadow: 1px 1px 0px #000; 
            margin-bottom: 24rem;
            border-radius: .2rem;

            &:hover {
                transition: .2s ease;
                transform: scale(1.1);
            }
        }
    `;
    return (
        <>
        <StyledHeader>
            <ul>
                <li>IDs</li>
                <li><Logo /></li>
                <li>Log In</li>
            </ul>
        </StyledHeader>
        </>
    );
};