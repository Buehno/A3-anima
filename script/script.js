document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Credenciais pré-definidas
            const validEmail = "admin@admin";
            const validPassword = "admin";

            // Verifica as credenciais
            if (email === validEmail && password === validPassword) {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html"; // Redireciona para a página inicial
            } else {
                alert("E-mail ou senha incorretos. Tente novamente.");
            }
        });
    }
});
