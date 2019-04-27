"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", analyze);

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset);

function analyze() {
    /*
        FIRST, flowchart the logic for your analyze() function. Do this BEFORE you write your code, and you will find writing the code easier! You ONLY need to flowchart this function, NOT your other code!
        
        NEXT, write your "analysis" code in this function. At a minimum, you must:
        
        1. Create and initialize at least one variable to "score" your quiz.
        2. Create variables to hold values from your form elements
        3. Convert variables from Strings to Numbers (if needed)
        4. Use conditional logic and perform calculations on your variables
        5. VERY IMPORTANT: Above each condition that you write, provide a multi-line comment that clearly explains in English what your conditional logic does. This is a major part of the grade.
        6. Call "output" as many times as needed to produce your results
        
        Things to remember:
        1. Name your variables meaningfully (with good spelling)
        2. Each call to "output" will add a paragraph to your output. Use this to format your output neatly!
        3. Don't forget that you need to edit index.html as well!
    */

    let spicyFood = Number(document.getElementById("spicyFood").value);
    let favoriteSeason = Number(document.getElementById("spicyFood").value);
    let age = Number(document.getElementById("age").value);
    let fruitOrVeg = Number(document.getElementById("fruitOrVeg").value);
    let pullWeeds = Number(document.getElementById("pullWeeds").value);
    
    /* NOTE: For my example code, I am not explictly coercing the value of form item "b" from a String to a Number. This is because two of my example values are actually Strings, and I want you to see the effect! You actually CAN compare Strings using greater-than and less-than, but they probably won't do what you expect. This week, try to research what actually happens when you compare strings! */
    
    let b = document.getElementById("b").value;
    
    output("First form value: " + a);
    output("Second form value: " + b);
    
    if (spicyFood == 1) {
        output("You are a hot pepper plant.");
    }
    
    if (spicyFood == 2) {
        if (favoriteSeason == 1);
            if (age == 1)
                output("You are wisteria.")
    }
    
    if (a==b) {
        output("The two form values were the same");
    }
    
}

function reset() {
    let o = document.getElementById("output");
    while (o.childNodes.length > 3) { // includes button text
        let aNode = o.lastChild;
        if (aNode.id != "reset") {
            o.removeChild(aNode);
        }
    }
    o.style.display = "none";
    let i = document.getElementById("input");
    i.style.display = "block";
}

function output(t) {
    if (t == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        let p = document.createElement("p");
        let tn = document.createTextNode(t);
        p.appendChild(tn);
        let o = document.getElementById("output");
        o.appendChild(p);
        o.style.display = "block";
        let i = document.getElementById("input");
        i.style.display = "none";
    }
}
