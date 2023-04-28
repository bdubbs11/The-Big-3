

// to start the code
let btn = document.getElementById("button");
btn.addEventListener('click',function(){
    letsSee();
});

let fighter1 = [];
let fighter2 = [];
function letsSee(){
    // battle btwn one piece characters
    if(document.getElementById("onepiece1").checked && document.getElementById("onepiece2").checked){
        fighter1.push(prompt("Does fighter 1 have a devil fruit?"));
        fighter1.push(prompt("Does fighter 1 a pirate or navy officer?"));
        fighter1.push(prompt("Does fighter 1 know haki?"));

        fighter2.push(prompt("Does fighter 2 have a devil fruit?"));
        fighter2.push(prompt("Does fighter 2 a pirate or navy officer?"));
        fighter2.push(prompt("Does fighter 2 know haki?"));

        // fighter 1 has a devil fruit and figter2 does not
        if(fighter1[0] == 'yes' && fighter2[0] == 'no'){
            // fighter 1 has haki
            if(fighter1[2] == 'yes' && fighter2[0] == 'no'){
                alert(document.getElementById("name2").value + " the " + fighter2[1] + " doesn't have a chance against " + document.getElementById("name1").value + " the " + fighter1[1]);
            } // fighter 2 has haki
            else if(fighter1[2] == 'no' && fighter2[0] == 'yes'){
                alert("Watch out for " + document.getElementById("name2").value + " the " + fighter2[1] + " and their haki susanoo " +  document.getElementById("name1").value + " the " + fighter1[1]);
            }else{// they both have haki
                alert("This is too close to call");
            }  
        }
        // fighter 2 has a devil fruit and figter1 does not
        else if(fighter1[0] == 'no' && fighter2[0] == 'yes'){
             // fighter 1 has haki
             if(fighter1[2] == 'yes' && fighter2[0] == 'no'){
                alert("Watch out for " + document.getElementById("name1").value + " the " + fighter1[1] + " and their haki susanoo " +  document.getElementById("name2").value + " the " + fighter2[1]);
            } // fighter 2 has haki
            else if(fighter1[2] == 'no' && fighter2[0] == 'yes'){
                alert(document.getElementById("name1").value + " the " + fighter1[1] + " doesn't have a chance against " + document.getElementById("name2").value + " the " + fighter2[1]);
            }else{// they both have haki
                alert("This is too close to call");
            }  
        }// both have a devil fruit
        else{
            // fighter 1 has haki
            if(fighter1[2] == 'yes' && fighter2[0] == 'no'){
                alert("Conqueorors Haki reigns supreme with " + document.getElementById("name1").value + " the " + fighter1[1]);
            } // fighter 2 has haki
            else if(fighter1[2] == 'no' && fighter2[0] == 'yes'){
                alert("Conqueorors Haki reigns supreme with " + document.getElementById("name2").value + " the " + fighter2[1]);
            }else{// they both have haki
                alert("The fight between " + document.getElementById("name1").value + " the " + fighter1[1] + " and " + document.getElementById("name2").value + " the " + fighter2[1] + " created a new punk hazard");
            }  
        }
    }
    // battle btwn two naruto characters
    else if(document.getElementById("naruto1").checked && document.getElementById("naruto2").checked){
        fighter1.push(prompt("Is fighter 1 a jinchuriki"));
        fighter1.push(prompt("What rank ninja is fighter 1"));
        fighter1.push(prompt("Does fighter 1 have a sharingan"));

        fighter2.push(prompt("Is fighter 2 a jinchuriki"));
        fighter2.push(prompt("What rank ninja is fighter 2"));
        fighter2.push(prompt("Does fighter 2 have a sharingan"));

        if(fighter1[0] == "yes" && fighter2[0] == "yes"){
            alert("Yeah two jinjurki's fightting, you already got puprged by the akatsuki")
        }else{
            // both have eyes
            if(fighter1[2] == "yes" && fighter2[2] == "yes"){
                alert("Two susanoo = Infinite Tsukonomai")
            }// fighter 1 has eyes
            else if(fighter1[2] == "yes" && fighter2[2] == "no"){
                alert(document.getElementById("name1").value + " summoned their susanoo to destroy " + document.getElementById("name2").value);
            }// fighter 2 has eyes
            else if(fighter1[2] == "no" && fighter2[2] == "yes"){
                alert(document.getElementById("name2").value + " summoned their susanoo to destroy " + document.getElementById("name1").value);
            }else{
                alert("The higher rank of: " + fighter1[1] + ", " + fighter2[2] + " wins the fight");
            }
        }
    }
    // battle btwn two bleach characters
    else if(document.getElementById("bleach1").checked && document.getElementById("bleach2").checked){
        fighter1.push(prompt("Is fighter 1 a Soul Reaper"));
        fighter1.push(prompt("Does fighter 1 have a bankai"));
        fighter1.push(prompt("Is fighter 1 a Quincy"));

        fighter2.push(prompt("Is fighter 2 a Soul Reaper"));
        fighter2.push(prompt("Does fighter 2 have a bankai"));
        fighter2.push(prompt("Is fighter 2 a Quincy"));

        // bankai plus quincy
        if(fighter1[1] == "yes" && fighter2[2] == "yes"){
            alert(document.getElementById("name2").value + " stole " + document.getElementById("name1").value + "'s bankai, and won");
        }//
        else if(fighter2[1] == "yes" && fighter1[2] == "yes"){
            alert(document.getElementById("name1").value + " stole " + document.getElementById("name2").value + "'s bankai, and won");
        }else{
            // other scenarios
            if(fighter1[1] == "yes" && fighter2[1] == "yes"){
                alert("In the bankai off they ended up killing eachother");
            }
            else if(fighter1[1] == "yes" && fighter2[1] == "no"){
                alert(document.getElementById("name1").value + "destroyed with their amazing bankai");
            }
            else if(fighter1[1] == "no" && fighter2[1] == "yes"){
                alert(document.getElementById("name2").value + "destroyed with their amazing bankai");
            }
            else{
                alert("BANKAIIIIII")
            }
        }
    }
    // battle against non save verse fights
    else{
        alert("Sorry only same verse fights :(")
    }
}
