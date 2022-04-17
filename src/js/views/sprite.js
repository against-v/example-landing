import Abstract from "./abstract";

const createSpriteTemplate = () => (
  `<div style="display: none">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <symbol id="close" viewBox="0 0 34 34">
        <g id="Group 2">
          <path id="Rectangle 8" class="s0" d="m7.8 2l24.2 24.2-5.8 5.8-24.2-24.2z"/>
          <path id="Rectangle 8" class="s0" d="m32 7.8l-24.2 24.2-5.8-5.8 24.2-24.2z"/>
        </g>
      </symbol>
      <symbol id="twitter" viewBox="0 0 40 34">
        <g id="Layer 1">
          <path id="&lt;Path&gt;" class="s0" d="m35.9 8.8q0 0.6 0 1.1c0 10.8-8.2 23.4-23.3 23.4-4.7 0-9-1.4-12.6-3.7q1 0.1 2 0.1c3.8 0 7.3-1.3 10.1-3.5-3.5-0.1-6.6-2.5-7.6-5.7q0.7 0.1 1.5 0.1 1.2 0 2.2-0.3c-3.8-0.7-6.6-4-6.6-8q0-0.1 0-0.1c1.1 0.6 2.4 1 3.7 1-2.2-1.5-3.6-4-3.6-6.8 0-1.5 0.4-2.9 1.1-4.2 4 5 10.1 8.3 16.9 8.6q-0.2-0.9-0.2-1.8c0-4.6 3.7-8.3 8.2-8.3 2.4 0 4.5 1 6 2.6 1.9-0.3 3.6-1 5.2-2-0.6 2-1.9 3.6-3.6 4.6q2.5-0.3 4.7-1.3c-1.1 1.6-2.5 3.1-4.1 4.2z"/>
        </g>
      </symbol>
      <symbol id="facebook" viewBox="-7 10 34 16">
        <path class="s0" d="m17.9 7.7h-3.1c-2.5 0-2.4 1.9-2.4 1.9v3.8h5.5l-0.9 4.6h-4.6v16h-6.9v-16h-3.5v-4.6h3.4c0 0 0-2.8 0-4.5 0-7.6 7.7-6.9 7.7-6.9h4.9z"/>
      </symbol>
    </svg>
  </div>`
);

export default class Sprite extends Abstract {
  getTemplate() {
    return createSpriteTemplate();
  }
}
