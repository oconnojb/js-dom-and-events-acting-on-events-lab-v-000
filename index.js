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

function addNewElementAsLi() {
  let aule = $('ul.employee-list');
  aule.append($('<li>').text(retrieveEmployeeInformation()));
}

function addNewLiOnClick() {
  let btn = $('input')[1];
  console.log(btn)
}
