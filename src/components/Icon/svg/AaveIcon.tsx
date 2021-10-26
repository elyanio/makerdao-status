import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function AaveIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 800 800" width={width} height={height} {...props}>
      <defs>
        <path id="prefix__a" d="M0 0h800v800H0z" />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <linearGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          x1={-597.355}
          y1={900.686}
          x2={-598.099}
          y2={900.06}
          gradientTransform="matrix(776 0 0 -776 464237 699089)"
        >
          <stop offset={0} stopColor="#b6509e" />
          <stop offset={1} stopColor="#2ebac6" />
        </linearGradient>
        <circle cx={400} cy={400} r={388} fill="url(#prefix__c)" />
        <path
          d="M569.8 554.6L438.6 237.4c-7.4-16.4-18.4-24.4-32.9-24.4h-11.6c-14.5 0-25.5 8-32.9 24.4l-57.1 138.2h-43.2c-12.9.1-23.4 10.5-23.5 23.5v.3c.1 12.9 10.6 23.4 23.5 23.5h23.2l-54.5 131.7c-1 2.9-1.6 5.9-1.6 9 0 7.4 2.3 13.2 6.4 17.7s10 6.7 17.4 6.7c4.9-.1 9.6-1.6 13.5-4.5 4.2-2.9 7.1-7.1 9.4-11.9l60-148.8h41.6c12.9-.1 23.4-10.5 23.5-23.5v-.6c-.1-12.9-10.6-23.4-23.5-23.5h-22.2l45.8-114.1 124.8 310.4c2.3 4.8 5.2 9 9.4 11.9 3.9 2.9 8.7 4.4 13.5 4.5 7.4 0 13.2-2.2 17.4-6.7 4.2-4.5 6.4-10.3 6.4-17.7.1-3-.4-6.1-1.6-8.9z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

const MemoAaveIcon = React.memo(AaveIcon);
export default MemoAaveIcon;