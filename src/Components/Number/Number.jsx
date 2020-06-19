import React from 'react';
import {NumberForm} from "./NumberForm";
import {BaseCard} from "../common/Blocks/CustomCards";

const Number = () => {
    return (
        <BaseCard title="Полчить номер">
            <NumberForm/>
        </BaseCard>
    )
}
export default Number;