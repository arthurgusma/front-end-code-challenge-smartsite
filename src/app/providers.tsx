'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
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