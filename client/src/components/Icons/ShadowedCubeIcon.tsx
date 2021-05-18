import { SvgIconProps } from '@material-ui/core';

export default function Polygon(props: SvgIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="34"
            fill="none"
            fontSize="large"
            viewBox="0 0 30 34"
            {...props}
            >
            <g filter="url(#filter0_d)">
                <path fill="#00FF97" d="M15 0l11 6.5v13L15 26 4 19.5v-13L15 0z"></path>
                <path
                stroke="#000"
                d="M4.5 6.785L15 .581l10.5 6.204v12.43L15 25.419 4.5 19.215V6.785z"
                ></path>
            </g>
            <defs>
                <filter
                id="filter0_d"
                width="30"
                height="34"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                ></feBlend>
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}
  