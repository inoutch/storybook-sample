import * as React from "react";

interface InputTextProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export const InputText: React.SFC<InputTextProps> = (props: InputTextProps) => (
    <React.Fragment>
        <input type="text"
               value={props.value}
               onChange={e => props.onChange(e.target.value)}
               disabled={props.disabled}/>
    </React.Fragment>
);
