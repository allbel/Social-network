import React from "react";
import classes from './FormsControls.module.css'
import { Input as InputAnt } from 'antd';


const FormControlCreator = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={showError ? classes.error : classes.formControl}>
            {props.children}
            {showError && <div className={classes.divError}>{meta.error}</div>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControlCreator {...props} ><textarea {...input}{...restProps}></textarea></FormControlCreator>
    )
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControlCreator {...props} ><InputAnt style={{width:'200px'}} {...input} {...restProps}></InputAnt></FormControlCreator>
    )
}