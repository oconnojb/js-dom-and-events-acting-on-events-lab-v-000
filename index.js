function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  console.log('start!');
  let aule = $('input');
  console.log(aule[0].value);
}
