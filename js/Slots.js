function CreateSlot(tipo, src, titulo, descricao, autoplay = false) {
  const container = document.getElementById('portfolio-container');

  const col = document.createElement('div');
  col.className = "col-md-4 col-xs-6 wow fadeIn";
  col.setAttribute('data-wow-delay', "0.6s");

  const thumb = document.createElement('div');
  thumb.className = "portfolio-thumb";

  if (tipo.toLowerCase() === "video") {
    const video = document.createElement('video');
    video.className = "video-responsive";
    video.setAttribute('controls', '');
    video.setAttribute('loop', '');
    video.setAttribute('muted', '');

    if (autoplay) {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.controls = false
    }

    const source = document.createElement('source');
    source.src = src;
    source.type = "video/mp4";

    video.appendChild(source);
    thumb.appendChild(video);

  } else if (tipo.toLowerCase() === "imagem" || tipo.toLowerCase() === "image") {
    const img = document.createElement('img');
    img.src = src;
    img.className = "img-responsive";
    img.alt = "portfolio img";
    thumb.appendChild(img);
  }

  const overlay = document.createElement('div');
  overlay.className = "portfolio-overlay";

  const h4 = document.createElement('h4');
  h4.textContent = titulo;

  const h5 = document.createElement('h5');
  h5.textContent = descricao;

  overlay.appendChild(h4);
  overlay.appendChild(h5);
  thumb.appendChild(overlay);
  col.appendChild(thumb);
  container.appendChild(col);
}