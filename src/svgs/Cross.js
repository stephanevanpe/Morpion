import React from 'react';

export default function Cross(props) {
  const size = props.size || 100
  return (
    <svg width={size} height={size} viewBox="0 0 124 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="7.04947" y1="7.44774" x2="116.448" y2="100.951" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="116.448" y1="8.04947" x2="7.04947" y2="101.552" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}