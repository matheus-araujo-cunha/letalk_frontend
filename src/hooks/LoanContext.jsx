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


    const simulateLoan = async (data) => {
        api.post("/loans",data ).then((loanResponse) => {
            setLoan(loanResponse.data)
            setInstallments(loanResponse.data.installments)
        }).catch((err) => console.log(err))
    }


    return (
        <LoanContext.Provider value={{loan, installments,simulateLoan}}>{children}</LoanContext.Provider>
    )
}