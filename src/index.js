import '@/styles/index.scss';
import Header from "@/js/views/header";
import {render, RenderPosition} from "@/js/utils/render";
import Intro from "@/js/views/intro";
import Footer from "@/js/views/footer";
import Team from "@/js/views/team";
import Content from "@/js/views/content";
import Timeline from "@/js/views/timeline";

import MembersModel from "@/js/model/members";
import TeamPresenter from "@/js/presenter/team";
import Api from "@/js/api";
import Sprite from "@/js/views/sprite";

const api = new Api();

const root = document.querySelector('#root');

const membersModel = new MembersModel();

const spriteComponent = new Sprite();
const headerComponent = new Header();
const introComponent = new Intro(root);
const contentComponent = new Content();
const timelineComponent = new Timeline();
const teamComponent = new Team();
const footerComponent = new Footer();

const teamPresenter = new TeamPresenter(teamComponent, membersModel, api);

render(root, spriteComponent, RenderPosition.BEFOREEND);
render(root, headerComponent, RenderPosition.BEFOREEND);
render(root, introComponent, RenderPosition.BEFOREEND);
render(root, contentComponent, RenderPosition.BEFOREEND);
render(root, timelineComponent, RenderPosition.BEFOREEND);
render(root, teamComponent, RenderPosition.BEFOREEND);
render(root, footerComponent, RenderPosition.BEFOREEND);

teamPresenter.init();
headerComponent.init();
introComponent.init();




