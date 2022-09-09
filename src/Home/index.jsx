import { Flex, Text } from "@chakra-ui/react";
import Form from "../components/Form";
import Simulation from "../components/Simulation";
import { useLoan } from "../hooks/LoanContext";

const Home = () => {
  const {loan} = useLoan()

  const isSimulated = Object.keys(loan).length > 0

  return (
    <Flex flexDir="column" align="center" w="100%" minH="100vh" bg="#F6F6F6">
      <Text
        color="gray.300"
        fontSize="3xl"
        fontFamily="Open Sans"
        fontWeight="light"
        mt="3vh"
      >
        Simule e solicite o seu empréstimo.
      </Text>

      <Form></Form>


      {isSimulated  && <Simulation/>}
    </Flex>
  );
};

export default Home;
