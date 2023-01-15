function calcular(){
    /*  
     var vl = document.querySelector('id.vl') = 30
     
     var vc = document.querySelector('vc') = 40
     
     var va = document.querySelector('va')
     va = 60
     var vtr = document.querySelector('vtr')
     vtr = 80
     var rpd = document.querySelector('rpd')
     rpd = 110 

      var lmtvel = 0
     
     if(oper == "vl"){
          lmtvel = 30;
     } else {
         if(oper =="vc"){
            lmtvel = 40;
     
     } 
     */
    
     var txtv = window.document.querySelector('input#txtvel')
     var res = window.document.querySelector('div#res')
     var vel = Number(txtv.value)
     var lmtvl = document.getElementById('vl')
     var lmtvc = document.getElementById('vc')
     var lmtva = document.getElementById('va')
     var lmtvtr = document.getElementById('vtr')
     var lmtrpd = document.getElementById('rpd')
     var oper = document.getElementById('oper')
     
 
     lmtvl = 30
     lmtvc = 40
     lmtva = 60
     lmtvtr = 80
     lmtrpd = 110

     var lmtvel = 0
     
     

     
     
     switch ('oper'){
        case 'vl':
            lmtvel = lmtvl
            break
        case 'vc':
            lmtvel = lmtvc
            break
        case 'va':
            lmtvel = lmtva    
            break


     }
     

     res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
     if(vel > lmtvel){
         res.innerHTML += `<p>Você está <strong> MULTADO </strong>por excesso de velocidade!</p>`
     }
     res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p> `

 }     
