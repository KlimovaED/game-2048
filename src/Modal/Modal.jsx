import React from "react";
import Button from "../Button/Button";

import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import styled from "styled-components";



class Modal extends React.Component {
    constructor(props) {
        super();

    }
    
    render() {
        return (
            <React.Fragment>
                <Dialog
                    fullWidth={true}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Игра окончена!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                         <Title>  Ваш счет : {
                             this.props.score
                         } </Title>
                            <Subtitle>Хотите начать игру заново ?</Subtitle>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{}}>Выйти</Button>
                        <Button onClick={this.props.newGame} autoFocus>
                          Начать заново
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default Modal;

const Title = styled.h1`
font-weight: bold;
font-size: 25px`;

const Subtitle = styled.h2`
font-size: 20px;
font-weight: normal`;

