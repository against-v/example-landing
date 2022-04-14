import '@/styles/index.scss';
import Header from "@/js/views/header";
import {render, RenderPosition} from "@/js/utils/render";


// Test import of a JavaScript module
import { example } from '@/js/example';

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg';
import Title from "@/js/views/title";
import Footer from "@/js/views/footer";
import Team from "@/js/views/team";
import Content from "@/js/views/content";


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


const root = document.querySelector('#root');

const headerComponent = new Header();
const titleComponent = new Title();
const contentComponent = new Content();
const teamComponent = new Team();
const footerComponent = new Footer();

const renderApp = () => {
  render(root, headerComponent, RenderPosition.BEFOREEND);
  render(root, titleComponent, RenderPosition.BEFOREEND);
  render(root, contentComponent, RenderPosition.BEFOREEND);
  render(root, teamComponent, RenderPosition.BEFOREEND);
  render(root, footerComponent, RenderPosition.BEFOREEND);
};
renderApp();
