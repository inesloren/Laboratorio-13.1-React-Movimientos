import { isStringValueInformed } from "@/common/validations/plain.validation";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return {
      succeeded: false,
      errorMessage: "Debe elegir una cuenta",
    };
  }
  return { succeeded: true };
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return {
      succeeded: false,
      errorMessage: "Debe introducir un alias",
    };
  }
  return { succeeded: true };
};