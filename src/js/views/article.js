import Abstract from "./abstract";
import {remove} from "@/js/utils/render";
import logoImage from '@/images/logo.png';

const BUTTONS = [
  {
    value: "close",
    title: "Close",
    icon: "close"
  },
  {
    value: "facebook",
    title: "Facebook",
    icon: "facebook"
  },
  {
    value: "twitter",
    title: "Twitter",
    icon: "twitter"
  }
];

const ARTICLE = {
  date: "23 MAI 2021",
  title: "lorem ipsum headline",
  subtitle: "lorem ipsum subtitle",
  content: [
    {
      type: "text",
      value: "<p style='font-size: 15px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores nemo voluptatem! Assumenda commodi, distinctio, dolor doloremque, error fuga iusto laudantium molestiae molestias natus neque nostrum nulla perferendis possimus quae quasi quia rerum saepe. Assumenda consectetur earum et illum molestiae. A accusantium ad alias consectetur, dolores eveniet ex excepturi fugit ipsa libero maxime necessitatibus nesciunt officia porro rem reprehenderit, sapiente vero. Accusamus ad ducimus optio voluptas! Esse hic porro ratione reiciendis rem voluptate! Atque autem earum eius fuga, ipsum iste magni minus molestiae nam, neque odit, placeat quaerat sapiente sunt temporibus vel voluptate! Dignissimos, expedita illo iure nihil sint vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ipsa quos suscipit. Beatae deserunt doloribus eius eligendi, et impedit incidunt, ipsum itaque laudantium magni odit omnis perferendis, placeat quas quibusdam reprehenderit sequi tempore tenetur voluptates voluptatibus! Accusantium alias ea enim facere vitae. Architecto assumenda consequatur deleniti deserunt dolor dolore earum error eveniet facilis fuga fugiat illo itaque laboriosam libero magni molestiae odit omnis pariatur praesentium, provident quae quis quisquam quos repellendus reprehenderit rerum similique sint tenetur veritatis voluptas. Aperiam commodi earum esse illum libero natus nesciunt numquam porro tempore veritatis? Beatae cum deleniti eaque iure iusto nisi, optio possimus. Accusamus alias at consequuntur corporis, ducimus eaque eum fugit hic illum ipsa iste itaque iusto labore maxime nihil officiis optio perferendis praesentium provident, quaerat, qui quod reiciendis reprehenderit similique tenetur ullam unde veniam veritatis vero voluptatibus. Accusantium assumenda atque ipsa laudantium, magni modi molestias nostrum nulla qui tempora. Facilis nesciunt nobis quidem voluptas. Alias assumenda earum impedit ipsa iusto molestias nobis optio porro provident quam, quisquam totam ut. Ab amet consequuntur dolore doloribus facilis magnam minus quam, qui repellendus sit unde veritatis voluptate! Consectetur dolor minima possimus ratione soluta! Ad aliquid aperiam cum, debitis dignissimos doloremque earum facere inventore minima perspiciatis quidem sed sequi tempore. Aut distinctio fugit illum incidunt ipsum maxime omnis velit. Ab accusamus adipisci aliquam amet aperiam aspernatur deleniti doloremque et eum fugiat, fugit id ipsam minima minus molestias neque nesciunt odit officia perspiciatis qui quia ratione rerum veniam. Aspernatur magni maxime nesciunt optio repellendus? Assumenda aut culpa cumque doloremque esse fugit nesciunt reprehenderit, ullam voluptatum! Ab deleniti rem totam veritatis. Asperiores culpa, ducimus earum et facere fugit id impedit ipsam modi nobis nulla pariatur quasi quidem quos sapiente sunt, vel voluptate voluptatem? Ab accusamus aliquam animi asperiores assumenda autem debitis dolorem doloribus eius error esse et ex facere in ipsam, iure labore molestiae nam neque nihil, quos repellat saepe, sit tempora temporibus vero voluptatum. Atque eum laudantium minima omnis sint. Ab ad aliquam aliquid architecto, consectetur consequatur cupiditate delectus dolores ducimus earum error eum facere id illo in inventore iste magni nam natus nisi nobis non numquam optio, perspiciatis possimus provident quae quam quibusdam quisquam ratione recusandae rerum sint soluta temporibus totam veniam vero? Ad consequatur fugit in porro quo sunt voluptatem voluptates! Labore, nisi, voluptate? Consectetur consequatur eligendi ex fuga itaque omnis quis repellendus rerum voluptatum. Architecto commodi doloremque esse eveniet expedita, incidunt magni quaerat voluptatum. Architecto aspernatur cum dolore dolorem earum error eveniet hic illo, maiores non reiciendis, sed vel, voluptatibus? Alias aspernatur assumenda autem commodi consequuntur corporis, culpa cumque cupiditate debitis dolores ea eos est eum explicabo facere facilis harum in iusto molestiae mollitia necessitatibus nesciunt nihil odio optio pariatur porro quidem quo quod quos, ratione rerum saepe sed, sequi tempora tempore velit voluptate? A aliquam consectetur dicta earum, error illum, nobis nulla odio, possimus rem repellat suscipit vitae voluptatum. Architecto facere facilis libero, nesciunt numquam obcaecati sint velit vero? Asperiores aspernatur, corporis dolores eius laudantium molestiae necessitatibus nemo non nostrum rem ut!</p>"
    },
    {
      type: "slider",
      value: [
        "https://dummyimage.com/600x400/362dd6/000000.jpg",
        "https://dummyimage.com/600x400/d4a52f/000000.jpg",
        "https://dummyimage.com/600x400/3b153b/000000.jpg",
        "https://dummyimage.com/600x400/153b28/000000.jpg",
        "https://dummyimage.com/600x400/c4b2c4/000000.jpg",
      ]
    },
    {
      type: "text",
      value: "<p style='font-size: 15px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores nemo voluptatem! Assumenda commodi, distinctio, dolor doloremque, error fuga iusto laudantium molestiae molestias natus neque nostrum nulla perferendis possimus quae quasi quia rerum saepe. Assumenda consectetur earum et illum molestiae. A accusantium ad alias consectetur, dolores eveniet ex excepturi fugit ipsa libero maxime necessitatibus nesciunt officia porro rem reprehenderit, sapiente vero. Accusamus ad ducimus optio voluptas! Esse hic porro ratione reiciendis rem voluptate! Atque autem earum eius fuga, ipsum iste magni minus molestiae nam, neque odit, placeat quaerat sapiente sunt temporibus vel voluptate! Dignissimos, expedita illo iure nihil sint vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ipsa quos suscipit. Beatae deserunt doloribus eius eligendi, et impedit incidunt, ipsum itaque laudantium magni odit omnis perferendis, placeat quas quibusdam reprehenderit sequi tempore tenetur voluptates voluptatibus! Accusantium alias ea enim facere vitae. Architecto assumenda consequatur deleniti deserunt dolor dolore earum error eveniet facilis fuga fugiat illo itaque laboriosam libero magni molestiae odit omnis pariatur praesentium, provident quae quis quisquam quos repellendus reprehenderit rerum similique sint tenetur veritatis voluptas. Aperiam commodi earum esse illum libero natus nesciunt numquam porro tempore veritatis? Beatae cum deleniti eaque iure iusto nisi, optio possimus. Accusamus alias at consequuntur corporis, ducimus eaque eum fugit hic illum ipsa iste itaque iusto labore maxime nihil officiis optio perferendis praesentium provident, quaerat, qui quod reiciendis reprehenderit similique tenetur ullam unde veniam veritatis vero voluptatibus. Accusantium assumenda atque ipsa laudantium, magni modi molestias nostrum nulla qui tempora. Facilis nesciunt nobis quidem voluptas. Alias assumenda earum impedit ipsa iusto molestias nobis optio porro provident quam, quisquam totam ut.</p>"
    }
  ]
};

