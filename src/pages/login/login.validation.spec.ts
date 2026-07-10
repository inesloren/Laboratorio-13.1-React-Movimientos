import { Credentials } from "./login.vm";
import { validateForm } from "./login.validation";
import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";

describe("pages/login/login.validation specs", () => {
    describe("validateForm", () => {
        it("should return true when all fields are correct", () => {
            // Arrange
            const credentials: Credentials = {
                user: "test",
                password: "test",
            };
            // Act
            const result = validateForm(credentials);
            // Assert
            expect(result.succeeded).toBeTruthy();
            expect(result.errors).toEqual({
                user: "",
                password: "",
            });
        });
        it("should return false when validateUserField is incorrect", () => {
            // Arrange
            const credentials: Credentials = {
                user: "",
                password: "test",
            };
            // Act
            const result = validateForm(credentials);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errors).toEqual({
                user: REQUIRED_FIELD_MESSAGE,
                password: "",
            });
        });
        it("should return false when validatePasswordField is incorrect", () => {
            // Arrange
            const credentials: Credentials = {
                user: "test",
                password: "",
            };
            // Act
            const result = validateForm(credentials);
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errors).toEqual({
                user: "",
                password: REQUIRED_FIELD_MESSAGE,
            });
        });

    });
});
