export function darkTheme() {
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';
  const logoImg = document.getElementById('logo');
  const loader = document.getElementById('loader')

  const selectedTheme = window.localStorage.getItem('selected-theme');
  const selectedIcon = window.localStorage.getItem('selected-icon');
  const selectedLogo = window.localStorage.getItem('selected-logo');
  const selectedLoader = window.localStorage.getItem('selected-loader');

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';
  const getCurrentLogo = () => document.body.classList.contains(darkTheme) ? './assets/img/logodark.png' : './assets/img/logo.png';
  const getCurrentLoader = () => document.body.classList.contains(darkTheme) ? './assets/img/loaderdark.png' : './assets/img/loaderblank.png';


  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
    logoImg.src = selectedLogo;
    loader.src = selectedLoader;
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    logoImg.src = getCurrentLogo();
    loader.src = getCurrentLoader();
    window.localStorage.setItem('selected-theme', getCurrentTheme());
    window.localStorage.setItem('selected-icon', getCurrentIcon());
    window.localStorage.setItem('selected-logo', getCurrentLogo());
    window.localStorage.setItem('selected-loader', getCurrentLoader());
  });
}
