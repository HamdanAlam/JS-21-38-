// Assignment # 21-25
// // Q1
// var firstName=prompt("Enter your first name");
// var lastName=prompt("enter your last name ");
// var fullName=firstName +" "+ lastName;
// alert("welcome " + fullName);
// Q2
// var favoriteMobile=prompt("Enter your favorite mobile phone model");
// document.write("My Favorite Phone is : " +favoriteMobile);
// document.write("<br>");
// document.write("Length of srting: "+favoriteMobile.length);
// Q3
// var text="Pakistan";
// document.write("String: "+text);
// document.write("<br>");
// document.write("Index of Letter 'n' : " +text.indexOf("n"));
// Q4
// var str = "Hello World.";
// var n = str.lastIndexOf("l");
// document.write("String: "+str);
// document.write("<br>");
// document.write("Last Index of letter 'l': "+n);
// Q5
// var word="Pakistan";
// document.write("String: "+word);
// document.write("<br>");
// document.write("Character at index 3: "+word.charAt(3));
// Q6
// var firstName=prompt("Enter your first name");
// var lastName=prompt("enter your last name ");
// alert("welcome " +firstName.concat(" "+lastName));
// Q7
// var city="Hyderabad";
// document.write("City: "+city);
// document.write("<br>");
// var replace=city.replace("Hyder", "Islam");
// document.write("After Replacement: " +replace);
// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("String: " +message);
// document.write("<br>");
// document.write("<br>");
// var search=/and/g;
// var replace='&';
// var result=message.replace(search,replace);
// document.write("After replacement of 'and' by '&': " +result);
// Q9
// var value1="472";
// document.write("Value: "  +value1 +"<br>");
// var type1=typeof(value1);
// document.write("Type: " +type1 +"<br>");
// var value2=parseInt(value1);
// document.write("Value: " +value2 +"<br>");
// var type2=typeof(value2);
// document.write("Type: " +type2 +"<br>");
// Q10
// var text=prompt("Enter Your Text");
// document.write("User Input: " +text +"<br>");
// var upperCase=text.toUpperCase();
// document.write("Upper Case: "+upperCase +"<br>");
// Q11
// var str=prompt("Enter the text");
// document.write("User Input: " +str + "<br>");
// str = str.toLowerCase().split(' ');
// for (var i = 0; i < str.length; i++) {
//   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
// document.write("Title case: " +str.join(' '));
// Q12
// var num=35.36;
// document.write("Number: "+ num + "<br>");
// var n=num.toString();
// var search='.';
// var replace='';
// var result=n.replace(search,replace);
// document.write("Result: "+result);
// Q13
//  var name = prompt("Enter your name : ");
//  var op=['@','.','!',','];

//  if (name.includes(op)){
//     prompt('Enter a valid user name');
// }
// Q14
// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search = prompt("Welcome to ABC bakery. What do you want to order sir/madam").toLowerCase();

// if (bakery.includes(search)){
//     document.write(search+ " is available at index "+bakery.indexOf(search)+" in our bakery");
// } 
// else {
//     document.write("We are sorry. "+search+" is not available in our bakery");
// }
// Q15
// var pas = prompt("Enter Your Password");
// var m = 0;
// if (pas.length >= 6) {
//     pas = prompt("Password must be at least 6 characters\nPlease enter a valid password");
// }
// else if (parseInt(pas[0]) >= 0){
//     pas = prompt("Password not contain number in starting\nPlease enter valid password");
// }
// for (let i = 0; i < pas.length; i++) {
//     if (pas[i].charCodeAt() >= 65 && pas[i].charCodeAt() <= 90 && pas[i].charCodeAt() >= 97 && pas[i].charCodeAt() <= 122){
//         m = 1 
//     } 
// }
// if (m = 0){
//     pas = prompt("Password contains atleast 1 alphabet\nPlease enter valid password");
// }
// Q16
// var universityName ="University Of Karachi";
// var array = universityName.split('')
// array.forEach(element => {
//     document.write("<br>"+element); 
// });
// Q17
// var text = prompt("Enter text : ")
// document.write("User Input: "+text);
// document.write("<br>Last Character of input: "+text[text.length-1]);
// Q18
// var str = "The quick brown fox jumps over the lazy dog".toLowerCase().split(' ');
// count = 0;
// str.forEach(word => {
//     if (word == 'the'){
//         count++;
//     }
// });
// document.write("<br>There are "+count+" occurrence(s) of word 'the'");


