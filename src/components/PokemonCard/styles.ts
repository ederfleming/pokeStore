import styled from 'styled-components'

export const Wrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

export const PokemonItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    width: 80%;
    align-self: center;
  }
`

export const PokemonName = styled.span`
  font-size: 16px;
  color: #333;
  text-transform: capitalize;
`

export const PokemonPrice = styled.span`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
  text-transform: capitalize;
`
