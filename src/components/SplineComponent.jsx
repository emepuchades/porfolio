import React from 'react'
import Spline from '@splinetool/react-spline';

function SplineComponent({url}) {
  const room = "https://prod.spline.design/yY6RJze0N2Da3mEi/scene.splinecode";

  return (
      <Spline scene={url} />
  )
}

export default SplineComponent