// Chapter=26-30
// Q1
// var number = prompt("Enter any number: ");
// document.write("<br>number: "+number);
// document.write("<br>round off value: "+Math.round(number));
// document.write("<br>floor value: "+Math.floor(number));
// document.write("<br>ceil value: "+Math.ceil(number));
// Q2
// var number = prompt("Enter any negative number: ");
// document.write("<br><br>number: "+number);
// document.write("<br>round off value: "+Math.round(number));
// document.write("<br>floor value: "+Math.floor(number));
// document.write("<br>ceil value: "+Math.ceil(number));
// Q3
// var number = prompt("Enter any number: ");
// document.write("<br>The absolute value of "+ number +" is: " + Math.abs(number));
// Q4
// document.write("random dice value: " + (Math.round(Math.random() * 5)+1));
// document.write("<br>random dice value: " + (Math.round(Math.random() * 5)+1));
// Q5
// var toss = (Math.round(Math.random() * 1)+1);
// if (toss == 1){
//     document.write(toss+"<br>random coin value: Heads");
// }
// else {
//     document.write(toss+"<br>random coin value: Tails");
// }
// Q6
// document.write("random value between 1 to 100: "+ (Math.floor(Math.random() * 100) + 1));
// Q8
// var secretNumber = (Math.floor(Math.random()) * 9) + 1;
// var num =+ prompt('Enter number between (1-10)');
// if ( num == secretNumber) {
//     alert('Congratulation!!');
// }
// else {
//     alert('Try Again!');
// }


// Chapter 31-34

// Q1
// var date = new Date();
// document.write("Current DATE: "+date);
// Q2
// var date = new Date();
// var month = '';
// switch (date.getMonth()) {
//     case 0:
//         month = 'January';
//         break;

//     case 1:
//         month = 'Feburary';
//         break;
    
//     case 2:
//         month = 'March';
//         break;
        
//     case 3:
//         month = 'April';
//         break;

//     case 4:
//         month = 'May';
//         break;
    
//     case 5:
//         month = 'June';
//         break;

//     case 6:
//         month = 'July';
//         break;

//     case 7:
//         month = 'August';
//         break;

//     case 8:
//         month = 'September';
//         break;
    
//     case 9:
//         month = 'October';
//         break;
    
//     case 10:
//         month = 'November';
//         break;

//     case 11:
//         month = 'December';
//         break;
// }
// document.write("<br>Current month: "+month);

// Q3
// var date = new Date();
// var day='';
// switch (date.getDay()){
//     case 0:
//         day='Sun';
//         break;
//     case 1:
//         day='Mon';
//         break;
//     case 2:
//         day='Tue';
//         break;
//     case 3:
//         day='Wed';
//         break;
//     case 4:
//         day='Thu';
//         break;
//     case 5:
//         day='Fri';
//         break;
//     case 6:
//         day='Sat';
//         break; 
// }
// document.write("Day :" +day);
// Q4
// if (new Date().getDay() == 6 || new Date().getDay() == 0) {
//     document.write("It's Fun day");
// }
// Q5
// if (new Date().getDate() <= 15) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
    
// }
// Q6
// var millis = (new Date().getTime() - new Date('Jan 1,1970').getTime());
// document.write("<br><br>Current Date: "+new Date('Jan 1,1970'));
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+millis);
// document.write("<br>Elapsed minutes since January 1, 1970: "+(millis/(1000*60*60)));
// Q7
// var hrs = new Date().getUTCHours;
// var min = new Date().getUTCMinutes;

