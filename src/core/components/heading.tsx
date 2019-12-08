import React from 'react'

import {
  Heading as ChakraHeading,
  HeadingProps,
  useColorMode,
} from '@chakra-ui/core'

export const headingFontColor = {
  light: 'blackAlpha.800',
  dark: 'whiteAlpha.800',
}

const Heading: React.FC<HeadingProps> = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode()

  return (
    <ChakraHeading
      ref={ref}
      color={colorMode ? headingFontColor[colorMode] : undefined}
      {...props}
    />
  )
})

export default Heading
