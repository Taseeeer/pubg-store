import React from "react";
import styled from "styled-components";

class Order extends React.Component {

    OrderStyled = styled.div`
        width: 15%; 
        min-height: 90vh; 
        border: 5px solid black;
        margin: 0 0 .5rem 0;
        text-align: center;

        h1 {
            background-color: #ffc600;
            width: 75%;
            margin: 0.5rem auto;
        } 
    `;


    render(){
        const gameIds = Object.keys(this.props.order);
        const total = gameIds.reduce((prevTotal, key) => {
            const game = this.props.games[key];
            const count = this.props.order[key];

            const isAvailable = game && game.status === "available";
            if(isAvailable) {
                return prevTotal + (count * game.price);
            };

            return prevTotal;
        }, 0);
        return(
            <this.OrderStyled>
                <h1>Order</h1>
                <div>
                    <strong>
                    Rs/- 
                    {total}
                    </strong>
                </div>
            </this.OrderStyled>
        );
    };
};

export default Order;