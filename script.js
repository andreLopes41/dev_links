function toggle_mode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");
    const btn = document.querySelector("#switch button");

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      img.setAttribute('src', './assets/avatar-light.png');
      btn.style.left = "0%";
      btn.style.transition = "0.4s";
    } else {
      html.classList.add('dark');
      img.setAttribute('src', './assets/avatar-dark.png');
      btn.style.left = "50%";
      btn.style.transition = "0.4s";
    }
}
