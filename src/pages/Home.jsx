import React from 'react'
import StyleLink, {StyleNavLink } from "../components/ui/Link/Link";

const Home = () => {
  return (
    <div className="App">
     <StyleLink to="/" textDecoration="underline">Hola mundo</StyleLink>
     <StyleNavLink to="/">Hola nuevo mundo</StyleNavLink>
    </div>
  )
}

export default Home