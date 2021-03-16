import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

type Props = TextFieldProps & {
    name: string;
}

export default function TextFieldWrapper({name, ...props}: Props) {
    const [field, meta] = useField(name);

    const configuration = {
        ...field,
        ...props,
        error: false,
        helperText: 'SYSCO epost',
    };

    if(meta && meta.touched && meta.error) {
        configuration.error = true;
        configuration.helperText = meta.error;
    }

    return <TextField {...configuration}/>
};