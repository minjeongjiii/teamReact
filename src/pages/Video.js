import React from 'react'

export default function Video() {
  return (
    <video muted autoPlay loop id="myVideo" style={{marginBottom:40}}>
      <source src="/images/visualmain.mp4" type="video/mp4" />
  </video>
  );
}