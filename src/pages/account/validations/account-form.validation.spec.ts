import { validateForm } from "./account-form.validation";
import * as fieldValidations from "./account-field.validation";
import { AccountVm } from "../account.vm";
import { vi } from "vitest";

describe("create-account-form.validation specs", () => {
  describe("validateForm", () => {
    
    it("should return true when all fields are correct", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "Mi Cuenta",
      };

      // Simulamos que todas las validaciones de campo pasan correctamente
      vi.spyOn(fieldValidations, "validateTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(fieldValidations, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });

    it("should return false when type is empty", () => {
      // Arrange
      const account: AccountVm = {
        type: "",
        name: "Mi Cuenta",
      };

      // Simulamos que falla el tipo pero acierta el nombre
      vi.spyOn(fieldValidations, "validateTypeField").mockReturnValue({
        succeeded: false,
        errorMessage: "Debe elegir una cuenta",
      });
      vi.spyOn(fieldValidations, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "Debe elegir una cuenta",
        name: "",
      });
    });

    it("should return false when name is empty", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "",
      };

      // Simulamos que acierta el tipo pero falla el nombre
      vi.spyOn(fieldValidations, "validateTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(fieldValidations, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Debe introducir un alias",
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Debe introducir un alias",
      });
    });

  });
});