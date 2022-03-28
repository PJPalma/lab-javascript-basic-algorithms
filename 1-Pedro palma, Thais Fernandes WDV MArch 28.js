// Iteration 1
let hacker1 = 'Ben';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jerry';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2

let hacker1Number = hacker1.length;
let hacker2Number = hacker2.length;

if(hacker1Number > hacker2Number) {
    console.log(`The driver has the longest name, it has ${hacker1Number} characters.`);
} if (hacker1Number < hacker2Number) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Number} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Number} characters!.`);
}

// Iteration 3

for(let i = 0; i < hacker1.length; i++) { 
	hacker1 = hacker1.toUpperCase();
	console.log(hacker1[i] +" "+ hacker1[i+1] + " " + hacker1[i+2])
	break;
}

for(let i = hacker2.length; i >= 0; i--) { 
	console.log(hacker2[i-1] +hacker2[i-2] + hacker2[i-3] + hacker2[i-4] + hacker2[i-5]);
	break;
}


let driverGoFirst = "The driver's name goes first.";
let navigatorFirst = "Yo, the navigator goes first definitely.";
let bothAlpha = "What?! You both have the same name?";




// Bonus Time !!!!!!
// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat dolor tincidunt sapien condimentum, ac luctus nibh ultricies. Aliquam viverra ligula ac lacus imperdiet, et laoreet est volutpat. Quisque vitae mi at erat consectetur fermentum. Fusce eget porttitor dolor. Maecenas sem leo, egestas vel quam sit amet, congue imperdiet tellus. Ut congue dignissim eleifend. Maecenas blandit mi varius, pulvinar ipsum nec, elementum mi. Vivamus ullamcorper auctor erat lacinia porta. Suspendisse fermentum nulla dui, vel porttitor turpis dignissim vel. Vestibulum rutrum ullamcorper facilisis. Maecenas ullamcorper viverra congue. Maecenas dapibus lorem nec leo porta laoreet. Quisque mattis luctus leo, vitae tempor arcu ultrices quis.

Phasellus sed velit non nunc rutrum egestas. Praesent pulvinar ultrices purus, at luctus sem tincidunt et. Morbi ut euismod dolor. Phasellus facilisis, quam in varius laoreet, augue magna mollis sapien, nec fermentum magna risus eget sem. Fusce ac malesuada sem. Aliquam erat volutpat. Sed diam nisi, pulvinar et lorem id, blandit lobortis ex. Nullam vulputate porttitor justo, sed mattis enim aliquam eget. Nullam hendrerit vestibulum ante, nec commodo lacus blandit sit amet. Praesent vel nunc in nibh fermentum viverra. Aenean eu tortor mollis, gravida enim eget, tempor augue. Aenean mollis ante nulla, eu venenatis mauris condimentum sed. Aliquam sed suscipit neque.

Proin placerat, velit lobortis semper tempor, ligula orci ornare erat, ut interdum justo lacus sit amet dolor. Donec accumsan, risus nec molestie malesuada, nulla ante porttitor elit, vitae dapibus justo purus eget dolor. Phasellus molestie, metus vitae blandit pretium, justo nunc fermentum justo, vel fermentum nunc lorem quis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consectetur rutrum risus. Sed ut rhoncus nisl, efficitur auctor purus. Aenean ac erat ex. Duis et felis semper, accumsan massa sit amet, cursus mi.`

let counter = 0
for(let i =0; i < lorem.length; i++) {
	if (lorem[i] === " ") {
		counter ++
	}
	console.log(counter)
}

