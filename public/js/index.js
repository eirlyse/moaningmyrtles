$(document).ready(function () {
    // variables
    var jobTitle = $("#title");
    var salary = $("#salary");
    var serviceDog = $("#question1");
    var location = $("#location");
    var description = $("#desc");
    let jobTitleId =$("#title")
    let jobId =localStorage.getItem("jobId")

    
    // let jobId = localStorage.getItem("jobId");
    // event listners
    // $document.on("submit", "#form-group", handleFormGroupSubmit);

    // function handleFormGroupSubmit(event) {
    //     event.preventDefault();
    //     if (!title.val().trim().trim()) {
    //         return;
    //     }
    // }


    //     var API = {
    //   newPet: function(data) {

    //     console.log(data)
    //     return $.ajax({
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       type: "POST",
    //       url: "/api/pets",
    //       data: JSON.stringify(data)
    //     });
    //   }
    // })
    $(".form").on("submit", function (event) {

        event.preventDefault();
       
        console.log("sub")
        serviceDog = serviceDog.val();

        console.log(serviceDog)

        if (serviceDog === "Yes") {

            serviceDog = true;
        }

        else {

            serviceDog = false;
        }

        let newPetObj = {
            jobTitle: jobTitle.val(),
            salary: salary.val(),
            serviceQualification: serviceDog,
            location: location.val(),
            description: description.val()
            
            
            
        };

        $
            .post("/api/pets", newPetObj)
            .then(function (response) {
                console.log(response)

                //need to add thank you page///
                // $.get("/thankyou", function (data) {
                //  console.log(data)
                // })

                window.location.href = "/thankyou";



            })




    })

    var name = $("#nameApp");
    var ownerName = $("#ownerApp");
    var email = $("#emailApp");
    var serviceDogApp = $("#serviceApp");
    var descriptionApp = $("#descApp");
    


    $(".formApp").on("submit", function (event) {
       
        event.preventDefault();
        console.log("sub")
        serviceDogApp = serviceDogApp.val();

        console.log(serviceDogApp)

        if (serviceDogApp === "Yes") {

            serviceDogApp = true;
        }

        else {

            serviceDogApp = false;
        }

        let newAppObj = {
            name: name.val(),
            ownerName: ownerName.val(),
            email: email.val(),
            serviceQualification: serviceDogApp,
            description: descriptionApp.val()
            
            // jobId: jobTitleId
        };

        $
            .post("/api/petapps", newAppObj)
            .then(function (response) {
                console.log(response)

                //need to add thank you page///
                // render(response)
                // location.reload();
                window.location.href = "/thankyou"
            })









    })


    $(".apply").on("click", function () {
        event.preventDefault();

        // var listItem = $(this).parent("card").parent("card-body").parent("card-title");
        
        // console.log(listItem)
        console.log("clicked")
        
    // jobId = jobId
    // console.log(jobId);
            localStorage.setItem("jobId", jobTitleId)
            console.log(jobTitleId)
        window.location.href = "/apply"

        

    })




    // // Get references to page elements
    // var $exampleText = $("#example-text");
    // var $exampleDescription = $("#example-description");
    // var $submitBtn = $("#submit");
    // var $exampleList = $("#example-list");

    // // The API object contains methods for each kind of request we'll make
    // var API = {
    //   saveExample: function(example) {
    //     return $.ajax({
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       type: "POST",
    //       url: "api/examples",
    //       data: JSON.stringify(example)
    //     });
    //   },
    //   getExamples: function() {
    //     return $.ajax({
    //       url: "api/examples",
    //       type: "GET"
    //     });
    //   },
    //   deleteExample: function(id) {
    //     return $.ajax({
    //       url: "api/examples/" + id,
    //       type: "DELETE"
    //     });
    //   }
    // };

    // // refreshExamples gets new examples from the db and repopulates the list
    // var refreshExamples = function() {
    //   API.getExamples().then(function(data) {
    //     var $examples = data.map(function(example) {
    //       var $a = $("<a>")
    //         .text(example.text)
    //         .attr("href", "/example/" + example.id);

    //       var $li = $("<li>")
    //         .attr({
    //           class: "list-group-item",
    //           "data-id": example.id
    //         })
    //         .append($a);

    //       var $button = $("<button>")
    //         .addClass("btn btn-danger float-right delete")
    //         .text("ｘ");

    //       $li.append($button);

    //       return $li;
    //     });

    //     $exampleList.empty();
    //     $exampleList.append($examples);
    //   });
    // };

    // // handleFormSubmit is called whenever we submit a new example
    // // Save the new example to the db and refresh the list
    // var handleFormSubmit = function(event) {
    //   event.preventDefault();

    //   var example = {
    //     text: $exampleText.val().trim(),
    //     description: $exampleDescription.val().trim()
    //   };

    //   if (!(example.text && example.description)) {
    //     alert("You must enter an example text and description!");
    //     return;
    //   }

    //   API.saveExample(example).then(function() {
    //     refreshExamples();
    //   });

    //   $exampleText.val("");
    //   $exampleDescription.val("");
    // };

    // // handleDeleteBtnClick is called when an example's delete button is clicked
    // // Remove the example from the db and refresh the list
    // var handleDeleteBtnClick = function() {
    //   var idToDelete = $(this)
    //     .parent()
    //     .attr("data-id");

    //   API.deleteExample(idToDelete).then(function() {
    //     refreshExamples();
    //   });
    // };

    // // Add event listeners to the submit and delete buttons
    // $submitBtn.on("click", handleFormSubmit);
    // $exampleList.on("click", ".delete", handleDeleteBtnClick);

    // $("#registeredService").click(function () {

    // })
$("#nonregisteredService").on("click", function(){

    // $("#nonregisteredService").attr("value", true)
    // $("#registeredService").attr("value", false)
    window.location.href = "/joblistings/false"

    console.log("clicked")
})

$("#registeredService").on("click", function(){

    // $("#registeredService").attr("value", true)
    // $("#nonregisteredService").attr("value", false)
    window.location.href = "/joblistings/true"
    console.log("clicked")
})

$(".delete").on("click", function(event){


    
    var id = $(this).data("id");
 
    console.log(id)
    $.ajax("/api/pets/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          window.location.href = "/userposts"
        }
      );
  
 })





   
})