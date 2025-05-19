//map: زمانی استفاده می کنیم که یک خروجی داشته باشیم و آن خروجی یک آرایه باشد، در واقع یک حلقه است که به تعداد دفعاتی برابر با تعداد اندیس های آرایه حلقه را تکرار می کند و هر بار یکی از اندیس ها را به عنوان آرگومان در فانکشن دریافت می کند و دستورات داخل بلاک را اجرا و سپس حلقه را تکرار می کند
// const array=[1,2,3];
// const result=array.map((num,index)=>{
//     // return num*10;
//     return {id:index , num:num*10}
// })
// console.log(result);

//--ForEach
// const fruits=['apple','banana','orange']
// fruits.forEach((fruit,index)=>{
//     console.log(`${index+1}-${fruit}`);    
// })

// const items=document.querySelectorAll("p");
//در واقع تمامی تگ های پی رو داخل یک آرایه ذخیره می کند، در واقع آرایه نیست و شبیه به آرایه است(NodeList)و حالا می توانیم توسط forEach حلقه بزنیم.
// items.forEach(item=>item.style.color="blue");

//--Find(): متدی برای یافتن مقدار موردنظر در بین عناصر یک آرایه
// const numbers=[10,5,25,30];
// const found=numbers.find((num)=>{
//     return num>10;
// })
// console.log(found);

//--Filter():متدی شبیه به فایند برای جستجو بین عناصر آرایه که خروجی آن صرفا یک آرایه است
// const numbers1=[3,8,15,20,25];
// const found1=numbers1.filter((num)=>num>10);

// console.log(found1);
// found1.forEach((num)=>{
//     console.log(num*10);
    
// })

//--Every():متدی برای سرچ در بین آرایه ها که صرفا خروجی True یا False  دارد