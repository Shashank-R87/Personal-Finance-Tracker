import Lottie from 'lottie-react'
import React from 'react'
import loading from "../assets/loading.json"

function Loading() {
  return (
    <Lottie style={{width: 500, height: 500}} animationData={loading} loop={true} />
  )
}

export default Loading