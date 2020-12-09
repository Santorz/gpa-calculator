// Select Elements

let number_of_courses_input_div = document.querySelector('.number-of-courses-input-div');
let number_of_courses_input_box = document.querySelector('#number-of-courses-input-box');
let submit_number_of_courses_button = document.querySelector('.submit-number-of-courses-button');
let number_of_courses_input_box_error_text = document.querySelector('.num-input-error-text');
let app_control_section_div = document.querySelector('.app-control-section-div')


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
        loopAndCreateVariousInputs(Number(number_of_courses));
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

    // Create form to hold all submission items
    let course_details_form = document.createElement('form');
    course_details_form.className = 'course-details-form'

    // Create div for each course input details
    let course_details_input_div = document.createElement('div');
    course_details_input_div.className = 'course-details-input-div';

    // Create Submit button div and button
    let course_details_submit_button_div = document.createElement('div');
    course_details_submit_button_div.className = 'course-details-submit-button-div';
 
    let course_details_submit_button = document.createElement('input');
    course_details_submit_button.className = 'course-details-submit-button';
    course_details_submit_button.type = 'submit';
    course_details_submit_button.innerHTML = 'SUBMIT';
 
    course_details_submit_button_div.appendChild(course_details_submit_button);


    for(let i = 1; i <= num; i++ ){

        // Create input elements for course code

        // Create course code input div
        let course_code_input_div = document.createElement('div');
        course_code_input_div.className = 'course-code-input-div';
        course_code_input_div.id = 'course-' + i + '-code-input-div';

        // Create course header
        let course_header_div = document.createElement('div');
        let course_header = document.createElement('h2');
        course_header.textContent = 'Course ' + i;
        course_header_div.appendChild(course_header);
        course_code_input_div.appendChild(course_header_div);

        // Create div for course entry
        let course_entry_div = document.createElement('div');
        course_entry_div.className = 'course-entry-div';

        // Create sub-div for course entry
        let sub_course_entry_div_1 = document.createElement('div');
        sub_course_entry_div_1.className = 'sub-course-entry-div';
        
        let sub_course_entry_div_2 = document.createElement('div');
        sub_course_entry_div_2.className = 'sub-course-entry-div';

        course_entry_div.appendChild(sub_course_entry_div_1);
        course_entry_div.appendChild(sub_course_entry_div_2);

        // Create course code text
        let each_course_unit = document.createElement('h4');
        each_course_unit.className = 'each-course-unit';
        each_course_unit.id = 'course-code-' + i + '-text';
        each_course_unit.innerHTML = 'Course ' + i + ' unit : ';
        sub_course_entry_div_1.appendChild(each_course_unit);

        // Create course unit select element
        let course_unit_select = document.createElement('select');
        course_unit_select.className = 'course-unit-select';
        course_unit_select.id = 'course-' + i + '-unit-select';
        course_unit_select.required = true;
        sub_course_entry_div_1.appendChild(course_unit_select);

        // Create options for select
        let course_unit_option_1 = document.createElement('option');
        course_unit_option_1.className = 'course-unit-option';
        course_unit_option_1.value = ''
        course_unit_option_1.innerHTML = 'Select Unit for Course ' + i ;
        course_unit_select.appendChild(course_unit_option_1);

        let course_unit_option_2 = document.createElement('option');
        course_unit_option_2.className = 'course-unit-option';
        course_unit_option_2.value = 1;
        course_unit_option_2.innerHTML = '1 Unit';
        course_unit_select.appendChild(course_unit_option_2);

        let course_unit_option_3 = document.createElement('option');
        course_unit_option_3.className = 'course-unit-option';
        course_unit_option_3.value = 2;
        course_unit_option_3.innerHTML = '2 Units';
        course_unit_select.appendChild(course_unit_option_3);
        
        let course_unit_option_4 = document.createElement('option');
        course_unit_option_4.className = 'course-unit-option';
        course_unit_option_4.value = 3;
        course_unit_option_4.innerHTML = '3 Units';
        course_unit_select.appendChild(course_unit_option_4);
        
        let course_unit_option_5 = document.createElement('option');
        course_unit_option_5.className = 'course-unit-option';
        course_unit_option_5.value = 4;
        course_unit_option_5.innerHTML = '4 Units';
        course_unit_select.appendChild(course_unit_option_5);
        
        let course_unit_option_6 = document.createElement('option');
        course_unit_option_6.className = 'course-unit-option';
        course_unit_option_6.value = 5;
        course_unit_option_6.innerHTML = '5 Units';
        course_unit_select.appendChild(course_unit_option_6);


        // Create course grade text
        let course_number_text = document.createElement('h4');
        course_number_text.className = 'course-grade-text';
        course_number_text.id = 'course-' + i + '-grade-text';
        course_number_text.textContent = 'Grade';
        sub_course_entry_div_2.appendChild(course_number_text);

        
        // Create course grade select element
        let course_grade_select = document.createElement('select');
        course_grade_select.className = 'course-grade-select';
        course_grade_select.id = 'course-' + i + '-grade-select';
        course_grade_select.required = true;
        sub_course_entry_div_2.appendChild(course_grade_select);

        // Create options for second select
        let course_grade_option_1 = document.createElement('option');
        course_grade_option_1.className = 'course-grade-option';
        course_grade_option_1.value = ''
        course_grade_option_1.innerHTML = 'Select Grade for Course ' + i ;
        course_grade_select.appendChild(course_grade_option_1);

        let course_grade_option_2 = document.createElement('option');
        course_grade_option_2.className = 'course-grade-option';
        course_grade_option_2.value = 5;
        course_grade_option_2.innerHTML = ' A (70-100)';
        course_grade_select.appendChild(course_grade_option_2);

        let course_grade_option_3 = document.createElement('option');
        course_grade_option_3.className = 'course-grade-option';
        course_grade_option_3.value = 4;
        course_grade_option_3.innerHTML = ' B (60-69)';
        course_grade_select.appendChild(course_grade_option_3);
        
        let course_grade_option_4 = document.createElement('option');
        course_grade_option_4.className = 'course-grade-option';
        course_grade_option_4.value = 3;
        course_grade_option_4.innerHTML = ' C (50-59)';
        course_grade_select.appendChild(course_grade_option_4);
        
        let course_grade_option_5 = document.createElement('option');
        course_grade_option_5.className = 'course-grade-option';
        course_grade_option_5.value = 2;
        course_grade_option_5.innerHTML = ' D (45-49)';
        course_grade_select.appendChild(course_grade_option_5);
        
        let course_grade_option_6 = document.createElement('option');
        course_grade_option_6.className = 'course-grade-option';
        course_grade_option_6.value = 1;
        course_grade_option_6.innerHTML = ' E (40-45)';
        course_grade_select.appendChild(course_grade_option_6);
        
        let course_grade_option_7 = document.createElement('option');
        course_grade_option_7.className = 'course-grade-option';
        course_grade_option_7.value = 0;
        course_grade_option_7.innerHTML = ' F (0-39)';
        course_grade_select.appendChild(course_grade_option_7); 




        // Append to parent
        course_code_input_div.appendChild(course_entry_div);

        course_details_input_div.appendChild(course_code_input_div);
        course_details_input_div.appendChild(course_details_submit_button_div);
        
        course_details_form.appendChild(course_details_input_div);

        // course_input_elements.push(course_details_input_div);



    }


    setTimeout(function(){
        app_control_section_div.appendChild(course_details_form);
    },500)


    // Selection process now

    course_details_submit_button.onclick = function(e){
        e.preventDefault()

        let all_course_units_array = [];
        let all_course_grades_values_array = [];

        let all_course_units = document.querySelectorAll('.course-unit-select');
        let all_course_grades_values = document.querySelectorAll('.course-grade-select');

        loopAndCheckEmptyCourseUnitSelects(all_course_units, all_course_units_array);
        loopAndCheckEmptyCourseUnitSelects(all_course_grades_values, all_course_grades_values_array);

        if (all_course_grades_values.length === all_course_grades_values_array.length && all_course_units.length === all_course_units_array.length){
            
            // Create array to store Grade Points
            let grade_points_arr = [];

            // Calculate Total Units
            let total_units = eval(all_course_units_array.join("+"));


            all_course_units_array.forEach((num1, index) => {
                const num2 = all_course_grades_values_array[index];
                grade_points_arr.push(num1 * num2);
            });

            let total_grade_points = eval(grade_points_arr.join("+"));

            let raw_gpa = total_grade_points/total_units;

            let rounded_gpa = raw_gpa.toFixed(2);

            
            createGPADisplayDIv(rounded_gpa);
            


        }


        return false;

    };


}


