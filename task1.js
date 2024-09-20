function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    }
    if (!/[0-9]/.test(password)) {
        return "Weak";
    }
    if (password === password.toUpperCase()) {
        return "Weak";
    }
    if (password === password.toLowerCase()) {
        return "Weak";
    }
    return "Strong";
}

console.log(checkPasswordStrength("1mariyka"));






