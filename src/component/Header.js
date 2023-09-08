import React from 'react'
import { styled } from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import { HelpOutline } from '@material-ui/icons'

function Header () {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        //Todo:add onClick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/*Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search ' />
      </HeaderSearch>

      {/* Header Right  */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    text-align: center;
    border: none;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
