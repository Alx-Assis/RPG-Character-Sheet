document.addEventListener('DOMContentLoaded',()=>{
let heroName=document.getElementById('heroName')
let heroImage=document.getElementById('heroImage')
let heroClass=document.getElementById('heroClasse')

let hero={
  heroN:heroName.value,
  heroI:heroImage.src,
  heroC:heroClasse.value
}
hero=JSON.parse(localStorage.getItem('hero'))||[]

let btn=document.getElementById('save')
btn.addEventListener('click',(e)=>{
hero.heroN=heroName.value
hero.heroI=heroImage.src
hero.heroC=heroClasse.value
console.table(hero)

localStorage.setItem('hero',JSON.stringify(hero))
alert("Ficha Salva com sucesso")
})

heroClasse.value=hero.heroC
heroImage.src=hero.heroI
heroName.value=hero.heroN

})
