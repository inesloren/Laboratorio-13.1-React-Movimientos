import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import { AccountVm } from "./account.vm";
import { CreateAccountFormComponent } from "./components/account-form.component";
import classes from "./account.page.module.css";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSaveAccount = (accountInfo: AccountVm) => {
    saveAccount(accountInfo).then((success) => {
      if (success) {
        alert("Cuenta bancaria creada con éxito");
        navigate(-1); 
      } else {
        alert("Hubo un error al intentar crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent onSave={handleSaveAccount} />
      </div>

      </AppLayout>
  )
};
