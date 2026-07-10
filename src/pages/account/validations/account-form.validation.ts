import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountVm, AccountError } from "../account.vm";
import { validateTypeField, validateNameField } from "./account-field.validation";

export const validateForm = (account: AccountVm): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};