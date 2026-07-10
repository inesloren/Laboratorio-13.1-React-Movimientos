import { FieldValidationResult,
    buildValidationSuccessResult,
    buildRequiredFieldValidationFailedResponse,
} from "@/common/validations";
import { isStringValueInformed } from "../transfer/validations";

export const validateUserField = (value:string):FieldValidationResult => {
    if(!isStringValueInformed(value)){
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSuccessResult();
};

export const validatePasswordField = (value:string):FieldValidationResult => {
    if(!isStringValueInformed(value)){
        return buildRequiredFieldValidationFailedResponse();
    }
    return buildValidationSuccessResult();
};