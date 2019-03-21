
$(document).ready(function() {
  $("form#infoinput").submit(function(event) {
    var age = $("input#age").val();
    var gender = $("select#gender").val();
    var medium = $("select#medium").val();
    var personality = $("select#personality").val();

  $("#result").show();

if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'action') && (medium === 'film') && (personality === 'aggressive')) {
  $('#darthvader').show();
}

else if (parseInt(age) >= 20 && ((gender === 'female') || (gender === 'male')) && (genre === 'adventure') && (medium === 'film') && ((personality === 'aggressive') || (personality === 'heroic'))) {
  $('#lukeskywalker').show();
}

else if (parseInt(age) >= 20 && ((gender === 'female') || (gender === 'male')) && (genre === 'comedy') && (medium === 'film') && ((personality === 'heroic') || (personality === 'sauve'))) {
  $('#hansolo').show();
}

else if (parseInt(age) >= 20 && (gender === 'female') && (genre === 'Drama') && (medium === 'film') && ((personality === 'aggressive') || (personality === 'diplomatic'))) {
  $('#princessleia').show();
}

else if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'adventure') && (medium === 'film') && ((personality === 'heroic') || (personality === 'diplomatic'))) {
  $('#captainpicard').show();
}

else if (parseInt(age) >= 20 && (gender === 'male') && (genre === 'adventure') && (medium === 'film') && ((personality === 'heroic') || (personality === 'sauve'))) {
  $('#captainkirk').show();
}

if (parseInt(age) < 20) {
  $('#sorry').show();
}

event.preventDefault();

});
});
