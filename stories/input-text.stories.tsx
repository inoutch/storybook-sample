import * as React from "react";

import {storiesOf} from "@storybook/react";
import {InputText} from "../components/atoms/InputText";
import {withState} from "../utils/with-state";
import {boolean, withKnobs} from "@storybook/addon-knobs";

interface InputTextState {
    value: string;
}

storiesOf("コンポーネント|入力フォーム.InputText", module)
    .addDecorator(withKnobs)
    .add("デフォルト", withState<InputTextState>(
        (state, setState) =>
            <InputText value={state.value} onChange={value => setState({value})}/>,
        {value: "デフォルト値"}))
    .add("無効", withState<InputTextState>(
        (state, setState) =>
            <InputText value={state.value} onChange={value => setState({value})} disabled={boolean("無効", true)}/>,
        {value: "デフォルト値"}));