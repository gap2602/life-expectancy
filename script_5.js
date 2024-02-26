function cal_le(act_value, alc_value, weight_value, height_value, fpg_value, ldl_value, sbp_value, smk_status, 
                smk_roll, smk_yos, smk_yoq, gender_value, age_value) {

    const [ar_dis_act, ar_act] = rr_act(act_value);
    const [ar_dis_alc, ar_alc] = rr_alc(alc_value);
    const [ar_dis_bmi, ar_bmi] = rr_bmi(weight_value, height_value);
    const [ar_dis_fpg, ar_fpg] = rr_fpg(fpg_value);
    const [ar_dis_ldl, ar_ldl] = rr_ldl(ldl_value);
    const [ar_dis_sbp, ar_sbp] = rr_sbp(sbp_value);
    const [ar_dis_smk, ar_smk] = rr_smk(smk_status, smk_roll, smk_yos, smk_yoq);
    const ar_death_rate = death_rate(gender_value);
    const ar_combine = rr_combine(gender_value, ar_dis_act, ar_act, ar_dis_alc, ar_alc, ar_dis_bmi, ar_bmi, ar_dis_fpg, 
                              ar_fpg, ar_dis_ldl, ar_ldl, ar_dis_sbp, ar_sbp, ar_dis_smk, ar_smk, ar_death_rate);
    const le_value = le(age_value, gender_value, ar_combine);

    return le_value
}

function cal_age_month(age_num) {
    const dec = age_num - Math.floor(age_num);
    const age_month = Math.floor(dec*12);
    return [age_num.toFixed(0), age_month.toFixed(0)]
}

function cal_risk_age_month(age_num) {
    const dec = age_num - Math.floor(age_num);
    const age_month = Math.floor(dec*12);
    if (age_num < 1) {
        return " " + age_month.toFixed(0) + " เดือน"
    } else {
        return " " + age_num.toFixed(1) + " ปี"
    }
}

const storeGender = sessionStorage.getItem('gender');
const storeAge = sessionStorage.getItem('age');
const storeHeight = sessionStorage.getItem('height');
const storeWeight = sessionStorage.getItem('weight');
const storeBMIMeaning = sessionStorage.getItem('bmi-meaning');
const storeSBP = sessionStorage.getItem('sbp');
const storeFPG = sessionStorage.getItem('fpg');
const storeLDL = sessionStorage.getItem('ldl');
const storeACT = sessionStorage.getItem('act');
const storeSmokeStatus = sessionStorage.getItem('smk-status');
const storeSmokeRoll = sessionStorage.getItem('smk-roll');
const storeSmokeYos = sessionStorage.getItem('smk-yos');
const storeSmokeYoq = sessionStorage.getItem('smk-yoq');
const storeALC = sessionStorage.getItem('alc-amt');

if (storeGender == "male") {
    document.getElementById("gender").innerHTML = "เพศชาย";
    document.getElementById("best-le-gender").innerHTML = "เพศชาย";
} else if (storeGender == "female") {
    document.getElementById("gender").innerHTML = "เพศหญิง";
    document.getElementById("best-le-gender").innerHTML = "เพศหญิง";
}
const bmi = storeWeight/(storeHeight * storeHeight / 10000);
document.getElementById("bmi").innerHTML = "ค่า BMI : " + (bmi).toFixed(2) + " - " + storeBMIMeaning;
document.getElementById("age").innerHTML = "อายุ : " + storeAge + " ปี";
document.getElementById("height").innerHTML = "ส่วนสูง : " + storeHeight + " เซนติเมตร";
document.getElementById("weight").innerHTML = "น้ำหนัก : " + storeWeight + " กิโลกรัม";

var risk_factor = ["หากต้องการมีสุขภาพได้ดีและอายุที่ยืนนานแนะนำให้"];

if (storeSmokeStatus == "never") {
    document.getElementById("smk-text").innerHTML = "ไม่สูบบุหรี่";
    document.getElementById('smk-block').style.display ='none';
} else if (storeSmokeStatus == "current") {
    document.getElementById("smk-text").innerHTML = storeSmokeRoll.toString() + " มวนต่อวัน";
    document.getElementById('smk-block').style.display ='block';
    risk_factor.push('งดการสูบบุหรี่');
} else if (storeSmokeStatus == "former") {
    document.getElementById("smk-text").innerHTML = "เลิกบุหรี่แล้ว";
    document.getElementById('smk-block').style.display ='none';
}

if (storeALC <= 0) {
    document.getElementById('alc-block').style.display ='none';
} else {
    document.getElementById('alc-block').style.display ='block';
    risk_factor.push('งดการดื่มเครื่องดื่มที่มีแอลกอฮอล์ ');
}

