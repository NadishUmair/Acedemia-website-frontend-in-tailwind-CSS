
// const graduates=document.getElementById('graduates')

// function typenumber(element,number){
//     element.textContent=number;
// }

// function typenumbers(element,end){
//    var start=2900;
//    let currentnumber=start;
//    function typenextnumber(){
//      if(currentnumber <= end){
//         typenumber(element,currentnumber)
//         currentnumber++;
//         setTimeout(typenextnumber,2000);

//     }
//    }
//    typenextnumber();
// }


    const graduates = document.getElementById('graduates');
    
    function typenumber( element,number) {
        // number.textContent = number;
        element.textContent=number;
        // console.log('h3')
    }

    function typenumbers(element) {

         var start=2950;
         var end=3000;
        let currentNumber = start;

        function typenextnumber() {
            if (currentNumber <= end) {
                typenumber(element, currentNumber);
                currentNumber++;
                setTimeout(typenextnumber, 20); // Delay of 1 second
            }
        }

        typenextnumber();
    }
   typenumbers(graduates);


//    ############################## tutor #######################


   const tutors=document.getElementById('tutors');

   function countTutor(tutornumber,numbers){
    tutornumber.textContent=numbers;
   }

   function countTutors(tutornumber){
      var initial=270;
      var complete=320;
     let curentlength=initial;
     function nextnumber(){
        if(curentlength<=complete){
            countTutor(tutornumber,curentlength);
        curentlength++;
        setTimeout(nextnumber,20)
        }
     }
     nextnumber();
   }

   countTutors(tutors);

//    ######################## schedules ############################

const schedules=document.getElementById('schedules');

function typeschedule(scheduletext,num){
    scheduletext.textContent=num;

}

function schedulestype(scheduletext){
    var schedulestart=950;
    var scheduleEnd=1000;
    let currentschedule=schedulestart;
    function nextschedule(){
        if(currentschedule <= scheduleEnd){
            typeschedule(scheduletext,currentschedule)
            currentschedule++;
            setTimeout(nextschedule,20)
        }
    }
    nextschedule();
}

schedulestype(schedules);


// ####################### courses ######################


// window.addEventListener('scroll'){
//     var scrollposition=window.scrollY;
//     var triggerpostion=1000;
//     if(scrollposition >= triggerpostion){

//     }
// }
const courses=document.getElementById('courses');



function countCourses(element,numb){
 element.textContent=numb;
}


function typecourse(element){
    var startcourse=537;
    var endcourse=587;
    let currrentcourse=startcourse;
    function nextcourse(){
       if(currrentcourse <= endcourse ){
        countCourses(element,currrentcourse);
          currrentcourse++;
          setTimeout(nextcourse,20)

       }
    }
    nextcourse();
}

typecourse(courses);


// ################### slider ######################






