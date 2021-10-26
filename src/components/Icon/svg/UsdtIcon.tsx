import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function UsdtIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 339.43 295.27"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M62.15 1.45l-61.89 130a2.52 2.52 0 00.54 2.94l167.15 160.17a2.55 2.55 0 003.53 0L338.63 134.4a2.52 2.52 0 00.54-2.94l-61.89-130A2.5 2.5 0 00275 0H64.45a2.5 2.5 0 00-2.3 1.45z"
        fill="#50af95"
        fillRule="evenodd"
      />
      <path
        d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12zm0-39.25V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15zm0 0z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
}

const MemoUsdtIcon = React.memo(UsdtIcon);
export default MemoUsdtIcon;
