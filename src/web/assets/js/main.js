document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input#files');
    const btn = document.querySelector('button#submit');
    const message = document.querySelector('#message');

    const { upload } = getQueryParams();

    input.onchange = () => {
        if (input.files.length > 0) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    if (upload === 'true') {
        message.style.display = 'block';
        message.innerText = 'Arquivo carregado com sucesso!';

    } else if (upload === 'false') {
        message.style.display = 'block';
        message.innerText = 'Arquivo não foi carregado!';
    }
});

function getQueryParams() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}
