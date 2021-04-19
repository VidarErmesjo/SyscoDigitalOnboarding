import {
    SvgIcon,
    SvgIconProps,
    useTheme
} from '@material-ui/core';

export default function AccountIcon({color, ...props}: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fill={color}
            fontSize="large"
            viewBox="0 0 40 40"
            style={{ marginRight: theme.spacing(1) }}
            {...props}
            >
            <path
                fillRule="evenodd"
                d="M27.781 21.883c2.284 1.55 3.884 3.65 3.884 6.45v5h6.666v-5c0-3.633-5.95-5.783-10.55-6.45z"
                clipRule="evenodd"
            />
            <path d="M14.999 20a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333z"/>
            <path
                fillRule="evenodd"
                d="M24.998 20a6.665 6.665 0 006.667-6.667 6.665 6.665 0 00-6.667-6.666c-.783 0-1.517.166-2.217.4a9.966 9.966 0 010 12.533c.7.233 1.434.4 2.217.4zM15 21.667c-4.45 0-13.334 2.233-13.334 6.666v5h26.667v-5c0-4.433-8.884-6.666-13.334-6.666z"
                clipRule="evenodd"
            />
        </SvgIcon>
    );
}