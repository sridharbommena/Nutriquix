export class AppValidator {
  /**
   * Validates if the email is in a proper format.
   * @param email The email string to validate.
   * @returns True if valid, false otherwise.
   */
  static isValidEmail(email: string): boolean {
    // Simple email regex for demonstration
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  /**
   * Validates if the password meets minimum requirements.
   * @param password The password string to validate.
   * @returns True if valid, false otherwise.
   */
  static isValidPassword(password: string): boolean {
    // Example: at least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
}
