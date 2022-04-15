import '@/styles/index.scss';
import Header from "@/js/views/header";
import {render, RenderPosition} from "@/js/utils/render";


// Test import of a JavaScript module
// import { example } from '@/js/example';

// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg';
import Intro from "@/js/views/intro";
import Footer from "@/js/views/footer";
import Team from "@/js/views/team";
import Content from "@/js/views/content";

import MembersModel from "@/js/model/members";
import TeamPresenter from "@/js/presenter/team";
import Api from "@/js/api";


// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo
//
// const heading = document.createElement('h1')
// heading.textContent = example()
//
// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')
//
// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'
//
// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

const api = new Api();

const root = document.querySelector('#root');

const membersModel = new MembersModel();



const headerComponent = new Header();
const introComponent = new Intro();
const contentComponent = new Content();
const teamComponent = new Team();
const footerComponent = new Footer();

const renderApp = () => {
  render(root, headerComponent, RenderPosition.BEFOREEND);
  render(root, introComponent, RenderPosition.BEFOREEND);
  render(root, contentComponent, RenderPosition.BEFOREEND);
  render(root, teamComponent, RenderPosition.BEFOREEND);
  render(root, footerComponent, RenderPosition.BEFOREEND);
};
renderApp();

const teamPresenter = new TeamPresenter(document.querySelector(".team"), membersModel);
teamPresenter.init();

api.loadMembers()
  .then(res => {
    return res.json();
  })
  .then(data => {
    membersModel.setMembers('q', data.data.data);
  })
  .catch(error => {
    membersModel.setMembers('q',[]);
    console.error(error);
  });
