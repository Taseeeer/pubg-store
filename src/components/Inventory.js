import React from "react";
import styled from "styled-components";
import AddIdForm from "./AddIdForm";

class Inventory extends React.Component {

    InventoryStyled = styled.div`
        width: 40%; 
        min-height: 90vh; 
        border: 5px solid black;
        margin: 0 0 .5rem 0;

        h1 {
            display: flex;
            justify-content: center;
            background-color: #ffc600;
            width: 45%;
            margin: 0.5rem auto;
        }

        
    `;


    render(){
        return(
            <this.InventoryStyled>
                <h1>Inventory</h1>
                <AddIdForm addGame={this.props.addGame} />
                <button onClick={() => this.props.loadSampleGames()}>Sample ids</button>
            </this.InventoryStyled>
        );
    };
};

export default Inventory;