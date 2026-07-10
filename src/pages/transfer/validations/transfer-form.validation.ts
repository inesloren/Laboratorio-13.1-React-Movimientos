import { TransferVm } from "../transfer.vm";
import { FormValidationResult } from "@/common/validations";
import { TransferError } from "../transfer.vm";

import {
    validateIBANField,
    validateAccountIdField,
    validateNameField,
    validateAmountField,
    validateConceptField,
    validateRealDateTransferField,
    validateEmailField,
} from "./transfer-field.validation";

export const validateForm = (transferVm: TransferVm): FormValidationResult<TransferError> => {
    const fieldValidationResults = [
        validateIBANField(transferVm.iban),                       // 0
        validateAccountIdField(transferVm.accountId),             // 1
        validateNameField(transferVm.name),                       // 2
        validateAmountField(transferVm.amount),                   // 3
        validateConceptField(transferVm.concept),                 // 4
        validateRealDateTransferField(transferVm.realDateTransfer),// 5
        validateEmailField(transferVm.email),                     // 6
    ];

    const formValidationResult: FormValidationResult<TransferError> = {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
            iban: fieldValidationResults[0].errorMessage ?? "",
            accountId: fieldValidationResults[1].errorMessage ?? "",
            name: fieldValidationResults[2].errorMessage ?? "",
            amount: fieldValidationResults[3].errorMessage ?? "",
            concept: fieldValidationResults[4].errorMessage ?? "",
            realDateTransfer: fieldValidationResults[5].errorMessage ?? "",
            email: fieldValidationResults[6].errorMessage ?? "",
            notes: "", // No hay validación de notas en tu array original
            dateTransfer: "", 
        },
    };

    return formValidationResult;
};