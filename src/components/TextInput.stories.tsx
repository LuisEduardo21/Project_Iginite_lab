import { TextInput, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from 'phosphor-react';

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                < Envelope />
            </TextInput.Icon >,
            <TextInput.Input placeholder="Type your andress email" />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children:  <TextInput.Input placeholder="Type your andress email" />
    },
}

