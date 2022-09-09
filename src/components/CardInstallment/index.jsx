import {Flex, Text} from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'
import { formatDate } from "../../utils";

const CardInstallment = ({installment}) => {
  
  const formatedDate = formatDate(installment.expiresIn)

  return (
    <>
    <Divider mt="2px" bg="#C4C4C4"/>
    <Flex color="#333" fontWeight="400" fontFamily="Open Sans" mt="5px" justifyContent="start" gap="10%" minW="50vw">
      <Text as="h4" w="8vw" h="6vh">{installment.payable}</Text>
      <Text as="h4" w="8vw" h="6vh">{installment.interest}</Text>
      <Text as="h4" w="8vw" h="6vh">{installment.payableAdjusted.toFixed(2)}</Text>
      <Text as="h4" w="8vw" h="6vh">{installment.value}</Text>
      <Text as="h4" w="8vw" h="6vh">{formatedDate}</Text>
    </Flex>
    
    </>
  
  )
};

export default CardInstallment;
