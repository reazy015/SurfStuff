const mobileMenu = document.querySelector('.nav-list');
const mobileMenuSwitchBtn = document.querySelector('.header-nav-toggle');
const logoImg = document.querySelector('.svg-logo');
const logoText = document.querySelectorAll('.header-logo__text')[0];
const decorHamburger = document.querySelectorAll('.header-nav-toggle__decor');

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

  function openCloseMenu(e){
    self.menu.classList.toggle('nav-list--active');
    showLogoText();
    showHideNavToggleBtn();
  }
}

new Menu(mobileMenuSwitchBtn, mobileMenu);
