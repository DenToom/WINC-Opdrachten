function addOne(numbers) {
	const more = numbers.map(function(numbers){
        return parseInt(number+1);
    });
    return more; 
};

module.exports = addOne;