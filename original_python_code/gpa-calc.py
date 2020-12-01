# Ask the user how many courses he or she offers
# The input here would aid us in the number of prompts we are to print

print()
no_of_courses = int(input("Enter the number of courses you offer : "))
print("--------------------------------------------------")

# Declare lists to hold all the data we need ( that's it sha )
courses = []
scores = []
units = []
grades = []
grade_multipliers = []

# Use the number of courses the user entered to generate prompts
while len(courses) < no_of_courses:
    # Ask user to enter course
    single_course = str(input(f"Enter Course no. {len(courses)+1} : \n"))
    # Store course in 'courses' list
    courses.append(single_course)
    # Target course's name and use it to ask user for that corresponding course's unit
    single_course_unit = int(input(f" Input the amount of units for {single_course} : "))
    # Store in 'units' list
    units.append(single_course_unit)
    x = int(input(f" Input what you scored in {single_course} : "))
    if x > 100:
        print()
        print(f"  Error: Your score for {single_course} is invalid. Bye ! ")
        exit(1)
    else:
        scores.append(x)

# Assess Student's score and assign Grade
    if 70 <= x <= 100:
        grade = "A"
        grades.append(grade)
        print(f" You had an {grade} in {single_course} . Excellent!")
    elif 60 <= x < 70:
        grade = "B"
        grades.append(grade)
        print(f" You had a {grade} in {single_course} . Very Good")
    elif 50 <= x < 60:
        grade = "C"
        grades.append(grade)
        print(f" You had a {grade} in {single_course} . Good")
    elif 45 <= x < 50:
        grade = "D"
        grades.append(grade)
        print(f" You had a {grade} in {single_course} . Fair")
    elif 40 <= x < 45:
        grade = "E"
        grades.append(grade)
        print(f" You had an {grade} in {single_course} . Poor")
    elif 0 <= x <= 39:
        grade = "F"
        grades.append(grade)
        print(f" You had an {grade} in {single_course} . Failed")
    else:
        print(f" '{single_course}' has an invalid score '{x}'. Try again ")
        exit(0)
    print("___________________________________________________")
print("---------------------------------------------------")

print(f"  COURSE                    UNIT                  GRADE ")
for each_grade in grades:
    if each_grade == "A":
        grade_mul = 5
        grade_multipliers.append(grade_mul)
    if each_grade == "B":
        grade_mul = 4
        grade_multipliers.append(grade_mul)
    if each_grade == "C":
        grade_mul = 3
        grade_multipliers.append(grade_mul)
    if each_grade == "D":
        grade_mul = 2
        grade_multipliers.append(grade_mul)
    if each_grade == "E":
        grade_mul = 1
        grade_multipliers.append(grade_mul)
    if each_grade == "F":
        grade_mul = 0
        grade_multipliers.append(grade_mul)

# Get total allocated units for that semester based on the users input
total_allocated_units = sum(units)

# Create an empty list and store the product of each course's grade multiplier and its corresponding unit
grade_product = []
for mul1, mul2 in zip(grade_multipliers, units):
    mul3 = mul1 * mul2
    grade_product.append(mul3)

# Add all grade products ( grade point * course unit ) together
grade_product_total = sum(grade_product)


n = 0
for i in courses:
    r = courses[n]

    for j in units:
        s = units[n]

        for k in grades:
            t = grades[n]

    print(f"  {r}                 {s}                 {t}   ")
    n = n + 1

# Divide sum of all grade points by the total allocated points for that semester
gpa = grade_product_total / total_allocated_units
print()
print(f" Your GPA is {gpa:.2f}")
