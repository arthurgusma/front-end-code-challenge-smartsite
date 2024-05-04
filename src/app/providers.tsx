'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderRadius: '24px', // change the border radius
    borderColor: 'black', // change the border color
  },
})

export const radioTheme = defineMultiStyleConfig({ baseStyle })

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
    components: {
      Radio: radioTheme
    },
    styles: {
      global: {
        "*": {
          borderColor: "inherit" 
        }
      }
    },
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}