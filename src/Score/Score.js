import styled from 'styled-components'

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
  background-color: #b5aaaa;
  border-radius: 5px;
`
const ScoreTitle=styled.span`
  color:  #eee;
  font-size: 16px;
  font-weight: 600;
`
const Score=styled.span`
  color: #fdfafa;
  font-size: 30px;
  font-weight: 700;
`;

export {ScoreContainer,ScoreTitle,Score}
