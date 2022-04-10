document.addEventListener('DOMContentLoaded', ()=> {
  let heroFileImage = document.getElementById('heroFileImage')
  let heroImage = document.getElementById('heroImage')
  let btn = document.getElementById('btn')
  let bestial = document.getElementById('bestial-container')
  let name
  let path
  let bestiario = []
  let hero = []

  //criando dinamicamente
  let create = ()=> {
    let besta = document.createElement('div')
    besta.setAttribute('class', 'besta')

    let inputName = document.createElement('input')
    inputName.setAttribute('class', 'nameMoster')
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('id', 'inputName')
    inputName.onchange = ()=> {

    }
    let bestaImg = document.createElement('img')
    bestaImg.setAttribute('class', 'bestaImg')
    bestaImg.addEventListener('click', ()=> {

      let opt = confirm("DESEJA TROCAR A INAGEM?")
      
      if (opt) {
       inputFile.click()
      } else {}
    })

    let inputFile = document.createElement('input')
    inputFile.setAttribute('type',
      'file')
    inputFile.setAttribute('name',
      'image')
    inputFile.style.display = "none"

    let btnLoad = document.createElement('button')
    let txtBtnLoad = document.createTextNode('carregar')
    btnLoad.appendChild(txtBtnLoad)
    btnLoad.addEventListener('click',
      ()=> {
        inputFile.click()
        read(bestaImg, inputFile, btnLoad, bestiario)
      })


    let atr1 = document.createElement('div')
    atr1.setAttribute('class',
      'attrMoster')
    let spanAtr1 = document.createElement('span')
    spanAtr1.innerHTML = "Habilid."
    let inputAtr1 = document.createElement('input')
    inputAtr1.setAttribute('type',
      'number')
    inputAtr1.setAttribute('class',
      'inputMoster')

    atr1.appendChild(spanAtr1)
    atr1.appendChild(inputAtr1)


    let atr2 = document.createElement('div')
    atr2.setAttribute('class',
      'attrMoster')

    let spanAtr2 = document.createElement('span')
    spanAtr2.innerHTML = "Energia"
    let inputAtr2 = document.createElement('input')
    inputAtr2.setAttribute('type',
      'number')
    inputAtr2.setAttribute('class',
      'inputMoster')
    atr2.appendChild(spanAtr2)
    atr2.appendChild(inputAtr2)

    besta.appendChild(inputName)
    besta.appendChild(bestaImg)
    besta.appendChild(inputFile)
    besta.appendChild(btnLoad)
    besta.appendChild(atr1)
    besta.appendChild(atr2)



    bestial.appendChild(besta)
  }
  //criando dinamicamente






  heroFileImage.style.display = "none"

  //bestaFileImage.style.display = "none"


  btn.addEventListener('click',
    ()=> {
      heroFileImage.click()
      read(heroImage, heroFileImage, btn, hero)
    })


  function read(img, input, btn,
    data,
  ) {
    img.style.display = 'initial'
    input.addEventListener('change',
      ()=> {
        let file = input.files.item(0)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        btn.style.display = 'none'
        reader.onload = (e)=> {
          img.src = e.target.result


        }
      })
  }


  let btnSave = document.getElementById('save')
  let arr = []

  btnSave.addEventListener('click',
    ()=> {
      alert('ficha salva')
      
      console.log(document.getElementsByClassName('bestaImg'))
    })

  let addBesta = document.getElementById('addBesta')
  addBesta.addEventListener('click',
    ()=> {
      bestial.innerHTML = ""
      arr.push(1)
      arr.forEach((arr)=> {
        create()
      })


    })
})