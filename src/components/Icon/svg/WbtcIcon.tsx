import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function WbtcIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 109.26 109.26" width={width} height={height} {...props}>
      <defs>
        <style>{'.prefix__cls-1{fill:#5a5564}'}</style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <g id="prefix__Page-1">
            <g id="prefix__wbtc_colour" data-name="wbtc colour">
              <path
                id="prefix__Shape"
                className="prefix__cls-1"
                d="M89.09 22.93l-3 3a42.47 42.47 0 010 57.32l3 3a46.76 46.76 0 000-63.39z"
              />
              <path
                id="prefix__Shape-2"
                data-name="Shape"
                className="prefix__cls-1"
                d="M26 23.19a42.47 42.47 0 0157.32 0l3-3a46.76 46.76 0 00-63.39 0z"
              />
              <path
                id="prefix__Shape-3"
                data-name="Shape"
                className="prefix__cls-1"
                d="M23.19 83.28a42.47 42.47 0 010-57.29l-3-3a46.76 46.76 0 000 63.39z"
              />
              <path
                id="prefix__Shape-4"
                data-name="Shape"
                className="prefix__cls-1"
                d="M83.28 86.05a42.47 42.47 0 01-57.32 0l-3 3a46.76 46.76 0 0063.39 0z"
              />
              <path
                id="prefix__Shape-5"
                data-name="Shape"
                d="M73.57 44.62c-.6-6.26-6-8.36-12.83-9V27h-5.28v8.46h-4.22V27H46v8.68H35.29v5.65s3.9-.07 3.84 0a2.73 2.73 0 013 2.32v23.76a1.85 1.85 0 01-.64 1.29 1.83 1.83 0 01-1.36.46c.07.06-3.84 0-3.84 0l-1 6.31H45.9v8.82h5.28V75.6h4.22v8.65h5.29v-8.72c8.92-.54 15.14-2.74 15.92-11.09.63-6.72-2.53-9.72-7.58-10.93C72.1 52 74 49.2 73.57 44.62zm-7.4 18.78c0 6.56-11.24 5.81-14.82 5.81V57.57c3.58.01 14.82-1.02 14.82 5.83zM63.72 47c0 6-9.38 5.27-12.36 5.27V41.69c2.98 0 12.36-.94 12.36 5.31z"
                fill="#f09242"
              />
              <path
                id="prefix__Shape-6"
                data-name="Shape"
                d="M54.62 109.26a54.63 54.63 0 1154.64-54.64 54.63 54.63 0 01-54.64 54.64zm0-105A50.34 50.34 0 10105 54.62 50.34 50.34 0 0054.62 4.26z"
                fill="#282138"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const MemoWbtcIcon = React.memo(WbtcIcon);
export default MemoWbtcIcon;
