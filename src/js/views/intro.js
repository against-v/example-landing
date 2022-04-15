import Abstract from "./abstract";
import compassImage from '@/images/title/title-compass.png';

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

const ARTICLE = {
  date: "17 mai",
  title: "Headline Beitrag 2021",
  subtitle: "Subtitle",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos doloremque dolorum illo itaque maxime minima molestiae, porro voluptate! Veritatis?",
  img: "/assets/images/article.jpg"
};

const createNewsTemplate = (news) => {
  const trimmedItems = news.slice(0, 2);
  return (
    `<ul class="intro-container__news news-list">
      ${trimmedItems.map((item, index) => (
        `<li class="news-list__item">
          <a href="#" class="news">
            <p class="news__date">${item.date}</p>
            <h3 class="news__title">${item.title}</h3>
            <p class="news__text">${item.text}</p>
          </a>
        </li>`
      )).join("")}
    </ul>`
  );
};

const createArticleTemplate = (article) => (
  `<article class="intro-container__article article" style="background-image: url(${article.img})">
    <p class="article__date">${article.date}</p>
    <h3 class="article__title">${article.title}</h3>
    <h4 class="article__subtitle">${article.subtitle}</h4>
    <p class="article__text">${article.text}</p>
  </article>`
);

const newsTemplate = createNewsTemplate(NEWS);

const articleTemplate = createArticleTemplate(ARTICLE);

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
      ${newsTemplate}
      ${articleTemplate}
    </div>
    
  </section>`
);

export default class Intro extends Abstract {
  getTemplate() {
    return createIntroTemplate();
  }
}
