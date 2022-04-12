import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Spinner from '../Components/Spinner/spinner'
import Header, { FantomLendlyHeader } from './Header'

export const Layout:React.FC = () => {
    return (
        <div>
          <Header />
            <Container fluid>
            <Outlet/>
            </Container>
          <Spinner/>
        </div>
      )
}

export const FantomLendlyLayout:React.FC = () => {
  return (
      <div>
        <FantomLendlyHeader />
            <Container fluid>
            <Outlet/>
            </Container>
        <Spinner/>
      </div>
    )
}
