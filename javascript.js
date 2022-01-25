function buttonUpper() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function definirBotao() {
    if (window.scrollY === 0) {
        document.querySelector('.button-upper').style.display = 'none';
    } else {
        document.querySelector('.button-upper').style.display = 'block';
    }
}

window.addEventListener('scroll', definirBotao);

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const to = document.querySelector('#Gallery').offsetTop;
    const id = element.getAttribute('href');

    window.scroll({
        top: to - 100,
        behavior: "smooth"
    });
}

function botaoMenu() {
    let menu = document.querySelector('.nav-list');

    if (menu.style.display == 'flex') {
      menu.style.display= 'none';
    } else {
      menu.style.display = 'flex';
    }

  };