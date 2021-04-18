import {
    SvgIcon,
    SvgIconProps
} from '@material-ui/core';

export default function CubeIcon({color, ...props}: SvgIconProps): JSX.Element {
    return (
        <SvgIcon
            fill={color}
            viewBox="0 0 26 26"
            {...props}
            >
            <path d="M11 0l11 6.5v13L11 26 0 19.5v-13L11 0z"/>
        </SvgIcon>
    );
}