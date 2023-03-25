import React from 'react'
import Spline from '@splinetool/react-spline';

function SplineComponent({ url }) {
  return (
    <Spline scene={url} />
  )
}

export default SplineComponent