import { isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined, isDateAfterToday, isEmailWellFormed } from "../../../common/validations/plain.validation";
import { 
    FieldValidationResult,
    INVALID_IBAN_MESSAGE,
    INVALID_AMOUNT_MESSAGE,
    INVALID_REAL_DATE_TRANSFER_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    buildValidationFailedResult,
    buildValidationSuccessResult,
    buildRequiredFieldValidationFailedResponse,
} from "@/common/validations";




export const validateIBANField = (value:string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    if (!isValidIban(value)) {
        return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
    }
    return buildValidationSuccessResult();
}

export const validateAccountIdField = (
 value: string
): FieldValidationResult => {
 if (!isStringValueInformed(value)) {
 return buildRequiredFieldValidationFailedResponse();
 }
 return buildValidationSuccessResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
 if (!isStringValueInformed(value)) {
 return buildRequiredFieldValidationFailedResponse();
 }
 return buildValidationSuccessResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
 if (!isPositiveNumber(value)) {
 return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
 }
 return buildValidationSuccessResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
 if (!isStringValueInformed(value)) {
 return buildRequiredFieldValidationFailedResponse();
 }
 return buildValidationSuccessResult();
};

export const validateNotesField = (_: string): FieldValidationResult => 
    buildValidationSuccessResult();

export const validateRealDateTransferField = (value?: string): FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }
    if (value &&!isDateAfterToday(value)) {
        return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    }
    return buildValidationSuccessResult();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
        return buildValidationSuccessResult();
    }
    if (value && !isEmailWellFormed(value)) {
        return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
    }
    return buildValidationSuccessResult();
};