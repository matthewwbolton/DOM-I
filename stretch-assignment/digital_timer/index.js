let count = 0;
function addTen(){
    count += 10;
}

for (let count = 0; count <= 10000; count++){
    
}
const msTens = document.querySelector('msTens');
msTens.setInterval(addTen(), 10);
