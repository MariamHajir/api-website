//get Elements for first api

let api3btn=document.getElementById("api3submit");    //variables used in third api, palindromeAPI
let is_palindrome_result=document.getElementById("api3result");
let string_palindrome=document.getElementById("string_palindrome");
api3btn.addEventListener("click",isPalindrome);
// function for palindrome
async function isPalindrome(){
    let my_str=string_palindrome.value;
    if (my_str===''){
        is_palindrome_result.textContent="Please input a string first.";
        return;
    }
    const response=await fetch(`http://localhost/apicreation/first-api.php?word=${my_str}`);
    res=await response.json();
    is_palindrome_result.textContent="Result: "+ res.result;
}