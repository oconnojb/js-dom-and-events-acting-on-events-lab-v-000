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
  let a = $('input');
  let melko = a[0].value;
  a[0].value = '';
}

function addNewLiOnClick() {
  let btn = $('input')[1];
  btn.addEventListener('click', addNewElementAsLi());
}

function clearEmpLst() {
  let aule = $('ul.employee-list li');
  console.log(aule.length);
  for (var i = 0; i < aule.length; i++) {
    aule[i].remove();
  }
  console.log(aule.length);
  let melko = $('ul.employee-list');
  melko.clear();
}

function clearEmployeeListOnLinkClick() {
  let lnk = $('a')[0];
  lnk.addEventListener('click', clearEmpLst());
}
