import {
    SvgIcon,
    SvgIconProps
} from '@material-ui/core';

export default function AccountIcon({color, ...props}: SvgIconProps): JSX.Element {
    return (
        <SvgIcon
            fill={color}
            fontSize="large"
            viewBox="0 0 44 44"
            {...props}
            >
            <path
                fillRule="evenodd"
                d="M30.563 24.072c2.511 1.705 4.271 4.015 4.271 7.095v5.5h7.333v-5.5c0-3.997-6.544-6.362-11.605-7.095z"
                clipRule="evenodd"
            />
            <path
                fill="#fff"
                d="M16.501 22a7.333 7.333 0 100-14.667 7.333 7.333 0 000 14.667z"
            />
            <path
                fillRule="evenodd"
                d="M27.5 22a7.331 7.331 0 007.334-7.333 7.331 7.331 0 00-7.333-7.334c-.862 0-1.669.184-2.439.44a10.963 10.963 0 010 13.787c.77.257 1.577.44 2.439.44zM16.5 23.833c-4.894 0-14.666 2.457-14.666 7.334v5.5h29.333v-5.5c0-4.877-9.771-7.334-14.666-7.334z"
                clipRule="evenodd"
            />
        </SvgIcon>
    );
}