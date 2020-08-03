var Name=document.getElementById('Name');
var Typeofasset = document.getElementById('Type of Asset');
var NameofAsset = document.getElementById('NameofAsset');
var Town = document.getElementById('Town/Village');
var District = document.getElementById('District');
var State = document.getElementById('State');
var Erosion = document.getElementById('issues');
var Cracks = document.getElementById('issues');
var Breakdowns = document.getElementById('issues');
var Leaks = document.getElementById('issues');
var Wateroverflow = document.getElementById('issues');

function myFunction() {
  var issues = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < issues.length; i++) {
    if (issues[i].checked) {
      txt = txt + issues[i].value + " ";
    }
  }
  document.getElementById("issues").value = "Your checked issues are: " + txt;
}

var Description = document.getElementById('Description');

var database = firebase.database();
var usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  var autoId = usersRef.push().key
  usersRef.child(autoId).set({
    Name: Name.value,
    Typeofasset: Typeofasset.value,
    NameofAsset: NameofAsset.value,
    Town: Town.value,
    District: District.value,
    State: State.value,
    Erosion: Erosion.value,
    Cracks: Cracks.value,
    Breakdowns: Breakdowns.value,
    Leaks: Leaks.value,
    Wateroverflow: Wateroverflow.value,
    Description:Description.value,

  });
});
    




