<template>
  <div id="app">
    
    <TopNavOne></TopNavOne>
    <div id="page-divider"></div>
    <Home></Home>
    <div id="page-divider"></div>
    <About></About>
    <div id="page-divider"></div>
    <skill></skill>
    <div id="page-divider"></div>
    <Port></Port>
    <div id="page-divider"></div>
    <Contact></Contact>
    <div id="page-divider"></div>
    <Scroll-top></Scroll-top>
    <FooterArea></FooterArea>
    <go-top></go-top>
  </div>
</template>

<script>
import AboutVue from './components/About.vue';
import ContactVue from './components/Contact.vue';
import FooterAreaVue from './components/FooterArea.vue';
import HomeVue from './components/Home.vue';
import PortVue from './components/Port.vue';
import ScrollTopVue from './components/ScrollTop.vue';
import SkillVue from './components/Skill.vue';
import TopNavOneVue from './components/TopNavOne.vue';


export default {
  components :{
    'About': AboutVue,
    'Contact': ContactVue,
    'FooterArea': FooterAreaVue,
    'Home': HomeVue,
    'Port': PortVue,
    'ScrollTop': ScrollTopVue,
    'Skill': SkillVue,
    'TopNavOne': TopNavOneVue
    
  }
}
</script>

<style>

</style>
