import Abstract from "./abstract";
import twitterIcon from '@/images/icons/twitter.svg';
import facebookIcon from '@/images/icons/facebook.svg';

const SM_LINKS = [
  {
    url: '#',
    title: 'Twitter',
    icon: twitterIcon
  },
  {
    url: '#',
    title: 'Facebook',
    icon: facebookIcon
  },
];

const LINKS = [
  {
    url: '#',
    label: 'Impressum'
  },
  {
    url: '#',
    label: 'Datenschutz'
  },
  {
    url: '#',
    label: 'Rechtliches'
  },
  {
    url: '#',
    label: 'Copyright'
  },
];

const createHeaderTemplate = () => (
  `<footer class="footer">
    <p class="footer__copyright">© 2021. Segel-Team. Alle Rechte</p>
    <ul class="footer__sm sm">
      ${SM_LINKS.map(item => (
        `<li class="sm__item">
          <a href=${item.url} class="sm__link" title=${item.title}><img src=${item.icon} alt=${item.title}></a>
        </li>`
      )).join("")}
    </ul>
    <ul class="footer__nav footer-nav">
    ${LINKS.map(item => (
      `<li class="footer-nav__item">
        <a href=${item.url} class="footer-nav__link">${item.label}</a>
      </li>`
    )).join("")}
    
</ul>
  </footer>`
);

export default class Footer extends Abstract {
  getTemplate() {
    return createHeaderTemplate();
  }
}