const createArticleTemplate = (article) => (
  `<div class="article-wrapper">
    <div class="article-container">
      <div class="article-container__logo">
        <img src="${logoImage}" alt="Logo" class="logo">
      </div>
      <ul class="article-container__buttons article-buttons">
        ${BUTTONS.map(button => (
          `<li class="article-buttons__button">
            <button class="js-button article-button" title=${button.title}>
              <svg class="inline-svg-icon">
                <use xlink:href="#${button.icon}"></use>
              </svg>
            </button>
          </li>`
        )).join("")}
      </ul>
      <article class="article">
        <div class="article__header">
          <p class="article__date">${article.date}</p>
          <h2 class="article__title">${article.title}</h2>
          <h3 class="article__subtitle">${article.subtitle}</h3>
        </div>  
        <div class="article__content">
          ${article.content.map(item => {
            if (item.type === "slider") {
              return `SLIDER`;
            }
            return `${item.value}`;
          }).join("")}
        </div>
      </article>
    </div>
  </div>`
);
export default class Article extends Abstract {
  constructor(container) {
    super();
    this._container = container;
    this._buttons = [];
    this._buttonCloseClickHandler = this._buttonCloseClickHandler.bind(this);
    this._escKeydownHandler = this._escKeydownHandler.bind(this);
  }

  init() {
    this._hideBodyScroll();
    this._buttons = this.getElement().querySelectorAll(".js-button");
    this._buttons.forEach(button => button.addEventListener("click", this._buttonCloseClickHandler));
    document.addEventListener("keydown", this._escKeydownHandler);
  }

  getTemplate() {
    return createArticleTemplate(ARTICLE);
  }

  _getScrollWidth() {
    const div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
    const result = div.offsetWidth - div.clientWidth + "px";
    div.remove();
    return result;
  }

  _hideBodyScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = this._getScrollWidth();
  }

  _buttonCloseClickHandler() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.removeEventListener("keydown", this._escKeydownHandler);
    remove(this);
  }

  _escKeydownHandler(evt) {
    if (evt.keyCode === 27) {
      this._buttonCloseClickHandler();
    }
  }
}