if (bmi < 18.5) {
    document.getElementById('bmi-block').style.display ='block';
    document.getElementById("risk-body").style.backgroundImage = "url('image_ref/1_resize.png')";
    risk_factor.push('รับประทานอาหารให้เพียงพอและออกกำลังกายเสริมสร้างกล้ามเนื้อเพื่อให้ค่าดัชนีมวลกาย (BMI) ให้อยู่ในระดับปกติ');
} else if (bmi >= 18.5 && bmi < 23) {
    document.getElementById('bmi-block').style.display ='none';
    document.getElementById("risk-body").style.backgroundImage = "url('image_ref/2_resize.png')";
} else if (bmi >= 23 && bmi < 25) {
    document.getElementById('bmi-block').style.display ='block';
    document.getElementById("risk-body").style.backgroundImage = "url('image_ref/3_resize.png')";
    risk_factor.push('ควบคุมน้ำหนักเพื่อให้ค่าดัชนีมวลกาย (BMI) อยู่ในระดับปกติ ');
} else if (bmi >= 25 && bmi < 30) {
    document.getElementById('bmi-block').style.display ='block';
    document.getElementById("risk-body").style.backgroundImage = "url('image_ref/4_resize.png')";
    risk_factor.push('ควบคุมน้ำหนัก เนื่องจากค่า BMI ในช่วงนี้มีความเสี่ยงต่อการเกิดโรคที่มากับความอ้วนได้');
} else if (bmi >= 30) {
    document.getElementById('bmi-block').style.display ='block';
    document.getElementById("risk-body").style.backgroundImage = "url('image_ref/5_resize.png')";
    risk_factor.push('ปรับพฤติกรรมการรับประทานอาหาร ออกกำลังกายอย่างสม่ำเสมอ');
}

if (storeACT < 600) {
    document.getElementById("act-text").innerHTML = "ระดับน้อย<br>(ไม่เพียงพอ)";
    document.getElementById('act-block').style.display ='block';
    risk_factor.push('เพิ่มกิจกรรมทางกายให้มากขึ้น');
} else if (storeACT >= 600 && storeACT < 1500) {
    document.getElementById("act-text").innerHTML = "ระดับปานกลาง";
    document.getElementById('act-block').style.display ='block';
    risk_factor.push('เพิ่มระยะเวลาของกิจกรรมทางกายในส่วนความแข็งแรงและความยืดหยุ่นของกล้ามเนื้อ');
} else if (storeACT >= 1500 ) {
    document.getElementById("act-text").innerHTML = "ระดับมาก";
    document.getElementById('act-block').style.display ='none';
    //risk_factor.push('รักษาความสม่ำเสมอในการมีกิจกรรมทางกายอย่างต่อเนื่อง');
}

if (storeSBP < 120) {
    document.getElementById("sbp-text").innerHTML = "เหมาะสม";
    document.getElementById('sbp-block').style.display ='none';
} else if (storeSBP >= 120 && storeSBP < 129) {
    document.getElementById("sbp-text").innerHTML = "ปกติ";
    document.getElementById('sbp-block').style.display ='none';
} else if (storeSBP >= 129 && storeSBP < 139) {
    document.getElementById("sbp-text").innerHTML = "ค่อนข้างสูง";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('ควบคุมระดับความดันโลหิตให้อยู่ระดับปกติ');
} else if (storeSBP >= 139 && storeSBP < 159) {
    document.getElementById("sbp-text").innerHTML = "สูง";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('ควบคุมระดับความดันโลหิตให้อยู่ระดับปกติ');
} else if (storeSBP >= 159) {
    document.getElementById("sbp-text").innerHTML = "สูงมาก";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('ควบคุมระดับความดันโลหิตให้อยู่ระดับปกติ');
} 

const FPGmgdl = storeFPG * 18;
if (FPGmgdl < 100) {
    document.getElementById("fpg-text").innerHTML = "ปกติ";
    document.getElementById('fpg-block').style.display ='none';
} else if (FPGmgdl >= 100 && FPGmgdl < 126) {
    document.getElementById("fpg-text").innerHTML = "เสี่ยงเป็นโรค<br>เบาหวานแฝง";
    document.getElementById('fpg-block').style.display ='block';
    risk_factor.push('ควบคุมระดับน้ำตาลในเลือด และปรับพฤติกรรมการบริโภคน้ำตาล');
} else if (FPGmgdl >= 126) {
    document.getElementById("fpg-text").innerHTML = "เสี่ยงเป็นโรค<br>เบาหวานสูง";
    document.getElementById('fpg-block').style.display ='block';
    risk_factor.push('ควบคุมระดับน้ำตาลในเลือด และปรับพฤติกรรมการบริโภคน้ำตาล');
}

