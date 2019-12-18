<template>
    
<section id="skill" class="skill">
    <div class="container">
        
      
        
    <!--클릭시 화면 출력-->
        <div class="row d-flex justify-content-center">
            
            <h2 class="header-text">My Skills</h2>
            
        </div>
        <div class="row d-flex justify-content-center">
        
        
                
            <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="languages-tab" data-toggle="tab" href="#languages" role="tab" aria-controls="languages" aria-selected="true">Languages</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="web-tab" data-toggle="tab" href="#web" role="tab" aria-controls="web" aria-selected="false">Web</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="db-tab" data-toggle="tab" href="#db" role="tab" aria-controls="db" aria-selected="false">Database</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="etc-tab" data-toggle="tab" href="#etc" role="tab" aria-controls="etc" aria-selected="false">Etc</a>
        </li>
      </ul>
      <div id="tab-Content" class="myTabcontent">
                    <div class="tab-pane fade show active" id="languages" role="tabpanel" aria-labelledby="languages-tab">
                        <div v-scrollanimation ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est, eos aliquam dignissimos facilis obcaecati modi, voluptates labore similique asperiores ex distinctio hic ullam laboriosam assumenda sapiente? Explicabo, suscipit ad?</p>
                    </div>
                    </div>
                    <div class="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est, eos aliquam dignissimos facilis obcaecati modi, voluptates labore similique asperiores ex distinctio hic ullam laboriosam assumenda sapiente? Explicabo, suscipit ad?</p>
                    </div>
                    </div>     
                    <div class="tab-pane fade" id="db" role="tabpanel" aria-labelledby="db-tab">
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est, eos aliquam dignissimos facilis obcaecati modi, voluptates labore similique asperiores ex distinctio hic ullam laboriosam assumenda sapiente? Explicabo, suscipit ad?</p>
                    </div>
                    </div>    
                    <div class="tab-pane fade" id="etc" role="tabpanel" aria-labelledby="etc-tab">
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est, eos aliquam dignissimos facilis obcaecati modi, voluptates labore similique asperiores ex distinctio hic ullam laboriosam assumenda sapiente? Explicabo, suscipit ad?</p>
                    </div>   
                          
                    </div>
                    
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



#skill{
    scroll-behavior: auto!important;
    
}
.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}
.enter { 
    opacity: 1;
    transform: translateY(0px);
}

</style>