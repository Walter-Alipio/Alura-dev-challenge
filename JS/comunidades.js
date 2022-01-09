import { likes } from "./components/likes.js";
import { menuMobile } from "./components/menuMobile.js";
import { CommunityPage } from "./components/makeCard.js";

menuMobile();
(() =>{
    // const community = document.querySelector('[data-comunidades]');
    // const sectionButtons = document.querySelector('[data-cartao-botoes]')
    // community.addEventListener('mouseenter', () => {
    //     sectionButtons.classList.remove('hide')
    // })
    // community.addEventListener('mouseleave', () => {
    //     sectionButtons.classList.add('hide')
    // })
  
    CommunityPage();
    likes();
})()