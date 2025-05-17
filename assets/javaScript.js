const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const familyInput = document.getElementById("family");
const emailInput = document.getElementById("email");
const jobInput = document.getElementById("job");
const phoneInput = document.getElementById("phone");
const genderSelect = document.getElementById("gender");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

let people = [];

form.addEventListener("submit",function(e) {
    //e:رویداد به صورت پراپس در فانکشن ارسال می شود
    e.preventDefault() //با این کار جلوی رفتاری که باعث ریلود شدن صفحه میشد،گرفتیم
    const newPerson={
        name : nameInput.value.trim(),
        family : familyInput.value.trim(),
        email : emailInput.value.trim(),
        job : jobInput.value.trim(),
        phone : phoneInput.value.trim(),
        gender : genderSelect.value
    }

    if(!newPerson.name || !newPerson.family || !newPerson.email){
        alert("لطفا مقادیر خالی را پر نمایید❌");
        return
    }

    people.push(newPerson);
    form.reset()
    //reset: متدی برای برگرداندن اینپوتهای یک فرم به حالت اولیه و صرفا برای فرم ها استفاده می شود
    console.log(people);

    document.getElementById("showModal").addEventListener("click",()=>{
        if(people.length===0){
            modal.innerHTML=`<h3>هنوز کاربری ثبت نشده است.</h3>`
        }else{
            modal.innerHTML=`<h3>لیست کاربران</h3>`
            const list=document.createElement("ul");

            people.map((person,index)=>{
                const li=document.createElement("li");

                // const name=person.name;
                // const family=person.family;
                // const job=person.job;
                // const email=person.email;
                // const phone=person.phone;
                // const gender=person.gender;

                //Destructuring Assignment(بازکردن ترکیب): روش بهتر و خلاصه تر نسبت به تعریف متغییر های بالا 
                const {name,family,email,phone,job,gender}=person;

                li.innerText=`${index + 1}.${name} ${family}
                ایمیل : ${email}
                شغل : ${job || "----"}
                تلفن :${phone || "----"}
                جنسیت :${gender || "----"}`;

                list.appendChild(li)
            })
            modal.appendChild(list)
            console.log(people);
           
        }
        overlay.style.opacity="1";
        overlay.style.visibility="visible";
        modal.style.opacity="1";
        modal.style.visibility="visible";

    })
    //بستن مدال با کلیک روی پس زمینه
    overlay.addEventListener("click",()=>{
        overlay.style.opacity="0";
        overlay.style.visibility="hidden";
        modal.style.opacity="0";
        modal.style.visibility="hidden";
    })
    
    
})

//map:در واقع یک حلقه است که به تعداد دفعاتی برابر با تعداد اندیس های آرایه حلقه را تکرار می کند و هر بار یکی از اندیس ها را به عنوان آرگومان در فانکشن دریافت می کند و دستورات داخل بلاک را اجرا و سپس حلقه را تکرار می کند
// const array=[1,2,3];
// const result=array.map((num,index)=>{
//     // return num*10;
//     return {id:index , num:num*10}
// })
// console.log(result);
