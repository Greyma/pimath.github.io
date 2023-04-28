    const Btn= document.querySelector('.LogoMenu')
    const DropDownMenu= document.querySelector('.menu')
    const BtnIcon = document.querySelector('.Logo2 i')
    const sectionbtn = document.querySelector('.MenuMenu')

    Btn.onclick = function(){
        DropDownMenu.classList.toggle('open')
        sectionbtn.classList.toggle('open')
        const isOpen =  DropDownMenu.classList.contains('open')
        if (BtnIcon.classList = isOpen)
        BtnIcon.classList='fa fa-sort-desc'
        else 
        BtnIcon.classList='fa fa-bars'
    }
    
   
    sectionbtn.onclick = function () {
        const isOpen =  DropDownMenu.classList.contains('open')
        if (BtnIcon.classList = isOpen)
            DropDownMenu.classList.toggle('open')
        BtnIcon.classList='fa fa-bars'
        sectionbtn.classList.toggle('open')
    }