function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  let aule = $('input');
  let melko = aule[0].value;
  return melko;
}

function addNewElementAsLi(val) {
  
}
