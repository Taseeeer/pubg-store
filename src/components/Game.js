import React from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";

class Game extends React.Component {

    handleOrder = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        const {name, price, desc, image, status} = this.props.details;
        const isAvailable = status === "available";
        return (
            <>
            <div className="container">
                <img src={image} />
                <div className="inner-container">
                    <h2 className="name">{name}</h2>
                    <p>{desc}</p>
                    <h2 className="rs">Rs/-{price}</h2>
                    <div>
                        {isAvailable ? <button onClick={this.handleOrder}>Buy <AiTwotoneThunderbolt /></button> 
                        : 
                        <h1 className="sold">Soldout ❌</h1>}
                    </div>
                </div> 
            </div>
            </>
        );
    };
};

export default Game;