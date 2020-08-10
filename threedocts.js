const ages = [10, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [18, 19, 12, 56];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);