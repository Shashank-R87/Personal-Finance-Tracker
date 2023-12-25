import Lottie from 'lottie-react'
import React from 'react'
import loading from "../assets/loading.json"

function Loading() {
  return (
    <Lottie animationData={loading} loop={true} />
  )
}

export default Loading