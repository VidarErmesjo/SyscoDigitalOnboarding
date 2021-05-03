import { SvgIcon, SvgIconProps, useTheme } from '@material-ui/core';

export default function GeoMarkerIcon({color, ...props}: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            color={color}
            fontSize="large"
            viewBox="0 0 25 25"
            {...props}
            >
            <path stroke="#000" d="M12.5 2.083a7.286 7.286 0 00-7.292 7.292c0 5.469 7.292 13.542 7.292 13.542s7.292-8.073 7.292-13.542A7.286 7.286 0 0012.5 2.083zm0 9.896a2.605 2.605 0 010-5.208 2.605 2.605 0 010 5.208z"/>
        </SvgIcon>
    );
}