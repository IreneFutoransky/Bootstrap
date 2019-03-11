
function loaded(){
  
  familyTree();
}
   
function familyTree(){
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = ""
  
  for(var relative of relatives){
    
      var row = `<div class = 'row'>`;
                
      row +=  `<div class = 'col'>${relative.id}</div>`;
      row +=  `<div class = 'col'>${relative.name}</div>`;
      row +=  `<div class = 'col'>${relative.relation}</div>`;    
      row +=  `<div class = 'col'>${relative.birthdate}</div>`;    
      row += `</div>`;
     
     tbody.innerHTML += row;
     }
}