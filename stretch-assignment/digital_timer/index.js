let count = 0;
function addTen(){
    count += 10;
}
const msTens = document.querySelector('msTens');
msTens.setInterval(addTen(), 10);
