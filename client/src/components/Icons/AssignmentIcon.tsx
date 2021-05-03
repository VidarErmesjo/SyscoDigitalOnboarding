import { SvgIcon, SvgIconProps, useTheme } from "@material-ui/core";

export default function Icon({color, style, ...props}: SvgIconProps) {
    const theme = useTheme();

    return (
        <SvgIcon
            color={color}
            fontSize={props.fontSize}
            style={style}
            viewBox="0 0 25 29"
            {...props}
            >
            <path d="M21.542 2.583h-5.4C15.6 1.085 14.18 0 12.5 0c-1.68 0-3.1 1.085-3.643 2.583H3.458A2.59 2.59 0 00.875 5.167v20.666a2.59 2.59 0 002.583 2.584h18.084a2.59 2.59 0 002.583-2.584V5.167a2.59 2.59 0 00-2.583-2.584zm-9.042 0c.71 0 1.292.582 1.292 1.292 0 .71-.582 1.292-1.292 1.292-.71 0-1.292-.582-1.292-1.292 0-.71.582-1.292 1.292-1.292zm9.042 23.25H3.458V5.167h2.584v3.875h12.916V5.167h2.584v20.666z"/>
        </SvgIcon>
    );
}