const mobileMenu = document.querySelector('.nav-list');
const mobileMenuSwitchBtn = document.querySelector('.header-nav-toggle');
const logoImg = document.querySelector('.svg-logo');
const logoText = document.querySelectorAll('.header-logo__text')[0];
const decorHamburger = document.querySelectorAll('.header-nav-toggle__decor');
const ESC_KEYCODE = 27;

function Menu(btn, menu){
  const self = this;
  this.btn = btn;
  this.menu = menu;
  this.btn.addEventListener('click', openCloseMenu);

  function showHideNavToggleBtn(){
    decorHamburger.forEach( item => {
      item.classList.toggle('header-nav-toggle__decor--adaptive');
    })
  }

  function showLogoText(){
    logoImg.classList.toggle('svg-logo--active');
    logoText.classList.toggle('header-logo__text--active');
  }

  function closeByBtn(evt){
    if (self.menu.classList.contains('nav-list--active') && evt.keyCode === ESC_KEYCODE) {
      self.menu.classList.remove('nav-list--active');
      showLogoText();
      showHideNavToggleBtn();
      document.removeEventListener('keydown', closeByBtn);
    }
  }

  function openCloseMenu(){
    self.menu.classList.toggle('nav-list--active');
    showLogoText();
    showHideNavToggleBtn();
    document.addEventListener('keydown', closeByBtn);
  }
}

new Menu(mobileMenuSwitchBtn, mobileMenu);
