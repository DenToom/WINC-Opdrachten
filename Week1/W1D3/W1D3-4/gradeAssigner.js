function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
    console.log('for ' + i + ',you got a ' + assignGrade(i));
}

/*
console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));
*/