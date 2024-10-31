import {Component, PureComponent} from "react";
import styled from "styled-components";

export default class Field extends PureComponent {
  static propTypes = {
    matrix: [[]]
  }

  render() {
    const {cells} = this.props;
    return (
      <FiledTag>
        <Background>
          {
            Array.from(new Array(16), (_, i) => i).map(i => {
              return <BackgroundCell key={i}/>
            })
          }
        </Background>

        <Playground>
          {cells.map(({x, y, value, id}) => (
            <Cell key={id} x={x} y={y} value={value}>{value}</Cell>
          ))}
        </Playground>
      </FiledTag>
    )
  }
}

const FiledTag = styled.div`
  height: 475px;
  position: relative;
  width: 475px;`

const Background = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  background-color: #d3cbcb;
  border-radius: 15px;
  padding: 5px;
  flex-wrap: wrap;
  flex-direction: row;
  height: 450px;
  width: 450px;
  position: absolute;
`
const Playground = styled(Background)`
  background-color: transparent;`

const BackgroundCell = styled.div`
  margin: 5px;
  background-color: darkgrey;
  height: 100px;
  width: 100px;
  border-radius: 5px;
`

const Cell = styled(BackgroundCell)`
  transform: translate(${({ x }) => x * 113}px, ${({ y }) => y * 113}px);
  text-align: center;
  line-height: 100px;
  background-color: ${({ value }) => calculateBackgroundColor(value)};
  position: absolute;

  transition-property: transform;
  transition: 100ms ease-in-out;
  color: #6a4e4e;
  font-weight: 900;
  font-size: ${({ value }) =>
    value < 100 ? 66
      : value < 1000 ? 47
        : value < 10000 ? 40
          : 30}px;
`
const calculateBackgroundColor = (value) => {
  if (value === 0) {
    return 'transparent'
  }
  // from 0 to 16
  const step = Math.min(16, Math.log2(value))
  return `hsl(0, ${calculateSaturation(step)}%, ${calculateLightness(step)}%);`
}
const calculateSaturation = step => Math.floor(100 / 16 * step)
const calculateLightness = step => 100 - Math.floor(50 / 16 * step)
