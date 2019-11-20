import React from "react";
import './FormControl.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-control" + (hasError ? " error" : "")}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-control" + (hasError ? " error" : "")}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};