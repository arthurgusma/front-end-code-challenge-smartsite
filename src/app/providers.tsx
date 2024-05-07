'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { radioTheme, checkBoxTheme  } from '../ConfigChakraUIStyles';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
    components: {
      Radio: radioTheme,
      Checkbox: checkBoxTheme,
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