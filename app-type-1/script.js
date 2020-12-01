// Select Elements

let number_of_courses_input_div = document.querySelector('.number-of-courses-input-div');
let number_of_courses_input_box = document.querySelector('#number-of-courses-input-box');
let submit_number_of_courses_button = document.querySelector('.submit-number-of-courses-button');
let number_of_courses_input_box_error_text = document.querySelector('.num-input-error-text');

let number_of_courses = null;
var course_input_elements = [];

// Listen for click on next button
submit_number_of_courses_button.onclick = function(e){
    validateNumInput(number_of_courses_input_box);
    loopAndCreateVariousInputs(number_of_courses);
}


// Listen for enter keypress
number_of_courses_input_box.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        validateNumInput(this);
        loopAndCreateVariousInputs(number_of_courses);
    }
})

// Do some actions when user is typing in numInput box
number_of_courses_input_box.oninput = function(){
    if( Number(this.value) > this.max){
        setTimeout(function(){
            number_of_courses_input_box.value = '';
        }, 400);
        showErrorMsgforNumberofCoursesInputBox(number_of_courses_input_box_error_text, number_of_courses_input_box);
    }
}



//  MAIN-CONTROL FUNCTIONS HERE

function validateNumInput(input_box){
    let numerical_input_value = Number(input_box.value)
    let length_of_input = numerical_input_value.toString().length;
    if (numerical_input_value > input_box.max || length_of_input > input_box.maxlength ){
        showErrorMsgforNumberofCoursesInputBox(number_of_courses_input_box_error_text, number_of_courses_input_box);
    }
    else if (input_box.value.length == 0){
        showErrorMsgforNumberofCoursesInputBox(number_of_courses_input_box_error_text, number_of_courses_input_box);
    }
    else if (numerical_input_value > input_box.max || numerical_input_value < input_box.min){
        showErrorMsgforNumberofCoursesInputBox(number_of_courses_input_box_error_text, number_of_courses_input_box);
    }
    else{
        number_of_courses = numerical_input_value;
        slideElementsParentsDivLeft(input_box);
    }
}






//  SUB-CONTROL FUNCTIONS HERE

// Create boxes to collect input based on no. of courses
function loopAndCreateVariousInputs(num){
    for(let i = 1; i <= num; i++ ){
        course_input_elements.push(i);
    }
}


function slideElementsParentsDivLeft(elem_par_div){
    elem_par_div.parentElement.classList.add('slide-left-div');
    setTimeout(function(){
        elem_par_div.parentElement.style.display = 'none';
    },2000);
}

function showErrorMsgforNumberofCoursesInputBox(error_text, num_input){
    error_text.classList.add('makeMeVisible');
    num_input.classList.add('numInput-on-error-state');
    removeVisibility(error_text);
    hideElementonOutsideClick(error_text);
}

function hideElementonOutsideClick (element){
    document.onclick = function(event){
        if(event.target !== element){
            removeClasslist(element, 'makeMeVisible');
            removeBorderErrorColour(number_of_courses_input_box);
        }
    }
}

function removeClasslist(specified_element, css_class){
    specified_element.classList.remove(css_class);
}

function removeBorderErrorColour(num_input){
    num_input.classList.remove('numInput-on-error-state');
}

function removeVisibility(element){
    setTimeout(function(){
        removeClasslist(element, 'makeMeVisible');
        removeBorderErrorColour(number_of_courses_input_box);
    }, 4000);
}