// if (hrs >= 12 && hrs < 24) {
//     document.write("<br><br>Its Pm");
// }
// else {
//     document.write("<br><br>Its Am");
// }
// Q8
// var laterDate = new Date('Dec 31,2020');
// document.write("Later Date: "+laterDate);
// Q9
// var D1 = new Date('June 18, 2015').getTime();
// var D2 = new Date().getTime();
// var diff = D2 - D1;
// document.write(( Math.floor(diff / (1000*60*60*24) ))+" days have passed since 1st Ramadan 2015" );
// Q10
// var D1 = new Date('Dec 5, 2015').getTime();
// var D2 = new Date().getTime();
// var diff = D2 - D1;
// document.write("On reference Data "+ new Date('Dec 5, 2015'))
// document.write("<br>"+( Math.floor(diff / (1000*60) ))+" seconds had pass since beginning of 2015" );
// Q11
// var preD = new Date();
// var pasD = new Date();
// document.write("<br><br>Current Date: "+preD);
// document.write("<br>1 hour ago, it was "+new Date(pasD.setHours(pasD.getHours() - 1)));
// Q12
// var preD = new Date();
// document.write("Current Date: "+preD);
// document.write("<br>100 years back, it was "+new Date(preD.setYear(preD.getFullYear() - 100)));
// Q13
// var age =+ prompt("Enter your Age");
// document.write("Your Age: "+age);
// document.write("<br>Your birth year is: " + ( (new Date().getFullYear()) - age));
// Q14
// var custName = prompt("Enter Customer name : ");
// var Unit = 450, Charges = 20;
// document.write("<br><br><h2>K-Electric Bill</h2>");
// document.write("<br>Customer Name: <b>"+custName+"</b>");
// document.write("<br>Month: <b>"+new Date().toString().split(' ')[1]+"</b>");
// document.write("<br>Number of Units: <b>"+Unit+"</b>");
// document.write("<br>Charges per unit: <b>"+Charges+"</b>");
// document.write("<br><br>Net Amount Payable (within Due Date): <b>"+(Unit * Charges)+"</b>");
// document.write("<br>Late payment surcharges: <b>"+410+"</b>");
// document.write("<br>Gross Amount Payable (after Due Date): <b>"+(Unit * Charges + 410)+"</b>");


// Chapter 35-38
// Q1
// function currentDate(){
//     return new Date();
// }
// document.write(currentDate());
// Q2
// function greet(firstName, lastName){
//     alert("Hello "+ firstName + " " + lastName);
// }
// greet(prompt("Enter Your First Name"), prompt("Enter Your Last Name"));
// Q3
// function sum(num1, num2){
//     return num1+num2;
// }

// alert("Sum is " +sum(parseInt(prompt("Enter any Number")), parseInt(prompt("Enter any Number"))));
// Q4
// function cal(num1, num2, op){
//     var answer =+ 0;
//     switch (op){
//         case '+':
//             answer = num1 + num2;
//             break;

//         case '-':
//             answer = num1 - num2;
//             break;

//         case '*':
//             answer = num1 * num2;
//             break;

//         case '/':
//             answer = num1 / num2;
//             break;

//         case '%':
//             answer = num1 % num2;
//             break;
        
//         default:
//             answer = 'Invalid operator';
//     }
//     alert(answer);
// }


// var num1 = +prompt("Enter Number: ");
// var num2 = +prompt("Enter Number: ");
// var op = prompt("Enter Operator :");
// cal(num1, num2 , op);
// Q5
// function square(num){
//     return num * num;
// }
// var sq = +prompt("Enter Number")
// alert("Square of "+sq+" is "+square(sq));
// Q6
// function factorialize(num) {
//     if (num === 0 || num === 1)
//       alert(1) ;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     alert(num);
//   }
//   factorialize(+prompt("enter number"));
// Q7
// function counting(start, end){
//     for (let i = start; i <= end; i++){
//         document.write(i+" ");
//     }
//     for (let i = start; i >= end; i--){
//         document.write(i+" ");
//     }
// }
// counting(+prompt("Enter Start point : "), +prompt("Enter End point : "));
// Q9
// function areaorec(width, height){
//     return width*height;
// }
// var width = +prompt("Enter width: ");
// var height = +prompt("Enter height: ");
// alert("Area of rectangle: "+areaorec(width,height));
// alert("Area of rectangle: "+areaorec(5,6));
// Q10
// var text = prompt("Enter any word");
// var f = 0;
// for (let i = 0; i < text.length; i++) {
//     if (!(text[i] == text[text.length - i - 1])){
//         alert("'"+text+"' word is not a palindrome");
//         break;
//     }
//     if (i == (text.length-1)){
//         alert("'"+text+"' word is palindrome");
//     }
// }
// Q11
// var text = prompt("Enter any text : ").split(' ');
// document.write("<br><br>Example String: "+text.join(' '));
// for (let i = 0; i < text.length; i++) {
//     text[i] = text[i][0].toUpperCase() + text[i].slice(1);
// }
// Q13
// function countOcc(string, char){
//     c = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (char == string[i]){
//             c++;
//         }
//     }
//     return c;
// }
// var s = prompt("Enter String");
// var ch = prompt("Enter which letter you want to find find");
// document.write("In string<br>"+s+"<br> has "+countOcc(s, ch)+"occurences of letter "+ch);
//Q14
// function calcCircumference(r){
//     return 2 * 3.14 * r;
// }
// function calcArea(r){
//     return 3.14 * (r * r);
// }   
// document.write("<br>The circumference is "+calcCircumference(4));
// document.write("<br>The Area is "+calcArea(4));
