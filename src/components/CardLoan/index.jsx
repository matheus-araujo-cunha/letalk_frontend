import { Flex, Text } from "@chakra-ui/react"

export const CardLoan = ({title, value}) => {
    return (
        <Flex flexDir="column" align="start"  fontFamily="Open Sans" minW="200px" maxW="200px">
        <Text as="h4"  color="gray.400" fontSize="xs" fontWeight="700">{title}</Text>
        <Text as="h3" color="#333" fontWeight="700"> {value}</Text>
      </Flex>
    )
}