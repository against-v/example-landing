import Abstract from "./abstract";
import logoImage from '@/images/logo.png';

const LINKS = [
  {
    url: '#',
    label: 'About us'
  },
  {
    url: '#',
    label: 'Gallery'
  },
  {
    url: '#',
    label: 'Crew'
  },
  {
    url: '#',
    label: 'Kontakt'
  },
];

const createHeaderTemplate = () => (
  `<header class="header">
    <nav class="header__nav nav">
      ${LINKS.map(item => `<a class="nav__item" href="${item.url}">${item.label}</a>`).join(``)}
    </nav>
    <div class="header__logo">
      <img src="${logoImage}" alt="Logo" class="logo">
    </div>
  </header>`
);

export default class Header extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
