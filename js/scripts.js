(document).ready(function() {

  $("form").submit(function(event) {
    //exapmles from radio buttons project
    // var gender = $('input:radio[name=gender]:checked').val();
    // var color = $('input:radio[name=color]:checked').val();

    var temp = document.getElementById("temp"); //do i do this or something like the next line down?
    var precipitation = $('option').val();
    var interaction = $('option').val();

    console.info(temp); //checking for erros before loop
    console.info(precipitation);
    console.info(interaction);


    if (temp =="hot" && precipitation =="rain" && people =="people") {
      suggestion == "Hawaii"
    } else if (temp =="hot" && precipitation =="rain" && interaction =="nopeople") {
      suggestion == "The Amazon Rainforest"
    } else if (temp =="hot" && precipitation =="norain" && interaction =="people") {
      suggestion =="Egypt"
    } else if (temp =="hot" && precipitation =="norain" && interaction =="nopeople") {
      suggestion =="The Sahara Desert"
    } else if (temp =="cold" && precipitation =="rain" && interaction =="people") {
      suggestion =="Seattle"
    } else if (temp =="cold" && precipitation =="rain" && interaction =="nopeople") {
      suggestion =="The west coast of Scotland"
    } else if (temp =="cold" && precipitation =="norain" && interaction =="people") {
      suggestion =="Russia"
    } else if (temp =="cold" && precipitation =="norain" && interaction =="nopeople") {
      suggestion =="Alaska"
    }


    console.info(suggestion); //checking for errors after loop before output
    $("outputSuggestion").text("You should visit " + suggestion);

    event.preventDefault();
  }
});
