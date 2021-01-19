var submit = document.getElementById("submitButton");
//var assignmentGrade = 0.0;
//var groupProjectGrade = 0.0;
//var quizGrade = 0.0;
//var examGrade = 0.0;
//var intexGrade = 0.0;
//var totalGrade = 0.0;


submit.addEventListener("click", function () {
    var assignmentGrade = parseInt(document.getElementById("Assignments").value) * .5;
    var groupProjectGrade = parseInt(document.getElementById("GroupProject").value) * .1;
    var quizGrade = parseInt(document.getElementById("Quizzes").value) * .1;
    var examGrade = parseInt(document.getElementById("Exams").value) * .2;
    var intexGrade = parseInt(document.getElementById("INTEX").value) * .1;
    var totalGrade = assignmentGrade + groupProjectGrade + quizGrade + examGrade + intexGrade;
    var letterGrade = "";
    if (totalGrade >= 94) {
        letterGrade = 'A';
    }
    else if (totalGrade < 94 && totalGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (totalGrade < 90 && totalGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (totalGrade < 87 && totalGrade >= 84) {
        letterGrade = 'B';
    }
    else if (totalGrade < 84 && totalGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (totalGrade < 80 && totalGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (totalGrade < 77 && totalGrade >= 74) {
        letterGrade = 'C';
    }
    else if (totalGrade < 74 && totalGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (totalGrade < 70 && totalGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (totalGrade < 67 && totalGrade >= 64) {
        letterGrade = 'D';
    }
    else if (totalGrade < 64 && totalGrade >= 60) {
        letterGrade = 'D-';
    }
    else if (totalGrade < 60) {
        letterGrade = 'E';
    }
    alert("Your Final Grade: " + letterGrade + " " + totalGrade + "% ");
});