import { Button, Flex, Text,  useToast,  VStack } from "@chakra-ui/react";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLoan } from "../../hooks/LoanContext";

const Form = () => {
  const { loan, installments, simulateLoan } = useLoan();

  const toast = useToast()

  const simulateLoanSchema = yup.object().shape({
    cpf: yup
      .string()
      .matches(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        "CPF não está em um formato válido"
      )
      .required("O campo CPF é obrigatório"),
    uf: yup.string().required("O campo UF é obrigatório"),
    birthdate: yup
      .string("Insira o campo com o formato de data YYYY-MM-DD")
      .matches(
        /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/,
        "Formato de data YYYY/MM/DD"
      )
      .required("O campo de data de nascimento é obrigatório"),
    total: yup
      .number("aaa")
      .positive("Deve ser um número positivo")
      .transform((value, originalValue) => {
        return !!value ? value : 0
      })
      .positive("Deve ser um número positivo")
      .min(50000, "Valor mínimo para empréstimo é de 50000")
      .required("O Campo de valor do empréstimo é obrigatório"),
    valueByMonth: yup
      .number("O campo requer um número")
      .transform((value, originalValue) => {
        return !!value ? value : 0
      })
      .positive("Deve ser um número positivo")
      .required("O Campo de valor mensal é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(simulateLoanSchema),
  });

  const handleSimulateLoan = async (data) => {
    simulateLoan(data)
  }   

  return (
    <>
      <Text as="h3" fontWeight="bold" mt="6vh" mb="3vh">
        Preencha o formulário abaixo para simular
      </Text>
      <Flex
        as="form"
        bg="white"
        w="72%"
        minH="75vh"
        h="75vh"
        justify="center"
        align="center"
        boxShadow="0px 0px 10px #ECECEC"
        borderRadius="5px"
        fontFamily="Open Sans"
        onSubmit={handleSubmit(handleSimulateLoan)}
      >
        <VStack spacing="5" w="90%">
          <Input
            placeholder="CPF"
            name="cpf"
            error={errors.cpf}
            {...register("cpf")}
          ></Input>
          <Input
            placeholder="UF"
            name="uf"
            error={errors.uf}
            {...register("uf")}
          ></Input>
          <Input
            placeholder="DATA DE NASCIMENTO"
            name="birthdate"
            error={errors.birthdate}
            {...register("birthdate")}
          ></Input>
          <Input
            placeholder="QUAL O VALOR DO EMPRÉSTIMO"
            name="total"
            // type="number"
            error={errors.total}
            {...register("total")}
          ></Input>
          <Input
            placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
            name="valueByMonth"
            type="number"
            error={errors.valueByMonth}
            {...register("valueByMonth")}
          ></Input>
          <Button
            type="submit"
            w="100%"
            bg="yellow.600"
            color="white"
            fontWeight="bold"
            fontSize="sm"
            borderRadius="6px"
          >
            SIMULAR
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Form;
