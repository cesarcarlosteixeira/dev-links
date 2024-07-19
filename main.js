function toggle() {
  const html = document.documentElement;
  const isLight = html.classList.toggle('light');
  const img = document.querySelector('#profile img');

  if (isLight) {
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  }
}
