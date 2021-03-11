import React from 'react';
import {
    Box,
    BoxProps,
    useTheme,
} from '@material-ui/core';

type Props = BoxProps & {
    x?: number;
    y?: number;
    basis?: number;
};

export default function Spacer({x, y, basis, ...rest}:Props) {
    const theme = useTheme();
    return (
        <Box
            data-testid="Spacer"
            width={x ? theme.spacing(x) : undefined}
            height={y ? theme.spacing(y) : undefined}
            flexBasis={basis ? theme.spacing(basis) : undefined}
            flexGrow={0}
            flexShrink={0}
            {...rest}
        />
    );
};