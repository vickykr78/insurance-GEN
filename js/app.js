// variables

const form =document.getElementById('request-quote');



// eventlisteners
function eventlisteners(){
    document.addEventListener('DOMContentLoaded', function(){

        // create the <options> for years
         
        const html =new HTMLUI();
        html.displayYears();
    });
// when the  form is submitted
    form.addEventListener('submit',function(e){
        e.preventDefault();
    // read the values from the FORM
    const make=document.getElementById('make').value;
    const year=document.getElementById('year').value;

    

    });
}


// objects
function HTMLUI() {}

// displays the latest 20 years in select
 HTMLUI.prototype.displayYears = function(){


    // max and min years
    const max = new Date().getFullYear(),
          min = max - 20;

        //   generate the list with the latest 20 years
        
    const selectYears =document.getElementById('year');

    // print the value
    for(let i=min; i<max; i++){
        const option = document.createElement('option');
        option.value = i;
        option.textContent =i;
        selectYears.appendChild(option);
    }
    
    console.log(min)

 }



