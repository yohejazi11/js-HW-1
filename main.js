
console.log("   q:1 : solved")

/*------------------------Q: 1#------------------------*/
var title = "Welcom to My JavaScript Lesson";

console.log("1 - the length of string is: " + title.length + " characters");
console.log("2 - " + title.substring(0, 12));
console.log("3 - " + title.toUpperCase());
console.log("4 - " + title.toLowerCase());
var replaced = title.replace("Welcom", "Hello");
console.log("5 - " + replaced);
console.log("6 - " + typeof title);

let UDtitle = "";
for (let i = title.length - 1; i >= 0; i--) {
    UDtitle += title[i];
}
console.log(UDtitle);

console.log("   q:2 : solved")

/*------------------------Q: 2#------------------------*/
let one = 10, two = 20, three = 30;
let theBiggest = 0;
let theSmallest = 0;
if (one > two) {
    theBiggest=one;
    theSmallest=two;
    if (one > three) {
        theBiggest = one;
    } else {
        theBiggest = three;
    }
}
if (two > theBiggest) {
    theBiggest = two;
}

console.log("max is : "+theBiggest+", min is : "+theSmallest);






console.log("   q:3 : solved")

/*------------------------Q: 3#------------------------*/

/*3- قم بكتابة برنامج يقوم بتحدية اذا كانت السنة الميلادية كبيسة : (leap year ) : تكون السنة كبيسة اذا كانت تقبل القسمة على 4 و لاتقبل القسمة على 100 فهي كبيسة وايضا اذا كانت تقبل القسمة على 4 وتقبل القسمة على 100 وتقبل القسمة على 400 فهي كبيسة . */



let year = 2023;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " : is leap year");
        }
        else {
            console.log(year + " : is not leap year");

        }
    }
    else {
        console.log(year + " : is leap year");

    }
}
else {
    console.log(year + " : is not leap year");

}


console.log("   q:4 : solved")

/*------------------------Q: 4#------------------------*/


/*-عرف متغير وقم بتعيين رقم له
اكتب عبارة if else للتحقق مما إذا كان الرقم الذي أدخلته زوجيًا أم فرديًا واطبع النتيجة  */

let a = 56;

if (a % 2 == 0) {
    console.log(a + " : is a Even number");
}
else {
    console.log(a + " : is a Individual number");

}

console.log("   q:5 : solved")

/*------------------------Q: 5#------------------------*/
let weight = 53;
let tall = 1.69;

let bmi = weight / (tall * tall);

