import * as React from "react";

import {storiesOf} from "@storybook/react";
import {withKnobs, boolean} from "@storybook/addon-knobs";

import {Checkbox} from "../components/atoms/Checkbox";
import {withState} from "../utils/with-state";
import {action} from "@storybook/addon-actions";

interface CheckboxState {
    value: boolean;
}

storiesOf("チェックボックス", module)
    .addDecorator(withKnobs)
    .add("ステート", withState<CheckboxState>((state, setState) =>
        <Checkbox value={state.value} onChange={value => setState({value})}/>, {value: false}))
    .add("knobs", () => <Checkbox value={boolean("value", false)} onChange={action("clicked")}/>);
