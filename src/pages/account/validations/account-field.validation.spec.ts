import { validateTypeField, validateNameField } from "./account-field.validation";

describe("account-field.validation specs", () => {
  
  describe("validateTypeField", () => {
    it("should return false when type is empty", () => {
      // Arrange
      const value = "";
      
      // Act
      const result = validateTypeField(value);
      
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual("Debe elegir una cuenta");
    });

    it("should return true when type is informed", () => {
      // Arrange
      const value = "1"; 
      
      // Act
      const result = validateTypeField(value);
      
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField", () => {
    it("should return false when name is empty", () => {
      // Arrange
      const value = "";
      
      // Act
      const result = validateNameField(value);
      
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual("Debe introducir un alias");
    });

    it("should return true when name is informed", () => {
      // Arrange
      const value = "Mi Cuenta de Ahorros";
      
      // Act
      const result = validateNameField(value);
      
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});