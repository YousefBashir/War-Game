
function Charachter(name,strength,health){
    this.name=name;
    this.strength=strength;
    this.health=health;
    this.element=new UiElemnet(this.name);
}
function UiElemnet(name){
    this.attackBtn=document.querySelector(`.${name}-attack`);
    this.healthBtn=document.querySelector(`.${name}-health`);
    this.alive=document.querySelector(`.${name}-alive`)
    this.healthProgress=document.querySelector(`.${name}-health-ratio span`);
}
Charachter.prototype.attack=function(personAttacked){
    // this => naroto
    // personAttacked => sasaki
    if(personAttacked.health>0){
        personAttacked.health-=this.strength;
        personAttacked.element.healthProgress.style.width=`${personAttacked.health}%`;
    }
    else{
        personAttacked.element.attackBtn.remove();
        personAttacked.element.healthBtn.remove();
        personAttacked.element.alive.innerHTML=`${personAttacked.name} is died`
    }
    }
   
Charachter.prototype.status=function(){

}
Charachter.prototype.makeHealth=function(){
    if(this.health<100){
        this.health+=10;
        this.element.healthProgress.style.width=`${this.health}%`;
    }
    if(this.health>100){
        this.health=100;
    }
}
let nartoo= new Charachter('nartoo',10,100);
let sasaki= new Charachter('sasaki',10,100);

nartoo.element.attackBtn.addEventListener('click',function(){
    nartoo.attack(sasaki);
});
sasaki.element.attackBtn.addEventListener('click',function(){
    sasaki.attack(nartoo);
});
nartoo.element.healthBtn.addEventListener('click',function(){
    nartoo.makeHealth();
});
sasaki.element.healthBtn.addEventListener('click',function(){
    sasaki.makeHealth();
});