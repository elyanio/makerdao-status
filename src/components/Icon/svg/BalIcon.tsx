import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function BalIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1000 1000" width={width} height={height} {...props}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
            fill="#1e1e1e"
            fillRule="evenodd"
          />
          <path
            data-name="SVGID"
            d="M507.5 709C347.6 709 218 662.8 218 600.9c0-32.3 35.3-61.4 91.8-81.9 44.1 28.3 118.1 42.8 202 42.8 81.9 0 154.3-17.7 198.8-44.8 53.3 20.3 86.4 48.6 86.4 79.8 0 62-129.6 112.2-289.5 112.2z"
            fill="#fff"
          />
          <path
            data-name="SVGID"
            d="M509.2 547.9c-121.2 0-219.5-38-219.5-84.9 0-26 30.3-49.3 77.8-64.8 33.9 17.7 84.7 29 141.7 29s107.8-11.3 141.7-29c47.6 15.6 77.8 38.8 77.8 64.8.1 46.9-98.2 84.9-219.5 84.9z"
            fill="#fff"
          />
          <path
            data-name="SVGID"
            d="M508.4 413.1c-93.7 0-169.7-31.4-169.7-70s76-70 169.7-70 169.7 31.4 169.7 70-76 70-169.7 70z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoBalIcon = React.memo(BalIcon);
export default MemoBalIcon;
