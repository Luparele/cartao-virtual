document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o Modal do Pix - COMENTADA
    /*
    const pixModal = document.getElementById('pixModal');
    const openPixQrButton = document.getElementById('openPixQr');
    const closeButton = document.querySelector('.close-button');
    const pixKeyElement = document.getElementById('pixKey'); // Onde a chave Pix será exibida
    const copyButton = document.querySelector('.copy-button'); // Botão de copiar

    // Verificar se o botão existe antes de adicionar o listener
    if (openPixQrButton) {
        openPixQrButton.addEventListener('click', function() {
            if (pixModal) { // Verificar se o modal existe antes de tentar exibi-lo
                pixModal.style.display = 'flex'; // Mostra o modal
            }
        });
    }

    // Verificar se o botão de fechar existe
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (pixModal) {
                pixModal.style.display = 'none'; // Esconde o modal
            }
        });
    }

    // Fechar o modal clicando fora dele
    if (pixModal) { // Verificar se o modal existe
        window.addEventListener('click', function(event) {
            if (event.target == pixModal) {
                pixModal.style.display = 'none';
            }
        });
    }

    // Inicializa o Clipboard.js para o botão de copiar
    if (copyButton && pixKeyElement) { // Verificar se ambos os elementos existem
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
    */ // Fim da lógica do Pix comentada


    // Lógica para salvar contato (VCF) - PERMANECE ATIVA
    const saveContactButton = document.getElementById('saveContact');
    
    // Verificar se o botão de salvar contato existe
    if (saveContactButton) {
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
    }
});
