<template>
    <section id="home" class="home  bg-primary ">
    <div class="container">
        <div class="row d-flex">
            <div class="col-lg-6 text order-2 order-lg-1">
                <h1 class="home-title">Beginner Developer</h1>
                <p  class="home-text ">신입 개발자를 꿈꾸는 이창훈입니다.</p>
                <p class="home-text-mail">hoon3024@naver.com</p>
                
            </div>
            <div class="col-lg-6 order-1 order-lg-2 uk-scrollspy-inview uk-animation-slide-top" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">
                <img v-scrollanimation src="../assets/Home/Homehoon.jpg" alt="..." class="img-fluid-home">
                </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.home-text {
    font-size: 1.1rem;
    font-weight: 400;
    color: #fff;
}

.home-text-mail {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fff;
}

.home-title {
    font-size: 2.9rem;
    font-weight: 400;
    color: #fff;
    margin-top: 80px;
    line-height: 1.1;
}
.before-enter {
    
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
    .enter{
    opacity: 1;
    transform: translateX(0px);
}
.col-lg-6:hover{
    transition: 0.7s;
}
.col-lg-6:hover{
    transform: scale(1.1);  
}
</style>