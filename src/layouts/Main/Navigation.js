import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const StyledNav = styled.nav`
  background-color: black;
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 1em;
    color: gray;
    transition: .3s;
    
    &:hover {
      background-color: #2e2e2e;
      color: white;
    }
  }
`

const activeStyle = {
  color: 'white'
}

const Navigation = props => (
  <StyledNav>
    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
  </StyledNav>
)

export default Navigation
