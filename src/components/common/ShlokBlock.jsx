import React from 'react'

export default function ShlokBlock({ sanskrit, translation, dark = false }) {
  return (
    <div className={dark ? 'shlok-block-dark' : 'shlok-block'}>
      <p className="sanskrit-text">{sanskrit}</p>
      <p className="english-text">"{translation}"</p>
    </div>
  )
}
