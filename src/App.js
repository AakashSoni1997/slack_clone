import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import { styled } from 'styled-components'
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'

function App () {
  return (
    <div className='app'>
      <Router>
        <>
          <Header />

          <AppBody>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
