const readFile = require("fs").readFileSync;

let inputs = [];
let policy = []
let passwords = [];

const file = readFile('input.txt', 'utf-8').split("\n").forEach(data => {
    inputs.push((data))
    input = data.split(":");
    policy.push(input[0].trim());
    passwords.push(input[1].trim());
})
// OUTPUT DATA
// for(let i=0;i<policy.length;i++){
//     console.log(policy[i]+" "+passwords[i])
// }

function policyPreprocessing(policy){
    let p = policy.split(" ");
    let countRange = p[0].split("-");
    let min = parseInt(countRange[0]);
    let max = parseInt(countRange[1]);
    let letter = p[1];
    let result = {min, max, letter}
    return result;
}

// function isValidPassword(policy, password){
//     // DAY 2 Puzzle 1 LOGIC
//     // policy = { min : min, max : max, letter : letter}
//     let letterCount = 0;
//     for(let i=0; i<password.length; i++){
//         if(password[i]===policy.letter){
//             letterCount++;
//         }
//     }
//     if(letterCount>=policy.min && letterCount <= policy.max)
//     {
//         return true;
//     }
//     return false;
// }

function isValidPassword(policy, password){
    // DAY 2 Puzzle 2 LOGIC
    // policy = { min : min, max : max, letter : letter}
    let idx1 = policy.min-1;
    let idx2 = policy.max-1;
    if(password[idx1] === policy.letter && password[idx2] !== policy.letter)
    {
        return true;
    }
    else if(password[idx1] !== policy.letter && password[idx2] === policy.letter)
    {
        return true;
    }
    return false;

}

function checkPasswords(policies, passwords){
    let validCount = 0;
    for(let i=0; i<policies.length; i++){
        let policy = policyPreprocessing(policies[i]);
        let password = passwords[i];

        if(isValidPassword(policy, password)){
            validCount++;
        }
    }
    console.log(validCount);
}
checkPasswords(policy, passwords);