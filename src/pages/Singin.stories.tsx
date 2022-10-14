import { SignIn } from "./Signin";
import { Meta, StoryObj} from "@storybook/react";
import {within, userEvent , waitFor} from "@storybook/testing-library";
import { expect } from "@storybook/jest"

export default {
    title: 'pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta;

export const Default: StoryObj = {
    play: async ({ canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'teste@teste.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), '123456')

        userEvent.click(canvas.getByRole('button'));
       
        await waitFor(() => {
            expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
        })
    }
}

