import { radioAnatomy, checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys || checkboxAnatomy.keys)

const baseStyleRadio = definePartsStyle({
  control: {
    borderRadius: '24px',
    borderColor: 'black',
  },
})

const baseStyleCheckBox = definePartsStyle({
  control: {
    borderColor: 'grey',
  },
})

export const radioTheme = defineMultiStyleConfig({ baseStyle: baseStyleRadio })
export const checkBoxTheme = defineMultiStyleConfig({ baseStyle: baseStyleCheckBox })