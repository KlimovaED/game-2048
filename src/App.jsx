import './App.css';
import {Component} from "react";
import Layout from "./Layuot/Layout";
import Field from "./Fieled/Field";
import initCells from "./logic/initCell";
import Button from "./Button/Button";
import ControllPanel from "./ControlPanel/ControllPanel";
import {Score, ScoreContainer, ScoreTitle} from "./Score/Score";
import {directions, moveCells} from "./logic/moveCells";
import { delays, removeAndIncreaseCells} from "./logic/removeAndIncreaseCells";
import {populateField} from "./logic/populateField";
import {checkAndSetBonus} from "./logic/checkAndSetBonus";
import Modal from "./Modal/Modal";





class App extends Component {

       state = this.getNewState();

    mapKeyCodeToDirection={
        ArrowUp:directions.UP,
        ArrowDown:directions.DOWN,
        ArrowRight:directions.RIGHT,
        ArrowLeft:directions.LEFT,
    }

    getNewState() {
        return {
            cells: initCells(),
            score: 0,
            bestScore: 0,
            status:'pending',
        }
    }

    componentDidMount() {
        document.addEventListener('keydown',this.handleKeyPress)
    }
    componentWillUnmount() {
        document.addEventListener('keydown',this.handleKeyPress)
    }

    handleKeyPress=async event=>{
        this.setState(state=>({
            ...state,cells:moveCells(state.cells, this.mapKeyCodeToDirection[event.code])
        }))
        await delays(150)

        this.setState(state => {
            const {updatedCell,currentScore}=removeAndIncreaseCells(state.cells)
            return ({
                ...state,cells:updatedCell,score:state.score + currentScore
            })
        })
        this.setState(state=>({
            ...state,cells:populateField(state.cells)
        }))
        this.setState(state=>({
            ...state,bestScore: checkAndSetBonus(state.cells,state.bestScore,state.score)
        }))
        this.finishGame(this.state.cells)
    }

    finishGame = (cells) => {
       if(cells.length === 16)
           this.setState(state=>({
               ...state,status:'finished'
           }));
       console.log(this.state.status)
    }

    newGame = () => {
        this.setState(this.getNewState())
    }



    render() {
        const {cells, score,bestScore,status} = this.state;

        return (
            <Layout>
                <ControllPanel>
                    <ScoreContainer><ScoreTitle>Счет :</ScoreTitle><Score>{score}</Score></ScoreContainer>
                    <ScoreContainer><ScoreTitle>Лучший счет :</ScoreTitle><Score>{bestScore}</Score></ScoreContainer>
                    <Button onClick={this.newGame}>New Game</Button>
                </ControllPanel>
                <Field cells={cells}/>
                {status==='finished'?
                <Modal score={score} newGame={this.newGame}/>:null}
            </Layout>

        )
    }
}



export default App;
