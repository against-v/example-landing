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

const api = new Api();

const root = document.querySelector('#root');

const membersModel = new MembersModel();



const headerComponent = new Header();
const introComponent = new Intro();
const contentComponent = new Content();
const timelineComponent = new Timeline();
const teamComponent = new Team();
const footerComponent = new Footer();

const renderApp = () => {
  render(root, headerComponent, RenderPosition.BEFOREEND);
  render(root, introComponent, RenderPosition.BEFOREEND);
  render(root, contentComponent, RenderPosition.BEFOREEND);
  render(root, timelineComponent, RenderPosition.BEFOREEND);
  render(root, teamComponent, RenderPosition.BEFOREEND);
  render(root, footerComponent, RenderPosition.BEFOREEND);
};
renderApp();

const teamPresenter = new TeamPresenter(teamComponent, membersModel, api);
teamPresenter.init();


