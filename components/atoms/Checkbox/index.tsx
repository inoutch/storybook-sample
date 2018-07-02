import * as React from "react";

interface CheckboxProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

export const Checkbox: React.SFC<CheckboxProps> = (props: CheckboxProps) => (
    <input type="checkbox"
           checked={props.value}
           onChange={e => props.onChange(e.target.checked)}/>
);
