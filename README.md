# A.R.H. Mini Site — GitHub Pages

Mini site responsif yang dibuat dengan HTML, CSS vanilla, dan JavaScript native.

## Upload ke GitHub Pages

1. Buka repository `USERNAME.github.io` (ganti USERNAME dengan username GitHub Anda).
2. Unggah `index.html`, `style.css`, `script.js`, dan folder `assets` beserta file `avatar.png` ke **root** repository. File README ini opsional.
3. Buka **Settings → Pages → Build and deployment**.
4. Pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu klik **Save**.
5. Lihat status deployment di tab **Actions**, dan setelah berhasil buka `https://USERNAME.github.io`.

## Memasukkan URL tujuan

Semua judul sudah ada, tetapi URL tujuan tidak diberikan sehingga masih berisi `href="#"`.

Edit `index.html` dengan mengganti setiap `href="#"` menjadi tautan yang benar, misalnya:

```html
<a class="link-card" href="https://www.example.org" target="_blank" rel="noopener noreferrer">
```

Ketika URL belum diganti, situs akan menampilkan pesan yang menjelaskan bahwa tautan belum diisi. Jangan lupa commit perubahan.

## Kustomisasi

- Ganti nama **A.R.H.** di `index.html`.
- Ganti foto di `assets/avatar.png` (pertahankan nama file) atau ubah jalurnya pada tag `<img>`.
- Edit teks kartu langsung pada `index.html`.
- Edit warna melalui variabel `--outer`, `--panel`, `--card` pada `style.css`.
- Share button memakai Web Share API jika tersedia, lalu fallback ke clipboard.

## Catatan

- File ini dapat dijalankan secara statis dan cocok untuk GitHub Pages.
- Tidak memerlukan npm, Node.js, Tailwind, atau CDN.
- GitHub Pages tidak menjalankan backend; semua fitur situs ini berjalan di browser.
