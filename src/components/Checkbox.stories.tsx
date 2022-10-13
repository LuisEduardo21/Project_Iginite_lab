import { CheckBox, CheckBoxProps } from "./Checkbox";
import { Meta, StoryObj} from "@storybook/react";
import { Text } from "./Text";

export default {
    title: 'components/CheckBox',
    component: CheckBox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm"> Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ],
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {}

