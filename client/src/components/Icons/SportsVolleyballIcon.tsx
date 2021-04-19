import React from "react";

import {
  SvgIcon,
  SvgIconProps,
  useTheme
} from '@material-ui/core';

export default function SportsVolleyballIcon({color, ...props}: SvgIconProps): JSX.Element {
	const theme = useTheme();

	return (
	<SvgIcon
		fill={color}
		viewBox="0 0 60 60"
		style={{ marginRight: theme.spacing(1), fontSize: 64 }}
		>
		<path d="M15 10.025C8.95 14.6 5 21.825 5 30c0 3.65.8 7.125 2.225 10.275l7.775-4.5v-25.75zM27.5 28.55V5.125c-2.65.275-5.175.95-7.5 1.975v25.8l7.5-4.35zM30.002 32.875l-20.275 11.7c1.525 2.1 3.35 3.975 5.45 5.5l22.325-12.85-7.5-4.35zM32.5 19.9v8.65l20.275 11.7a24.942 24.942 0 002.05-7.45L32.5 19.9zM20.176 53C23.2 54.275 26.5 55 30 55c8.35 0 15.725-4.125 20.275-10.4L42.5 40.1 20.176 53zM54.8 27.025c-1.375-11.575-10.65-20.75-22.3-21.9v9l22.3 12.9z"/>
	</SvgIcon>
	);
}