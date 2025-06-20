import { useState } from "react";

const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWECASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPL_CHARS = "'!@#$%^&*()-_=+[]{}|'";

const usePassword = () => {
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const generatePassword = (checkboxData, len) => {

        let charset = "";
        let password = "";

        const selectedOptions = checkboxData.filter((checkbox) => checkbox.status);
        selectedOptions.forEach((option) => {
            switch (option.title) {
                case "Uppercase":
                    charset += UPPERCASE_LETTERS;
                    break;
                case "Lowercase":
                    charset += LOWECASE_LETTERS;
                    break;
                case "Numbers":
                    charset += NUMBERS;
                    break;
                case "Symbols":
                    charset += SPL_CHARS;
                    break;
            }
        });

        if (charset.length === 0) {
            setErrorMessage("Please Select atleast one character set option")
            setPassword(null);
            return;
        }
        for (let i = 1; i <= len; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }
        setPassword(password);
        setErrorMessage(null);
    };

    return [password, errorMessage, generatePassword];
}

export default usePassword;