if (bmi < 15) {
    console.log("نقص حاد جدا في الوزن" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 15 && bmi <= 16) {
    console.log("نقص حاد في الوزن" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 16 && bmi <= 18.5) {
    console.log("نقص في الوزن" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 18.5 && bmi <= 25) {
    console.log("وزن طبيعي " + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 25 && bmi <= 30) {
    console.log("زيادة في الوزن" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 30 && bmi <= 35) {
    console.log("سمنة درجة أولى" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 35 && bmi <= 40) {
    console.log("سمنة درجة ثانية" + bmi + " : كتلة جسمك تساوي");
}
else if (bmi > 40) {
    console.log("سمنة مفرطة جدا" + bmi + " : كتلة جسمك تساوي");
}

console.log("   q:6 : solved")

/*------------------------Q: 6#------------------------*/

let shirtWidth=23;
let shirtLength=30;
let shirtSleeve=8.71;

if(shirtWidth>=18 && shirtWidth<=19.99 && shirtLength >= 28 && shirtLength <=28.99 && shirtSleeve>= 8.13 && shirtSleeve<=8.379)
{
    console.log([shirtWidth,shirtLength,shirtSleeve,"S"]);
}
else if(shirtWidth>=20 && shirtWidth<=21.99 && shirtLength >= 29 && shirtLength <=29.99 && shirtSleeve>= 8.38 && shirtSleeve<=8.62){
    console.log([shirtWidth,shirtLength,shirtSleeve,"M"]);

}
else if(shirtWidth>=22 && shirtWidth<=23.99 && shirtLength >= 30 && shirtLength <=30.99 && shirtSleeve>= 8.63 && shirtSleeve<=8.87){
    console.log([shirtWidth,shirtLength,shirtSleeve,"L"]);

}
else if(shirtWidth>=24 && shirtWidth<=25.99 && shirtLength >= 31 && shirtLength <=32.99 && shirtSleeve>= 8.88 && shirtSleeve<=9.62){
    console.log([shirtWidth,shirtLength,shirtSleeve,"XL"]);

}
else if(shirtWidth>=26 && shirtWidth<=27.99 && shirtLength >= 33 && shirtLength <=33.99 && shirtSleeve>= 9.63 && shirtSleeve<=10.129){
    console.log([shirtWidth,shirtLength,shirtSleeve,"2XL"]);

}
else if(shirtWidth>=28 && shirtLength >= 34  && shirtSleeve >= 10.13){
    console.log([shirtWidth,shirtLength,shirtSleeve,"3XL"]);

}
else if(shirtWidth==18 && shirtLength == 29  && shirtSleeve== 8.47){
    console.log([shirtWidth,shirtLength,shirtSleeve,"NA"]);

}











console.log("   q:7 : solved")

/*------------------------Q: 7#------------------------*/

/*تقليص النص بطول معين
اكتب كود يقوم بتقصير سلسلة نصية إلى طول معين. إذا كان طول السلسلة أكبر من الطول المطلوب، قم بإضافة "..." في نهاية السلسلة. إذا كانت السلسلة أقصر من أو تساوي الطول المطلوب، اطبع السلسلة كما هي.

المطلوب:

إذا تم تقليص النص، أضف "..." في النهاية.
إذا لم يتم تقليص النص، اطبعه كما هو. */

let max=15;
let text="i am yousef omar hejazi i am front end developer, love cat and coffe";

if(text.length>max){
    console.log(text.substring(0,max)+"...");
}
else{
    console.log(text);
}


console.log("   q:8 : solved")

/*------------------------Q: 8#------------------------*/


/*استخرج الكلمات من النص
اكتب كود يقوم باستخراج جميع الكلمات التي تبدأ بحرف معين من سلسلة نصية معينة، ثم طباعة هذه الكلمات في مصفوفة.
المطلوب:
اطبع المصفوفة التي تحتوي على الكلمات التي تبدأ بالحرف المطلوب.
إذا لم يكن هناك كلمات تبدأ بالحرف، اطبع "لا توجد كلمات تبدأ بالحرف المطلوب */

let words=text.split(" ");
let letter="c";
let selectedWords=[];

for(let i=0; i<words.length;i++)
{
    if(words[i].startsWith(letter))
    {
        selectedWords.push(words[i]);
    }
}

console.log(selectedWords);



console.log("   q:9 : unsolved")

/*------------------------Q: 9#------------------------*/

/*احتساب تكرار الحروف
اكتب كود يحتسب عدد تكرار كل حرف في سلسلة نصية. يجب أن تطبع كل حرف مع عدد مرات تكراره في النص.
المطلوب:
تجاهل حالة الأحرف (الكبيرة والصغيرة تُعتبر متساوية).
اطبع الحروف مع عدد مرات تكرار كل منها. */



















console.log("   q:10 : solved")
/*------------------------Q: 10#------------------------*/
/*استبدال الكلمات في النص
اكتب كود يستبدل كل ظهور لكلمة معينة في سلسلة نصية بكلمة أخرى. إذا لم تكن الكلمة موجودة في النص، اطبع "الكلمة غير موجودة في النص".
المطلوب:
اطبع النص بعد إجراء الاستبدال.
تعامل مع الحالات التي لا توجد فيها الكلمة المستبدلة.*/


let sliceText=text.split(" ");
let targetWord="coffe";
let newWord="tea";
for(let i=0;i<sliceText.length;i++)
{
    if(sliceText[i]==targetWord){
        sliceText[i]=newWord;
    }
}
console.log(sliceText.join(" "));












console.log("   q:11 : unsolved")

/*------------------------Q: 11#------------------------*/
/*حذف جميع الأرقام من النص
اكتب كود يقوم بحذف جميع الأرقام الموجودة في سلسلة نصية معينة، ثم طباعة النص الناتج. إذا لم يكن هناك أي أرقام في النص، اطبع "لا توجد أرقام في النص".
المطلوب:
تأكد من التعامل مع النصوص التي تحتوي على أرقام وأخرى لا تحتوي على أرقام. */

let newsentences="i am yousef omar h10ejazi i am fro6nt end dev5eloper, lov2e cat and cof11fe";

for(let i=0;i<newsentences.length;i++)
{

}