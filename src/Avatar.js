import React from 'react'

const Avatar = ({ user }) => {
  const imageUrl =  `https://api.adorable.io/avatars/40/.png`

  return (
    <div
      className="Avatar"
      style={{
        ...styles,
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
  )
}

const styles = {
  marginRight: '0.5rem',
  height: '40px',
  width: '40px',
  fontSize: '1rem',
  borderRadius: '20px',
  backgroundSize: '40px 40px',
}

export default Avatar