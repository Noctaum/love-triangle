/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
// your implementation
  	let count = 0;
  	for (let i = 0; i < preferences.length; i++){
  		let loveFirst, loveSecond, loveThitd;
  		loveFirst = preferences[i];
  		if (checkExist(loveFirst)){
  			loveSecond = preferences[loveFirst-1];
  			if (checkExist(loveSecond)){
  				loveThitd = preferences[loveSecond-1];
  				if (loveThitd === i+1 && loveSecond != i+1) count++;
  			}
  		}
	}
	
  	function checkExist(num){
  		return (preferences.length+1) > num;
  	}
  	return count/3;
};
