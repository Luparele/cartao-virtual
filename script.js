document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o Modal do Pix
    const pixModal = document.getElementById('pixModal');
    const openPixQrButton = document.getElementById('openPixQr');
    const closeButton = document.querySelector('.close-button');
    const pixKeyElement = document.getElementById('pixKey'); // Onde a chave Pix será exibida
    const copyButton = document.querySelector('.copy-button'); // Botão de copiar

    openPixQrButton.addEventListener('click', function() {
        pixModal.style.display = 'flex'; // Mostra o modal
    });

    closeButton.addEventListener('click', function() {
        pixModal.style.display = 'none'; // Esconde o modal
    });

    // Fechar o modal clicando fora dele
    window.addEventListener('click', function(event) {
        if (event.target == pixModal) {
            pixModal.style.display = 'none';
        }
    });

    // Inicializa o Clipboard.js para o botão de copiar
    if (copyButton) {
        const clipboard = new ClipboardJS(copyButton, {
            text: function(trigger) {
                return pixKeyElement.innerText; // Pega o texto da chave Pix
            }
        });

        clipboard.on('success', function(e) {
            alert('Chave Pix copiada!');
            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            alert('Erro ao copiar a chave Pix. Tente manualmente.');
        });
    }


    // Lógica para salvar contato (VCF)
    const saveContactButton = document.getElementById('saveContact');
    saveContactButton.addEventListener('click', function() {
        const firstName = "Eduardo"; // Substitua com seu nome
        const lastName = "Luparele"; // Substitua com seu sobrenome
        const tel = "+5521971292787"; // Seu telefone
        const email = "security@intalog.com.br"; // Seu email
        const organization = "Intalog"; // Sua empresa
        const title = "Coordenador Security"; // Seu cargo

        const vcard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
ORG:${organization}
TITLE:${title}
TEL;TYPE=CELL:${tel}
EMAIL;TYPE=INTERNET:${email}
URL:https://www.linkedin.com/in/eduardo-luparele-coelho-492851296/
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${firstName}_${lastName}_Contato.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Libera o URL do objeto
    });
});