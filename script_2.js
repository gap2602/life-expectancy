function cal_bmi() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / (height / 100 * height / 100);
    if (height == 0) {
        var result_bmi = "กรุณากรอกข้อมูลให้ถูกต้อง";
    } else {
        var result_bmi = bmi.toFixed(1);
    }
    let imageshown, meaning, meaning_detail, color_style;
    if (bmi >= 15 && bmi < 18.5) {
        imageshown = "Http pic/1.png";
        meaning = "น้ำหนักต่ำกว่าเกณฑ์/ผอม";
        meaning_detail = "น้ำหนักน้อยกว่าปกตินั้นไม่ดี อาจเสี่ยงต่อการได้รับสารอาหารไม่เพียงพอ ส่งผลให้ร่างกายอ่อนเพลียง่าย การรับประทานอาหารให้เพียงพอและออกกำลังกายแบบเวทเทรนนิ่งเพื่อเสริมสร้างกล้ามเนื้อ สามารถช่วยเพิ่มค่า BMI ให้อยู่ในเกณฑ์ปกติได้";
        color_style = 'color:#FF0000';
    } else if (bmi >= 18.5 && bmi < 23) {
        imageshown = "Http pic/2.png";
        meaning = "น้ำหนักปกติ"
        meaning_detail = "น้ำหนักที่เหมาะสมสำหรับคนไทยคือค่า BMI ระหว่าง 18.5-22.9 จัดอยู่ในเกณฑ์ปกติ ห่างไกลโรคที่เกิดจากความอ้วน และมีความเสี่ยงต่อการเกิดโรคต่าง ๆ น้อยที่สุด ควรพยายามรักษาระดับค่า BMI ให้อยู่ในระดับนี้ให้นานที่สุด";
        color_style = 'color:#067AD3';
    } else if (bmi >= 23 && bmi < 25) {
        imageshown = "Http pic/3.png";
        meaning = "น้ำหนักเกิน"
        meaning_detail = "พยายามอีกนิดเพื่อลดน้ำหนักให้เข้าสู่ค่ามาตรฐาน เพราะค่า BMI ในช่วงนี ยังถือว่าเป็นกลุ่มผู้ที่มีความอ้วนอยู่บ้าง แม้จะไม่ถือว่าอ้วน แต่หากประวัติคนในครอบครัวเคยเป็นโรคเบาหวานและความดันโลหิตสูง ก็ถือว่ายังมีความเสี่ยงมากกว่าคนปกติ";
        color_style = 'color:#FF0000';
    } else if (bmi >= 25 && bmi < 30) {
        imageshown = "Http pic/4.png";
        meaning = "อ้วนระดับ 1"
        meaning_detail = "คุณอ้วนในระดับหนึ่ง ถึงแม้จะไม่ถึงเกณฑ์ที่ถือว่าอ้วนมาก ๆ แต่ก็ยังมีความเสี่ยงต่อการเกิดโรคที่มากับความอ้วนได้เช่นกัน ทั้งโรคเบาหวาน และความดันโลหิตสูง";
        color_style = 'color:#FF0000';
    } else if (bmi >= 30 && bmi < 50) {
        imageshown = "Http pic/5.png";
        meaning = "อ้วนระดับ 2"
        meaning_detail = "ค่อนข้างอันตราย เพราะเข้าเกณฑ์อ้วนมาก เสี่ยงต่อการเกิดโรคร้ายแรงที่แฝงมากับความอ้วน หากค่า BMI อยู่ในระดับนี จะต้องระวังการรับประทานไขมัน และควรออกกำลังกายอย่างสม่ำเสมอ และหากเลขยิ่งสูงกว่า 40.0 ยิ่งแสดงถึงความอ้วนที่มากขึ้น";
        color_style = 'color:#FF0000';
    } else {
        imageshown = "Http pic/2-removebg-preview.png";
        meaning = "ต่ำกว่า/เกินกว่าเกณฑ์มาก";
        meaning_detail = "กรุณาตรวจสอบข้อมูลน้ำหนักส่วนสูงให้ถูกต้อง หากถูกต้องแล้วถ้า BMI < 15 ถือว่าผอมมากๆ เสี่ยงต่อการรับสารอาหารไม่เพียงพอ ถ้า BMI > 50 ถือว่าอ้วนมากๆ เสี่ยงเสี่ยงต่อปัญหาสุขภาพมากมาย";
        color_style = 'color:#FF0000';
    }
    
    document.getElementById('img').src = imageshown;
    document.getElementById("result-bmi-text").innerHTML = meaning;
    document.getElementById("result-bmi").innerHTML = result_bmi;
    document.getElementById("result-bmi-meaning").innerHTML = meaning_detail;
    document.getElementById("result-bmi-text").style = color_style;
    document.getElementById("result-bmi").style = color_style;
    
    return meaning;
}

function checkInput() {
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const meaning = cal_bmi();

    if (gender == null){
        document.getElementById("gender-w").style.visibility = "visible";
    } else {
        document.getElementById("gender-w").style.visibility = "hidden";
    }

    if (age.value == "" || age.value < 25 || age.value > 100) {
        document.getElementById("age-w").style.visibility = "visible";
        document.getElementById("range-warning").style.visibility = "visible";
        document.getElementById("age").style.borderColor = "red";
    } else {
        document.getElementById("age-w").style.visibility = "hidden";
        document.getElementById("range-warning").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = "#E6E6E6";
    }

    if (height.value == ""){
        document.getElementById("height-w").style.visibility = "visible";
        document.getElementById("height").style.borderColor = "red";
    } else {
        document.getElementById("height-w").style.visibility = "hidden";
        document.getElementById("height").style.borderColor = "#E6E6E6";
    }

    if (weight.value == ""){
        document.getElementById("weight-w").style.visibility = "visible";
        document.getElementById("weight").style.borderColor = "red";
    } else {
        document.getElementById("weight-w").style.visibility = "hidden";
        document.getElementById("weight").style.borderColor = "#E6E6E6";
    }
    
    if (weight.value == "" || height.value == "" || age.value == "" || gender == null || age.value < 25 || age.value > 100) {
    } else {
        sessionStorage.setItem('gender', gender.value);
        sessionStorage.setItem('age', age.value);
        sessionStorage.setItem('height', height.value);
        sessionStorage.setItem('weight', weight.value);
        sessionStorage.setItem('bmi-meaning', meaning);
        window.location.href = "page_3.html";
    }

}