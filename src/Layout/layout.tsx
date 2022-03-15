import React from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../Components/Spinner/spinner'
import Header, { FantomLendlyHeader } from './Header'

export const Layout:React.FC = () => {
    return (
        <div>
          <Header />
          <div className="wrapper">
            <Outlet/>
          </div>
          <Spinner/>
        </div>
      )
}

export const FantomLendlyLayout:React.FC = () => {
  return (
      <div>
        <FantomLendlyHeader />
        <div className="wrapper">
          <Outlet/>
        </div>
        <Spinner/>
      </div>
    )
}
