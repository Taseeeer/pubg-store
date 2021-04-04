import React, { createRef } from "react";
import styled from "styled-components";

class AddIdForm extends React.Component {

    AddStyled = styled.div`
        input {
            padding: .7rem;
        }
        .first-3 {
            display: flex;
            justify-content: center;
        }
        

        .last-2 {
            display: flex;
            justify-content: center;

            .desc {
                width: 220px;
            }
            
            .image {
                width: 200px;
            }
        }

        .button {
            display: flex;
            justify-content: center;

            button {
                margin: 0.2rem;
                padding: .7rem 1.5rem;
                border: none;
                color: black;
                background-color: whitesmoke;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    background-color: black;
                    color: white;
                    transition: .2s ease;   
                } 
            }
        }
    `;

    nameRef = createRef();
    priceRef = createRef();
    descRef = createRef();
    imageRef = createRef();
    statusRef = createRef();

    handleAddId = e => {
        e.preventDefault();

        const game = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
    
        this.props.addGame(game);
    }

    render() {
        return (
            <>
                <this.AddStyled>
                    <form onSubmit={this.handleAddId}>
                        <div className="first-3">
                            <input ref={this.nameRef} name="name" type="text" placeholder="Name" />
                            <input ref={this.priceRef} name="name" type="text" placeholder="Price" />
                            <select ref={this.statusRef} name="status">
                                <option value="available">Available</option>
                                <option value="unavailable">Soldout</option>
                            </select>
                        </div> 
                        <div className="last-2">
                            <textarea ref={this.descRef} className="desc" name="desc" placeholder="Des" />
                            <input ref={this.imageRef} className="image" name="image" type="text" placeholder="Image" />
                        </div>
                        <div className="button">
                            <button type="submit">Add Id</button>
                        </div>
                    </form> 
                </this.AddStyled>
            </>
        );
    };
};

export default AddIdForm