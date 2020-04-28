import React from "react"
import {Button} from "../src/components/atoms/Button"
import {action} from "@storybook/addon-actions"

export default {
  title: 'atoms'
}

export const Buttons = () => (
  <Button onClick={action('clicked')} text="Button" />
)