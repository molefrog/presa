/* eslint-disable max-len */
import React from 'react'

export const LeftArrow = props => (
  <svg {...props} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.475 10.937A1.156 1.156 0 0 1 2 10c0-.386.187-.728.475-.937L6.16 5.338a1.133 1.133 0 0 1 1.614 0c.446.45.446 1.181 0 1.632L5.918 8.846h10.94C17.49 8.846 18 9.363 18 10c0 .637-.511 1.154-1.141 1.154H5.918l1.856 1.876c.446.45.446 1.181 0 1.632-.446.45-1.168.45-1.614 0l-3.685-3.725z"
      fillRule="nonzero"
      fill="#000"
    />
  </svg>
)

export const RightArrow = props => (
  <svg {...props} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.525 9.063c.288.21.475.551.475.937s-.187.728-.475.937l-3.685 3.725c-.446.45-1.168.45-1.614 0a1.163 1.163 0 0 1 0-1.632l1.856-1.876H3.142C2.51 11.154 2 10.637 2 10c0-.637.511-1.154 1.141-1.154h10.941L12.226 6.97a1.163 1.163 0 0 1 0-1.632 1.133 1.133 0 0 1 1.614 0l3.685 3.725z"
      fillRule="nonzero"
      fill="#000"
    />
  </svg>
)

export const Fullscreen = props => (
  <svg {...props} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g fillRule="nonzero" fill="#000">
      <path d="M4.414 16.929H7a1 1 0 0 1 0 2H2a.997.997 0 0 1-1-1v-5a1 1 0 0 1 2 0v2.585l4.221-4.221a1 1 0 0 1 1.415 1.414L4.414 16.93zM15.514 3H12.93a1 1 0 0 1 0-2h5a.997.997 0 0 1 1 1v5a1 1 0 0 1-2 0V4.414l-4.222 4.222a1 1 0 1 1-1.414-1.415L15.514 3z" />
    </g>
  </svg>
)
