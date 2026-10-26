# Cartão de visita digital — Jeremias Filipe

Site estático em HTML, CSS e JavaScript, pronto para publicação na Vercel.

## Funcionalidades
- Cartão responsivo para telemóvel e computador.
- Atalho para WhatsApp e chamada telefónica.
- Atalho de e-mail.
- Download de contacto no formato vCard (`.vcf`).
- QR Code gerado a partir do URL público do cartão e opção para descarregar em PNG.

## Publicar na Vercel via GitHub
1. Descompacta `cartao-jeremias.zip`.
2. Cria um repositório no GitHub, por exemplo `cartao-jeremias`.
3. Carrega `index.html`, `style.css`, `script.js` e `README.md` para a raiz do repositório.
4. Entra em https://vercel.com/ e inicia sessão com GitHub.
5. Escolhe **Add New → Project**, importa o repositório `cartao-jeremias` e seleciona **Deploy**.
6. Não precisas de configurar framework, build command ou output directory: deixa o projeto como site estático e publica.
7. Abre o URL atribuído pela Vercel. O QR Code será criado com esse URL. Testa-o com outro telemóvel e testa também o botão **Guardar contacto**.

## Alternativa sem GitHub
Na Vercel, verifica se a opção de importar/publicar por CLI está disponível na tua conta. O caminho recomendado para atualizações fáceis é ligar o repositório GitHub à Vercel.

## Personalização
Os dados de contacto estão no início de `script.js`. O texto visível e os links também aparecem em `index.html`; se alterares telefone, e-mail ou nome, atualiza ambos os ficheiros.

## Nota de privacidade
O cartão é público. Qualquer pessoa que tenha o link ou leia o QR Code poderá ver os dados apresentados. Publica apenas contactos que aceitas partilhar.
