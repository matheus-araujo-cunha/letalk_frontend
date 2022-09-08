import { Flex, Text } from "@chakra-ui/react";
import Form from "../components/Form";

const Home = () => {
  return (
    <Flex flexDir="column" align="center" w="100%" h="100vh" bg="#F6F6F6">
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
    </Flex>
  );
};

export default Home;