function slideElementsParentsDivLeft(elem_par_div){
    elem_par_div.parentElement.classList.add('slide-left-div');
    setTimeout(function(){
        elem_par_div.parentElement.style.display = 'none';
    },100);
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

function loopAndCheckEmptyCourseUnitSelects (units, units_arr) {
    for (let i = 0; i < units.length; i++){

        if(units[i].value === ''){
            units[i].classList.add('select-on-error-state');
        }
        else{
            units_arr.push(Number(units[i].value));
        }

        units[i].onchange = function(e){
            if (this.selectedIndex){
                if(this.value !== ''){
                    units[i].classList.remove('select-on-error-state');
                }
            }
        }

    };
}

function createGPADisplayDIv (gpa){
    
    // Remove form
    fadeOutform();

    
    // Create div for GPA display
    setTimeout(function(){

        let gpa_display_div = document.createElement('div');
        gpa_display_div.className = 'gpa-display-div';
        app_control_section_div.appendChild(gpa_display_div);

        // Create header text for GPA display div
        let gpa_display_header = document.createElement('header');
        gpa_display_header.className = 'gpa-display-header';
        gpa_display_header.innerHTML = 'Your GPA '
        gpa_display_div.appendChild(gpa_display_header);

        // Create GPA score 
        let gpa_score = document.createElement('h1');
        gpa_score.className = 'gpa-score';
        gpa_score.innerHTML = gpa;
        gpa_display_div.appendChild(gpa_score);

        // Create picture for GPA display div
        let gpa_display_pic = document.createElement('img');
        gpa_display_pic.alt = 'GPA Display Picture';
        gpa_display_pic.className = 'gpa-display-pic';
        gpa_display_div.appendChild(gpa_display_pic);

        // Create paragraph for student type
        let student_type_text = document.createElement('p');
        student_type_text.className = 'student-type-text';
        student_type_text.innerHTML = 'You are a ';
        let student_type_text_span = document.createElement('span');
        student_type_text.appendChild(student_type_text_span);

        if (gpa >= 0 && gpa < 1.50){
            student_type_text_span.innerHTML = 'Pass';
            gpa_display_pic.src = 'img/pass.png';
        }
        else if (gpa >= 1.50 && gpa < 2.50){
            student_type_text_span.innerHTML = 'Third Class';
            gpa_display_pic.src = 'img/third-class.png';
        }
        else if (gpa >= 2.50 && gpa < 3.50){
            student_type_text_span.innerHTML = 'Second Class Lower';
            gpa_display_pic.src = 'img/sec-class-low.png';
        }
        else if (gpa >= 3.50 && gpa < 4.50){
            student_type_text_span.innerHTML = 'Second Class Upper';
            gpa_display_pic.src = 'img/sec-class-up.png';
        }
        else if (gpa >= 4.50){
            student_type_text_span.innerHTML = 'First Class';
            gpa_display_pic.src = 'img/first-class.png';
        }

        student_type_text.innerHTML += ' Student';
        gpa_display_div.appendChild(student_type_text);

        //Create reload button 
        let reload_button = document.createElement('button');
        reload_button.className = 'reload-button';
        reload_button.innerHTML = 'Reload App ';
        gpa_display_div.appendChild(reload_button);

        reload_button.onclick = function(e){
            location.reload();
        }

    }, 1000)

    

}

function fadeOutform (){
    let form = document.querySelector('.course-details-form');
    let app_text = document.querySelector('.app-type-description-text')



    form.classList.add('fade-out-element')
    app_text.classList.add('fade-out-element')
    setTimeout(function(){
        form.style.display = 'none';
        app_text.style.display = 'none';
    }, 1000)
}