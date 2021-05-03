import { SvgIcon, SvgIconProps } from '@material-ui/core';

export default function UpRightIcon(props: SvgIconProps) {
    return (
        <SvgIcon
            color={props.color}
            fontSize={props.fontSize}
            style={props.style}
            viewBox="0 0 23 23"
            {...props}
            >
            <path d="M7.667 0v3.067H17.77L0 20.838 2.162 23 19.933 5.229v10.104H23V0H7.667z"/>
        </SvgIcon>
    );
}