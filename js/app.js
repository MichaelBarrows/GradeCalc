/**
 * Object for an individual assignment grade
 * @param grade (user entered grade)
 * @param weighting (user entered weighting)
 * @constructor
 */
function Assignment (grade, weighting) {
    this.grade = grade;
    this.weighting = weighting / 100;
}

/**
 * Method to calculate the weighted grade of an assignment
 * @returns {string}
 * Weighted grade of the assignment rounded to two decimal places
 */
Assignment.prototype.weightedGrade = function () {
    return ((this.grade * this.weighting).toFixed(2));
};

/**
 * Object for an individual module grade
 * @param grade (user entered grade)
 * @param credits (user entered credits)
 * @param totalCredits (sum of all user entered credits)
 * @constructor
 */
function Module (grade, credits, totalCredits) {
    this.grade = grade;
    this.credits = credits;
    this.totalCredits = totalCredits;
}
// Calculates the weighted grade of the module
/**
 * Method to calculate the weighted grade of a module
 * @returns {string}
 * Weighted grade of the module rounded to two decimal places
 */
Module.prototype.weightedGrade = function () {
    var credit = this.credits * 100;
    var weightedCredit = credit / this.totalCredits;
    weightedCredit = weightedCredit.toFixed(2);
    return (this.grade * weightedCredit / 100).toFixed(2);
};


// Object for calculating totals
/**
 *
 * @param grades (
 * @constructor
 */
function Calculator (grades) {
    this.grades = grades;
}
// Calculates the total of an array of grades
Calculator.prototype.calculate = function () {
    var total = 0;
    for(var idx = 0; idx < this.grades.length; idx++) {
        total += parseFloat(this.grades[idx]);
    }
    return total.toFixed(2);
};

Calculator.prototype.classification = function () {
    var grade = this.calculate(this.grades);
    if (grade < 40) {
        return "Fail";
    } else if (grade < 50) {
        return "3rd";
    } else if (grade < 60) {
        return "2.2";
    } else if (grade < 70) {
        return "2.1";
    } else {
        return "1st";
    }
};

/**
 * function to calculate total number of credits inputted
 * @param credits
 * @returns {number}
 */
function sumCredits (credits) {
    var sum = 0;
    for (var idx = 0; idx < credits.length; idx++) {
        if(credits[idx].length > 0) {
            sum += parseInt(credits[idx]);
            console.log(sum);
        }
    }
    return sum;
}


$(document).ready(function(){
    $('#help').click(function(event){
        event.preventDefault();
        $('.help-text').show(750);
    });
    $('form#modulecalc').on('submit', function(event) {
        event.preventDefault();
        var grades = [];
        var weightings = [];
        var wg = [];
        $('input[name="grade[]"]').each(function() {
            grades.push($(this).val());
        });
        $('input[name="weighting[]"]').each(function() {
            weightings.push($(this).val());
        });
        for (var idx = 0; idx < grades.length && idx < weightings.length; idx++) {
            var temp = new Assignment(grades[idx], weightings[idx]);
            $(".wg" + idx).empty().append(temp.weightedGrade() + '%');
            wg.push(temp.weightedGrade());
        }
        var calc = new Calculator(wg);
        $(".wg").empty().append("<h3>Your grade is: <strong>" + calc.calculate() + '%</strong> (' + calc.classification() + ')</h3>').show(750);
    });
    $('form#yearcalc').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var grades = [];
        var credits = [];
        var wg = [];
        $('input[name="grade[]"]').each(function() {
            grades.push($(this).val());
        });
        $('input[name="credit[]"]').each(function() {
            credits.push($(this).val());
        });
        var totalCredits = sumCredits(credits); // Calculated the total number of credits entered.
        for (var idx = 0; idx < grades.length && idx < credits.length; idx++) {
            var temp = new Module(grades[idx], credits[idx], totalCredits);
            $(".wg" + idx).empty().append(temp.weightedGrade() + '%');
            wg.push(temp.weightedGrade());
        }
        var calc = new Calculator(wg);
        $(".wg").empty().append("<h3>Your grade is: <strong>" + calc.calculate() + '%</strong> (' + calc.classification() + ')</h3>').show(750);
    });
    $('#home-module').click(function (event) {
        window.location.assign("/module/")
    });
    $('#home-year').click(function (event) {
        window.location.assign("/year/")
    });
});