let trans = document.getElementById("arabic");
trans.onclick =()=>{
   //navbar translate
   document.getElementById("translate_a").textContent = "الرئيسية"; 
   document.getElementById("translate_a_1").textContent ="توجهاتنا";
   document.getElementById("translate_a_2").textContent ="المقالات";
   document.getElementById("exams-trans").textContent = "اللغة";
   //landpage translate
   let h =document.getElementById("translate_h");
   h.textContent ="فريق محيط كريبتو";
   h.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p").textContent = "ابدأ رحلتك معنا";
   let a = document.getElementById("searchAria");
       a.setAttribute("placeholder","         اكتب عنوان المقالة بالانكليزية واضغط ايقونةالبحث ");
   document.getElementById("translate_btn").textContent ="المزيد";
   //services translate
   let j = document.getElementById("translate_h2");
   j.textContent ="الخدمات";
   j.style.fontFamily="Changa","sans-serif";
   let k = document.getElementById("translate_h3");
   k.textContent ="مجتمعاتنا";
   k.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p1").textContent ="";
   let r= document.getElementById("translate_h3_1");
   r.textContent ="تابعنا على تويتر";
   r.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p2").textContent ="";
   let e = document.getElementById("translate_h3_2");
   e.textContent ="خدمات المشاريع";
   e.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p3").textContent ="تحتوي هذه الدورات التدريبية على خطة رائعة لتعلم التشفير بأفضل طريقة!";
   let q =document.getElementById("translate_h3_3");
   q.textContent ="بوت";
   q.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p4").textContent ="!!قريبا";
   //libaray view translate
   let f = document.getElementById("translate_h2_1");
   f.textContent ="نظرة عامة على الفريق";
   f.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_h3_4").textContent ="!هيا لنبدأ الان";
   let b = document.getElementById("translate_p5");
       b.textContent ="نقدم المساعدة في جميع جوانب التشفير. لدينا الخبرة وفريقنا الخاص لبناء مجتمعات المشاريع والمساهمة في الترويج الناجح. ثقتنا هي أساس العمل الذي نقوم به. نحن نضمن بيئة استثمارية ناجحة لقيادة المشروع دائمًا نحو الأفضل. مع كل الحب فريق محيط كريبتو ";
       b.classList.add("text-right");
   //course translate
   let l =document.getElementById("translate_h2_2");
   l.textContent ="المقالات";
   l.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_h5").textContent ="الفيديوهات التعليمية";
	  document.getElementById("translate_p6").textContent ="هذا الدرس يحوي على مبادئ الكريبتو الاساسية التي يجب على كل شخص معرفتها ";
 
   let d = document.querySelectorAll("#translate_a_3");
   for(let i=0; i<8; i++){
       d[i].textContent ="التفاصيل";
   }
   document.getElementById("translate_h5_1").textContent ="كأس العالم الموسم الأول";
   document.getElementById("translate_h5_2").textContent ="كأس العرب";
   document.getElementById("translate_h5_3").textContent ="كأس العالم الموسم الثاني";
   document.getElementById("translate_h5_4").textContent ="تطبيق محادثة ومحفظة كريبتو iMe";
   document.getElementById("translate_h5_5").textContent ="!!قريبا";
   document.getElementById("translate_h5_6").textContent ="!!قريبا";
   document.getElementById("translate_h5_7").textContent ="!!قريبا";
   //student comments translate
   let m =document.getElementById("translate_h2_3");
   m.textContent="المراجعات";
   m.style.fontFamily="Changa","sans-serif";
   document.getElementById("translate_p7").textContent ="إنه موقع رائع ساعدني لابدأ طريقي بشكل صحيح";
   document.getElementById("translate_p8").textContent ="كل ما أحتاجه من البداية إلى النهاية وجدته هنا إنه فريد";
   document.getElementById("translate_p9").textContent ="فقط كلمة واحدة إنه مذهل";
   //who visit us translate
   let x =document.getElementById("translate_h3_6");
   x.textContent="الطلاب الذين بدأوا دروسنا";
   x.style.fontFamily="Changa","sans-serif";
   let v =document.getElementById("translate_h3_5");
   v.textContent="الذين زارونا";
   v.style.fontFamily="Changa","sans-serif";
   //footer translte
   let dev  =document.getElementById("translate_h3_7");
   dev.textContent=":طور من قبل ";
   dev.style.fontFamily="Changa","sans-serif";
   let us= document.getElementById("first-1");
   us.textContent="من نحن؟";
   us.style.fontFamily="Changa","sans-serif";
   document.getElementById("answer-1").textContent="فريق عمل متكامل  نهدف لنشر مجال الكريبتو على أوسع نطاق";
   document.getElementById("first-2").textContent="ماذا تحوي هذه المكتبة";
   document.getElementById("answer-2").textContent="تحوي هذه المكتبة دروس في مختلف المجالات المطلوبة إلى اليوم وهذه الدروس مجانية ولديها أعلى تقييم ومشاهدة بالإضافة للمقالات المختصة ببعض المشاريع والأحداث";
   document.getElementById("translate_h3_8").textContent=":تواصل";
}
