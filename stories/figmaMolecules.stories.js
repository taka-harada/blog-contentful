import React from "react"
import { Button } from "../src/components/atoms/Button"
import { withDesign } from "storybook-addon-designs"

export default {
  title: 'figma',
  component: Button,
  decorators: [withDesign]
}

export const Molecules = () => <Button text="Button">Hello, World!</Button>

Molecules.story = {
  name: 'Molecules',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/bYKpTpAZEYwAEkBaeq5zmX/Daman-Blog?node-id=43%3A1'
    }
  }
}
