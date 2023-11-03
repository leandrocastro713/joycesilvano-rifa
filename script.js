let dezenasContainer = document.getElementById('dezenas');
let apostas = ['*****0102', '*****2020',,,,,,,'*****2587',,
              '*****0011',,,,,,,,,,
              ,,,,,,,,,,
              ,,,,,,'*****0037',,,,
              ,,,,,,,,,,
              ,,,,,,,,,'*****60',
              ,,,,,,,,,,
              ,,,,,,,,,,
              ,,,,,,,,,,
              '*****91',,,,,,,,,,
              '*****00']
  
for (let i = 1; i < 101; i++){
  let newDiv = document.createElement('div');
  let newNum = document.createElement('p');
  let newX = document.createElement('p');
  let newFone = document.createElement('p');
  let iStr = String(i);
  newNum.innerHTML =  iStr.slice(-2);
  
  newX.textContent = '';
  newFone.textContent = apostas[i-1];
  newDiv.appendChild(newNum);
  newDiv.appendChild(newX);
  newDiv.appendChild(newFone);
  newFone.className = 'fone';
  newDiv.className = 'circle';
  newNum.className = 'num';
  
  if (apostas[i-1] != null){ 
    newDiv.classList.add('vermelho') 
    newDiv.classList.remove('verde') 
  }
  else { 
    newDiv.classList.remove('vermelho')
    newDiv.classList.add('verde')
  };
  newDiv.addEventListener('onClick', ()=> ({ 'https://wa.me/5551998497549/?text=textourl e insira seu número de telefone' } ))
  dezenasContainer.className = 'numbers-container';
  dezenasContainer.append(newDiv);
} 

