let dezenasContainer = document.getElementById('dezenas');
let apostas = ['111112003',,,'111112336','111112009',,'111111212','111119558',,,
               ,,,,,,'111115556',,,,
               ,,,,,,,,'111116458',,
               ,,'111112588',,,,,,'111115252',,
               ,,,,,'111119099',,'11118901',,,
               '11118785',,'111119877','111115888',,,,,,,
               ,,,,'111119665','11119665','11119665',,,,
               ,,'111110005',,,,,,,'111119099',
               ,,'111112511',,,,,'981166773',,,
               ,,,,,,'111110100',,'111112223',,]

let nomes = [ 'N',,,'N','N',,'N','N',,,
              ,,,,,,'N',,,,
              ,,,,,,,,'N',,
              ,,'N',,,,,,'N',,
              ,,,,,'N',,'N',,,
              'N',,'N','N',,,,,,,
              ,,,,'N','N','N',,,,
              ,,'N',,,,,,,'N',
              ,,'N',,,,,'Elizete Marques',,,
              ,,,,,,'N',,'N',,
]  
for (let i = 1; i < 101; i++){
  let newDiv = document.createElement('a');
  let newNum = document.createElement('p');
  let newX = document.createElement('p');
  let newFone = document.createElement('p');
  let iStr = String(i);
  iStr = iStr.slice(-2);
  newNum.innerHTML =  iStr.slice(-2);
  newFone.textContent =  apostas[i-1]
  
  newX.textContent = '';
  newDiv.appendChild(newNum);
  newDiv.appendChild(newX);
  newDiv.appendChild(newFone);
  //console.log(newDiv)
  newFone.className = 'fone';
  newDiv.className = 'circle';
  newNum.className = 'num';
  
  if (apostas[i-1] != null){ 
    newDiv.classList.add('vermelho') 
    newDiv.classList.remove('verde')
    newFone.textContent = '*****' + apostas[i-1].slice(-4) 
  }
  else { 
    newDiv.classList.remove('vermelho')
    newDiv.classList.add('verde')
    newDiv.setAttribute('href', 'https://wa.me//5551998497549?text=Tenho%20interesse%20em%20comprar%20o%20número%20'+iStr+'%20da%20rifa.')
    newDiv.setAttribute('target', '_blank')
    };
  // newDiv.addEventListener('onClick', ()=> ({ 'https://wa.me/5551998497549/?text=textourl e insira seu número de telefone' } ))

  dezenasContainer.className = 'numbers-container';
  dezenasContainer.append(newDiv);
} 

function pixPaid(){
  navigator.clipboard.writeText('00020126670014br.gov.bcb.pix0125joyce_silvano@hotmail.com0216Rifa Tratamento 520400005303986540510.005802BR5925JOYCE BEATRIZ DOS SANTOS 6009SAO PAULO62070503***63042804').then(()=>alert('Texto copiado para a Area de Transferência. Agora é só colar no seu aplicativo em que faz o PIX.'))
}