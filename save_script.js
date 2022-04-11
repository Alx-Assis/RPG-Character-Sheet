document.addEventListener('DOMContentLoaded',()=>{
let heroName=document.getElementById('heroName')
let heroImage=document.getElementById('heroImage')
let heroClasse=document.getElementById('heroClasse')


let hero=JSON.parse(localStorage.getItem('hero'))||{}



let btn=document.getElementById('save')
btn.addEventListener('click',()=>{
hero.heroN=heroName.value
hero.heroI=heroImage.src
hero.heroC=heroClasse.value


localStorage.setItem('hero',JSON.stringify(hero))
alert("Ficha Salva com sucesso")
})
heroName.value=hero.heroN
heroImage.src=hero.heroI
heroClasse.value=hero.heroC

})
