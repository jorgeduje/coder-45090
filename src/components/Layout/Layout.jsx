import React from 'react'

const Layout = ( {children} ) => {

    
  return (
    <div>
        {children}
        <h2 style={{backgroundColor: "red"}}>Este Seria EL footer</h2>
    </div>
  )
}

export default Layout