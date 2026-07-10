import React from "react";
import { AppLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { AccountVm, TransferVm } from "./transfer.vm"; 
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { getAccountList } from "./api";
import { mapAccountFromApiToVm } from "./transfer.mapper";
import { saveTransfer } from "./api";
import { mapTransferFromVmToApi } from "./transfer.mapper";


export const TransferPage: React.FC = () => {
  const {id} = useParams<{id:string}>();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>{
      const accountListVm = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    })
  }, []);

  const handleTransfer = (transferInfo:TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if(result){
        alert("La transferencia se ha realizado correctamente");
      } else {
        alert("La transferencia no se ha realizado correctamente");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencia bancaria</h1>
      <TransferFormComponent
      accountList={accountList}
      onTransfer={handleTransfer}
      defaultValue={id}/>
      </div>
      
    </AppLayout>
  );
};






