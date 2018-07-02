import * as React from "react";

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import {Button} from "../components/atoms/Button";

storiesOf("ボタン", module)
    .add("テキスト", () =>
        <Button onClick={action("onClick")}>
            普通のボタン
        </Button>)
    .add("リンク", () =>
        <a>
            <Button onClick={() => {
            }}>
                リンクボタン
            </Button>
        </a>)
    .add("無効", () =>
        <Button onClick={() => {
        }} disabled>
            無効
        </Button>);
