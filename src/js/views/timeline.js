import Abstract from "./abstract";
import line from "@/images/timeline/timeline.png";
import photo1 from "@/images/timeline/1.jpg";

const createTimelineTemplate = () => (
  `<section class="timeline-container">
    <div class="timeline">
      <img class="timeline__line" src=${line} alt="Timeline">
      <div class="timeline__point timeline-point timeline-point_1">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
      <div class="timeline__point timeline-point timeline-point_2">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
      <div class="timeline__point timeline-point timeline-point_3">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
      <div class="timeline__point timeline-point timeline-point_4">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
      <div class="timeline__point timeline-point timeline-point_5">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
      <div class="timeline__point timeline-point timeline-point_6">
        <div class="timeline-point__img-container">
          <img src=${photo1} alt="Photo">
        </div>
      </div>
    </div>
  </section>`
);

export default class Timeline extends Abstract {
  getTemplate() {
    return createTimelineTemplate();
  }
}
