/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CatSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const CatContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-cat"
    m="auto"
    mt={['-10px', '-30px', '-60px']}
    mb={['-20px', '-95px', '-125px']}
    w={[140, 240, 320]}
    h={[140, 240, 320]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <CatContainer>
      <CatSpinner />
    </CatContainer>
  )
}

export default Loader
