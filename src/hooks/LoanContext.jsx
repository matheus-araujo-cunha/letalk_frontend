import { useToast } from "@chakra-ui/react"
import {useContext,createContext,useState} from "react"

import {api} from "../services/api"

export const LoanContext = createContext({})



export const useLoan = () => {
    const context = useContext(LoanContext);

    if (!context) {
      throw new Error("userAuth must be used within an AuthProvider");
    }
  
    return context;
}

export const LoanProvider = ({children}) => {
    const [loan,setLoan] = useState({})
    const [installments,setInstallments] = useState([])

    const toast = useToast()

    const simulateLoan = async (data) => {
        api.post("/loans",data ).then((loanResponse) => {
            setLoan(loanResponse.data)
            setInstallments(loanResponse.data.installments)
        }).catch((err) =>

        toast({
            title:"Aumente o valor da parcela.",
            description:"O valor mínimo da parcela deve ser 1% do valor total do empréstimo.",
            status:"error",
            duration:6000,
            position:"top-right",
            isClosable:true
        }))}


    return (
        <LoanContext.Provider value={{loan, installments,simulateLoan}}>{children}</LoanContext.Provider>
    )
}