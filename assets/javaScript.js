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

//افزودن کاربر جدید به لیست
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
})

//نمایش همه کاربران
document.getElementById("showModal").addEventListener("click",()=>{
    if(people.length===0){
        modal.innerHTML=`<h3>هنوز کاربری ثبت نشده است.</h3>`
    }else{
        modal.innerHTML=`<h3>لیست کاربران</h3>`
        const list=document.createElement("ul");

        // people.map((person,index)=>{
        //     const li=document.createElement("li");

            // const name=person.name;
            // const family=person.family;
            // const job=person.job;
            // const email=person.email;
            // const phone=person.phone;
            // const gender=person.gender;

        people.forEach((person,index)=>{
            const li=document.createElement("li");
            //forEach():حلقه ای که دقیقا شبیه به مپ رفتار می کنه،صرفا برای مواقعی که هدف ما از حلقه یک عملیات باشد و نیاز به مقدار خروجی نداشته باشیم، و همچنین روی المان های اچ تی ام ال هم آرایه بزنیم (NodeList:یک مجموعه شبیه آرایه از المان های اچ تی ام ال)

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

//پیدا کردن با ایمیل
document.getElementById("findByEmail").addEventListener("click",()=>{
    const emailToFind = prompt("لطفا ایمیل را وارد نمایید:");
    // const person = people.find((p)=>{return p.email ===emailToFind.trim()});
    //حالت تک خطی:
    const person = people.find(p=> p.email ===emailToFind.trim());

    if(person){
        const {name,family,job,phone,gender}=person
        modal.innerHTML=`
        <h3>فرد یافت شد:</h3>
        <p>نام :${name}</p>
        <p>نام خانوادگی :${family}</p>
        <p>شغل :${job}</p>
        <p>شماره تماس :${phone}</p>
        <p>جنسیت :${gender}</p>`;
    }else{
        modal.innerHTML = `<p>فردی با این ایمیل یافت نشد😒</p>`
    }
    overlay.style.opacity="1";
    overlay.style.visibility="visible";
    modal.style.opacity="1";
    modal.style.visibility="visible";

})

