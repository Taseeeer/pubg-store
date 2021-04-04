import React from "react";
import styled from "styled-components";
import Game from "./Game";

class Ids extends React.Component {

    IdsStyled = styled.div`
        min-height: 90vh;
        width: 50%;
        color: white;
        border: 5px solid black;
        color: black;
        margin: 0 0 .5rem 0;

        .head {
            background-color: #ffc600;
            width: 18%;
            margin: 0.5rem auto;
        } 
        
        .container {
            border: 3px solid black;
            margin: .5rem;
            display: flex;

            img {
                margin: 0.5rem 0.5rem;
                border-radius: .4rem;
                width: 300px;
                height: 400px;
                object-fit: cover;
            }
            
        }

        h1 {
            display: flex;
            justify-content: center;
        }

        .inner-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 0 .9rem;

            button {
                padding: .5rem;
                margin: 1rem;
                border: none;
                color: black;
                font-size: 1.2rem;
                cursor: pointer;
                background-color: whitesmoke;
                display: flex;
                width: 85%;
                justify-content: center;
                align-items: center;
                text-align: center;


                &:hover {
                    transform: scale(1.05);
                    background-color: black;
                    color: white;
                    transition: .2s ease;
                }
            }

            .rs {
                background-color: #ffc600;
                display: inline;
                margin-right: 22rem;
                padding: 0.3rem;
            }

            .name {
                background-color: #ffc600;
                display: inline;
                margin-right: 22rem;
                padding: 0.3rem;
            }
            
            .sold {
                background-color: #ffc600;
                width: 50%;
                top: -30%;
                transform: rotate(-15deg);
                position: relative;
                margin: 10px auto;
                border: 1px solid darkred;
                box-shadow: 2px 2px 0 rgba(0,0,0,1);
            }

        }
    `;
    
    render() {
    return (
        <>
        <this.IdsStyled>
            <h1 className="head">Ids</h1>
            <ul>
                {Object.keys(this.props.gamestate).map(game => (
                    <Game addToOrder={this.props.addToOrder} index={game} key={game} details={this.props.gamestate[game]} />
                ))}
            </ul> 
        </this.IdsStyled>
        </>
    );
   };
};

export default Ids;