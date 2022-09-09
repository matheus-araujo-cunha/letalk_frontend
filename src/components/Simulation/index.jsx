import { Box, Button, Center, Container, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useLoan } from "../../hooks/LoanContext";
import CardInstallment from "../CardInstallment";
import { CardLoan } from "../CardLoan";

import { useToast } from '@chakra-ui/react'

const Simulation = () => {
  const { loan, installments } = useLoan();
  const toast = useToast()

  const effectLoan = () => {
    return toast({
      title:"Empréstimo realizado com sucesso!",
      position:"top-right",
      status:"success",
      duration:6000,
      isClosable:true

    })
  }
  return (
    <>
      <Text as="h3" m="6vh 0" fontWeight="bold" fontFamily="Open Sans">
        Veja a simulação para o seu empréstimo antes de efetivar
      </Text>

      <Container bg="white" as="section" maxW="" w="72%" p="25px 20px" bowShadow="0px 0px 10px #ECECEC" fontFamily="Open Sans" >
        <VStack  spacing="3">
          <Box w="100%" display="flex" justifyContent="start" gap="2%" mb="20px" >
            <CardLoan title="VALOR REQUERIDO" value={loan.total}/>
            <CardLoan title="TAXA DE JUROS" value={loan.interestRate + "% ao mês"}/>
            <CardLoan title="VALOR DA PARCELA" value={loan.valueByMonth}/>
          </Box>
          <Box w="100%" display="flex" justifyContent="start" gap="2%">
            <CardLoan title="TOTAL DE MESES PARA QUITAR" value={loan.installments.length + " MESES"}/>
            <CardLoan title="TOTAL DE JUROS" value={loan.totalInterest}/>
            <CardLoan title="TOTAL A PAGAR" value={loan.total + loan.totalInterest}/>
          </Box>
        </VStack>

        <Text as="h3" mt="10vh" mb="8vh" color="gray.400" fontWeight="700">PROJEÇÃO DAS PARCELAS:</Text>

        <Flex justify="space-between" color="#333" fontWeight="700">
          <Text>SALDO DEVEDOR</Text>
          <Text>JUROS</Text>
          <Text>SALDO DEVEDOR AJUSTADO</Text>
          <Text>VALOR DA PARCELA</Text>
          <Text>VENCIMENTO</Text>
        </Flex>

        {installments.map(installment => <CardInstallment key={installment.id} installment={installment} />)}
        <Divider mb="4px" bg="#C4C4C4"/>
        <Text as="h4" h="6vh" color="#333" fontWeight="400">0</Text>
        <Divider bg="#C4C4C4"/>

        <Center w="100%" mt="4vh">
      <Button w="70%" bg="green.600" color="white" onClick={() => effectLoan()}>EFETIVAR O EMPRÉSTIMO</Button>
      </Center>
      </Container>


 


    </>
  );
};

export default Simulation;
