import React from "react";
import {
    AccountVm,
    createEmptyAccountVm,
    AccountError,
    createEmptyAccountError,
} from "../account.vm";
import classes from "./account-form.component.module.css";
import { validateForm } from "../validations";

interface Props {
    onSave: (accountInfo: AccountVm) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
    const { onSave } = props;

    const [account, setAccount] = React.useState<AccountVm>(createEmptyAccountVm());

    const [errors, setErrors] = React.useState<AccountError>(createEmptyAccountError());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formValidationResult = validateForm(account);
        setErrors(formValidationResult.errors);
        if(formValidationResult.succeeded){
        onSave(account);
        }
    };

    const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          
          <div>
            <label>Tipo de cuenta:</label>
            <select 
              name="type" 
              onChange={handleFieldChange} 
              value={account.type}
              className={classes.input}
            >
              <option value="">Seleccionar</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>

          <div>
            <label>Alias:</label>
            <input 
              name="name" 
              onChange={handleFieldChange} 
              value={account.name} 
              className={classes.input}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>

        </div>
        <div className={classes.buttonContainer}>
          <button type="submit">GUARDAR</button>
        </div>

      </form>
    </div>
  );
};