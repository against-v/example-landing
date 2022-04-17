import Abstract from "./abstract";
import compassImage from '@/images/title/title-compass.png';
import {render, RenderPosition} from "@/js/utils/render";
import Article from "@/js/views/article";

const NEWS = [
  {
    date: "21 mai 2021",
    title: "News 1 headline",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?"
  },
  {
    date: "21 mai 2021",
    title: "News 2 headline",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?"
  },
  {
    date: "21 mai 2021",
    title: "News 3 headline",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?"
  },
  {
    date: "21 mai 2021",
    title: "News 4 headline",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?"
  },
];

const ARTICLE_PREVIEW = {
  date: "17 mai",
  title: "Headline Beitrag 2021",
  subtitle: "Subtitle",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?",
  img: "/assets/images/article.jpg"
};

const createNewsPreviewTemplate = (news) => {
  const trimmedItems = news.slice(0, 2);
  return (
    `<ul class="intro-container__news news-list">
      ${trimmedItems.map((item, index) => (
        `<li class="news-list__item">
          <a href="#" class="news-preview js-news-preview">
            <p class="news-preview__date">${item.date}</p>
            <h3 class="news-preview__title">${item.title}</h3>
            <p class="news-preview__text">${item.text}</p>
          </a>
        </li>`
      )).join("")}
    </ul>`
  );
};

const createArticlePreviewTemplate = (article) => (
  `<article class="intro-container__article article-preview" style="background-image: url(${article.img})">
    <p class="article-preview__date">${article.date}</p>
    <h3 class="article-preview__title">${article.title}</h3>
    <h4 class="article-preview__subtitle">${article.subtitle}</h4>
    <p class="article-preview__text">${article.text}</p>
  </article>`
);

const newsPreviewTemplate = createNewsPreviewTemplate(NEWS);

const articlePreviewTemplate = createArticlePreviewTemplate(ARTICLE_PREVIEW);

const createIntroTemplate = () => (
  `<section class="intro-container">
    <div class="intro-container__intro intro">
      <h1 class="intro__title">Lorem ipsum dolor sit</h1>
      <h2 class="intro__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio</h2>
      <div class="intro__compass">
        <img src="${compassImage}" alt="Compass">
      </div>
    </div>
    <div class="intro-container__bottom-panel">
      ${newsPreviewTemplate}
      ${articlePreviewTemplate}
    </div>
    
  </section>`
);

export default class Intro extends Abstract {
  constructor(container) {
    super();
    this._linkClickHandler = this._linkClickHandler.bind(this);
    this._links = [];
    this._container = container;
  }

  init() {
    this._links = this.getElement().querySelectorAll(".js-news-preview");
    this._setLinkClickHandler();
  }

  getTemplate() {
    return createIntroTemplate();
  }

  _setLinkClickHandler() {
    this._links.forEach(link => link.addEventListener("click", this._linkClickHandler));
  }

  _linkClickHandler(evt) {
    evt.preventDefault();
    const article = new Article(this._container);
    article.init();
    render(this._container, article, RenderPosition.BEFOREEND);
  }
}
