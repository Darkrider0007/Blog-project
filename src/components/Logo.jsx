/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Logo({width = "100px"}) {
  return (
    <img src="/logo.png" alt="logo" width={width} />
  )
}

export default Logo