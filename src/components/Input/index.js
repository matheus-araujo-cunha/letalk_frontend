import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
} from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBase = ({ error = null, name, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDir="column">
        <ChakraInput
          id={name}
          name={name}
          h="40px"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="6px"
          bg="white"
          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage color="red" fontSize="0.6rem">
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
