import React from 'react';

interface NavbarMenuCloseBtnProps {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: string;
}

const NavbarMenuCloseBtn = ({
  style,
  width,
  height,
  strokeColor,
  strokeWidth,
}: NavbarMenuCloseBtnProps) => {
  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || 12}
      height={height || 12}
    >
      <line
        x1="1"
        y1={height || 12}
        x2={width || 12}
        y2="1"
        stroke={strokeColor || 'black'}
        stroke-width={strokeWidth || '2'}
      />
      <line
        x1="1"
        y1="1"
        x2={width || 12}
        y2={height || 12}
        stroke={strokeColor || 'black'}
        stroke-width={strokeWidth || '2'}
      />
    </svg>
  );
};

export default NavbarMenuCloseBtn;
