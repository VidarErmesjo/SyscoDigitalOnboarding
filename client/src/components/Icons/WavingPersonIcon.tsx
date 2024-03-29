import {
    SvgIcon,
    SvgIconProps
} from '@material-ui/core';

export default function WavingPersonIcon({color, ...props}: SvgIconProps): JSX.Element {
    return (
        <SvgIcon
            fill={color}
            fontSize="large"
            viewBox="0 0 40 40"
            {...props}
            >
            <path d="M18.5 9.25a3.083 3.083 0 100-6.167 3.083 3.083 0 000 6.167z"/>
            <path d="M24.496 12.503c-.6-.601-1.634-1.711-3.638-1.711h-3.916c-4.24-.016-7.693-3.47-7.693-7.709H6.166c0 4.872 3.253 9.004 7.708 10.345v20.489h3.084v-9.25h3.083v9.25h3.083V15.494l6.09 6.09 2.174-2.174-6.892-6.907z"/>
        </SvgIcon>
    );
}