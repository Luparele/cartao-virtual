# Cartão de Visita Virtual

Este é um projeto de cartão de visita virtual, desenvolvido para facilitar o compartilhamento de informações de contato de forma rápida, elegante e responsiva. O projeto inclui botões para envio de mensagens via WhatsApp, ligação direta, e-mail, redes sociais e a funcionalidade de salvar os dados diretamente na agenda do celular (formato VCF).

## Como Personalizar o Cartão

Você pode alterar os dados principais do cartão facilmente editando os arquivos do projeto. Abaixo, detalhamos como fazer cada alteração.

### 1. Alterar Nome e Cargo

Para mudar o nome e o cargo que aparecem no topo do cartão:
1. Abra o arquivo `index.html` em um editor de texto ou de código.
2. Procure pelas seguintes linhas (próximo à linha 20):
   ```html
   <h1>Eduardo Luparele</h1>
   <p>Coordenador Securitário</p>
   ```
3. Substitua "Eduardo Luparele" e "Coordenador Securitário" pelos dados desejados.

### 2. Alterar Informações de Contato (Botões Principais)

Os botões de contato principais (WhatsApp, Ligar, E-mail, LinkedIn) também estão no arquivo `index.html`:
1. Abra o arquivo `index.html`.
2. Procure pela seção `<main class="button-container">` (próximo à linha 28).
3. Para alterar o **WhatsApp**:
   ```html
   <a href="https://wa.me/5521971292787" target="_blank" class="button whatsapp-button">
   ```
   Troque `5521971292787` pelo número de telefone desejado, mantendo o código do país (`55` para o Brasil) e o DDD.

4. Para alterar a função **Ligar**:
   ```html
   <a href="tel:+5521971292787" class="button primary-button">
   ```
   Altere o número após `tel:`.

5. Para alterar o **E-mail**:
   ```html
   <a href="mailto:security@intalog.com.br" class="button email-button">
   ```
   Altere o endereço de e-mail após `mailto:`.

6. Para alterar o **LinkedIn**:
   ```html
   <a href="https://www.linkedin.com/in/seu-perfil/" target="_blank" class="button social-button linkedin">
   ```
   Substitua a URL pela do seu perfil do LinkedIn.

### 3. Alterar as Redes Sociais do Rodapé

Para alterar os ícones discretos das redes sociais que ficam no final da página:
1. Abra o arquivo `index.html`.
2. Vá até a seção final, dentro de `<footer class="footer">`.
3. Procure a `<div class="intalog-socials">`.
4. Você encontrará links como o exemplo abaixo:
   ```html
   <a href="https://intalog.com.br/" target="_blank" title="Página Oficial"><i class="fas fa-globe"></i></a>
   ```
5. Basta alterar o endereço `href="..."` de cada link para apontar para a sua respectiva rede social.

### 4. Atualizar o Arquivo de Salvar Contato (VCF)

A função "Salvar Contato" gera um arquivo `.vcf` (vCard) com suas informações, que o celular reconhece e adiciona à agenda automaticamente. Para personalizar esses dados:
1. Abra o arquivo `script.js`.
2. Procure pela seção `// Lógica para salvar contato (VCF) - PERMANECE ATIVA` (próximo à linha 107).
3. Localize as variáveis de contato (entre as linhas 113 e 118):
   ```javascript
   const firstName = "Eduardo"; // Substitua com o seu nome
   const lastName = "Luparele"; // Substitua com o seu sobrenome
   const tel = "+5521971292787"; // Seu telefone
   const email = "security@intalog.com.br"; // Seu email
   const organization = "Intalog"; // Sua empresa
   const title = "Coordenador Securitário"; // Seu cargo
   ```
4. Altere os valores entre as aspas `""` com as suas novas informações. A URL do LinkedIn do vCard é gerada um pouco mais abaixo (na linha 128 do arquivo), a qual você pode atualizar substituindo a URL na propriedade `URL:` dentro do literal de string (`vcard`).

---
> **Dica:** Sempre que atualizar as informações nestes arquivos e salvá-los, não esqueça de realizar um `commit` e um `push` para que as mudanças reflitam no GitHub Pages.