const LDLmgdl = storeLDL * 38.6;
if (LDLmgdl < 130) {
    document.getElementById("ldl-text").innerHTML = "ปกติ";
    document.getElementById('ldl-block').style.display ='none';
} else if (LDLmgdl >= 130 && LDLmgdl < 160) {
    document.getElementById("ldl-text").innerHTML = "ค่อนข้างสูง";
    document.getElementById('ldl-block').style.display ='block';
    risk_factor.push('หลีกเลี่ยงการรับประทานอาหารที่มีคอเลสเตอรอลสูง');
} else if (LDLmgdl >= 160) {
    document.getElementById("ldl-text").innerHTML = "สูง";
    document.getElementById('ldl-block').style.display ='block';
    risk_factor.push('หลีกเลี่ยงการรับประทานอาหารที่มีคอเลสเตอรอลสูง');
}

if (storeSBP >= 159 || FPGmgdl >= 126 || LDLmgdl >= 160) {
    risk_factor.push('และพบแพทย์');
}

if (risk_factor.length == 1) {
    risk_factor = ["ผลการประเมินสุขภาพของคุณอยู่ในเกณฑ์ปกติดี หมั่นรักษาสุขภาพเพื่อให้มีอายุที่ยืนยาว"]
    document.getElementById("sg-topic-1").style.display = 'none';
}

document.getElementById("alc-text").innerHTML = storeALC.toString() + " กรัมต่อวัน";
document.getElementById("risk-rd").innerHTML = risk_factor.join(' ');

const le_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
                        storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge);
const [total_age_year, total_age_month] = cal_age_month(parseFloat(storeAge) + le_value);                      
document.getElementById("total-age-year").innerHTML = total_age_year;
document.getElementById("total-age-month").innerHTML = total_age_month;
document.getElementById("up-age").innerHTML = le_value.toFixed(0);

//compare each factor
//act >= 4200
const le_act_value = cal_le(4200, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("act-up-age").innerHTML = cal_risk_age_month((le_act_value - le_value));

//Alcohol 0 g/day
const le_alc_value = cal_le(storeACT, 0, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("alc-up-age").innerHTML = cal_risk_age_month((le_alc_value - le_value));

//BMI <= 21 kg/m2
const le_bmi_value = cal_le(storeACT, storeALC, 21, 100, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("bmi-up-age").innerHTML = cal_risk_age_month((le_bmi_value - le_value));

//SBP <= 115 mmHg
const le_sbp_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, 115, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("sbp-up-age").innerHTML = cal_risk_age_month((le_sbp_value - le_value));

//FPG <= 4.9 mmol/
const le_fpg_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, 4.9, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("fpg-up-age").innerHTML = cal_risk_age_month((le_fpg_value - le_value));

//LDL <= 1.3 mmol/L
const le_ldl_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, 1.3, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("ldl-up-age").innerHTML = cal_risk_age_month((le_ldl_value - le_value));

//Smoking never smoke
const le_smk_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, "never", 
    0, 0, 0, storeGender, storeAge)
document.getElementById("smk-up-age").innerHTML = cal_risk_age_month((le_smk_value - le_value));

//best life expectancy
const best_le_value = cal_le(4200, 0, 21, 100, 4.9, 1.3, 115, "never", 0, 0, 0, storeGender, storeAge);
const le_age = parseFloat(storeAge) + le_value;
const best_le_age = parseFloat(storeAge) + best_le_value;
document.getElementById("best-le-value").innerHTML = (best_le_age).toFixed(0) + " ปี";
document.getElementById("le-value").innerHTML = (le_age).toFixed(0);

document.getElementById("last-tt-age").innerHTML = (le_age).toFixed(0) + " ปี";
const diff_age = (best_le_age).toFixed(0) - (le_age).toFixed(0);
if (diff_age.toFixed(0) == "0") {
    document.getElementById("last-diff-age").innerHTML = "ผลการวิจัยคาดการณ์ว่าคุณมีอายุคาดเฉลี่ยเท่ากับผู้ที่ไม่มีปัจจัยเสี่ยงทางด้านสุขภาพ";
} else {
    document.getElementById("last-diff-age").innerHTML = "ผลการวิจัยคาดการณ์ว่าคุณจะมีอายุเพิ่มขึ้นได้อีก " + (diff_age).toFixed(0) + " ปี";
}

percent_age = le_age/best_le_age;
const bar_width = document.getElementById("cp").offsetWidth;
const bar_text_width = document.getElementById("curr-age-text").offsetWidth;
document.getElementById("best-age").style.setProperty("--best-age", (bar_width*(1-percent_age-0.13)).toFixed(2) + "px");
document.getElementById("curr-age").style.setProperty("--le-age", (bar_width*percent_age).toFixed(2) + "px");
document.getElementById("curr-age-text").style.setProperty("--margin-left-text", (bar_width/0.7*(0.15 + 0.7*percent_age)-100).toFixed(2) + "px");