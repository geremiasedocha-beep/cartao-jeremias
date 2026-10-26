(() => {
  const contact = {
    name: 'Jeremias Filipe',
    phone: '+244926434994',
    email: 'edochageremiaspindi@gmail.com',
    title: 'Engenheiro Informático'
  };
  const qrEl = document.getElementById('qrcode');
  const fallback = document.getElementById('qrFallback');
  const qrUrl = document.getElementById('qrUrl');
  const toast = document.getElementById('toast');
  let toastTimer;

  function notify(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function renderQr() {
    const url = window.location.href.split('#')[0];
    document.getElementById('year').textContent = new Date().getFullYear();
    if (window.location.protocol === 'file:') {
      fallback.hidden = false;
      qrUrl.textContent = 'O QR definitivo será gerado após a publicação.';
      return;
    }
    if (typeof QRCode === 'undefined') {
      fallback.hidden = false;
      fallback.textContent = 'Não foi possível carregar o gerador de QR Code. Verifica a ligação à internet e atualiza a página.';
      return;
    }
    qrEl.innerHTML = '';
    new QRCode(qrEl, { text: url, width: 216, height: 216, colorDark: '#0b1f3a', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.H });
    qrUrl.textContent = new URL(url).host;
  }

  document.getElementById('saveContact').addEventListener('click', () => {
    const vcard = [
      'BEGIN:VCARD', 'VERSION:3.0',
      'FN:' + contact.name,
      'N:Filipe;Jeremias;;;',
      'TITLE:' + contact.title,
      'TEL;TYPE=CELL,VOICE:' + contact.phone,
      'EMAIL;TYPE=INTERNET:' + contact.email,
      'URL:' + window.location.href.split('#')[0],
      'END:VCARD'
    ].join('\r\n');
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jeremias-Filipe.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    notify('Ficheiro de contacto descarregado. Abre-o para guardar o contacto.');
  });

  document.getElementById('downloadQr').addEventListener('click', () => {
    const canvas = qrEl.querySelector('canvas');
    const image = qrEl.querySelector('img');
    let dataUrl = canvas ? canvas.toDataURL('image/png') : (image ? image.src : null);
    if (!dataUrl) {
      notify('Publica o cartão na Vercel e tenta novamente para gerar o QR Code definitivo.');
      return;
    }
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'QR-Jeremias-Filipe.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    notify('QR Code descarregado. Testa-o antes de partilhar.');
  });

  renderQr();
})();
