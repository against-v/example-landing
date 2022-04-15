import Abstract from "./abstract";

const createContentTemplate = () => (
  `<section class="content-container">
    <article class="content">
      <div class="content__header">
        <h2 class="content__title">Headline - Lorem Ipsum</h2>
        <h3 class="content__subtitle">Subtitle Lorem Ipsum</h3>
      </div>
      <p class="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at eum libero officiis sint tempora temporibus velit. Eligendi magnam non officiis praesentium quidem rerum tempore ullam. Blanditiis, cum, sunt! Architecto deserunt dignissimos dolor eaque earum est eveniet fugiat iste mollitia, nobis nostrum obcaecati porro provident quae quia repellendus similique soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid, amet autem beatae, commodi corporis cum cumque debitis delectus deleniti ea eius eos error esse et facere illo illum mollitia officiis quae quia quo repudiandae rerum sequi sunt tenetur vitae voluptas, voluptate voluptatem. Assumenda, deleniti dicta facilis iusto, magnam maiores minus odio pariatur porro praesentium, quisquam reiciendis sed suscipit tenetur unde velit veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid, amet autem beatae, commodi corporis cum cumque debitis delectus deleniti ea eius eos error esse et facere illo illum mollitia officiis quae quia quo repudiandae rerum sequi sunt tenetur vitae voluptas, voluptate voluptatem. Assumenda, deleniti dicta facilis iusto, magnam maiores minus odio pariatur porro praesentium, quisquam reiciendis sed suscipit tenetur unde velit veritatis. Aliquam, amet aut incidunt minus nihil ratione repellendus sed unde vel veritatis! Ab alias, aliquid, culpa cumque dolorem doloremque eius esse expedita impedit inventore ipsum iure labore magnam, maiores maxime natus nesciunt perspiciatis quae rerum tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore maiores sint? Architecto delectus earum ipsam reprehenderit sed suscipit tempora!</p>
</article>
  </section>`
);

export default class Content extends Abstract {
  getTemplate() {
    return createContentTemplate();
  }
}
