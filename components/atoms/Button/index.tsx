import * as React from "react";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children?: any;
}

export const Button: React.SFC<ButtonProps> = (props: ButtonProps) => (
    <button onClick={props.onClick}
            disabled={props.disabled}>
        {props.children}
        <style jsx>{`
        button {
            display: inline-block;
            padding: 0.5em 1em;
            text-decoration: none;
            background: #668ad8;
            color: #FFF;
            border-bottom: solid 4px #627295;
            border-radius: 3px;
        }
        button:active {
            transform: translateY(4px);
            box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
            border-bottom: none;
        }
        button:disabled {
            color: white;
            background: gray;
            border-bottom: solid 4px #666;
        }
        `}</style>
    </button>
);
