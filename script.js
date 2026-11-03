(() => {
  const shareButton = document.querySelector('#shareButton');
  const toast = document.querySelector('#toast');
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 3200);
  }

  // Saat alamat tautan belum diisi, jangan membuka halaman kosong.
  document.querySelectorAll('.link-card').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href') === '#') {
        event.preventDefault();
        showToast('Tautan belum diisi. Edit href pada index.html.');
      }
    });
  });

  async function copyText(value) {
    // Browser HTTPS modern
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
    // Fallback untuk beberapa browser lama
    const input = document.createElement('textarea');
    input.value = value;
    input.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(input);
    input.focus();
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    if (!copied) throw new Error('Tidak dapat menyalin');
  }

  shareButton.addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch (error) {
        // Pengguna menutup dialog share: tidak dianggap error.
        if (error.name === 'AbortError') return;
      }
    }
    try {
      await copyText(url);
      showToast('Alamat website berhasil disalin.');
    } catch (_) {
      showToast('Salin alamat website dari kolom URL browser.');
    }
  });
})();
