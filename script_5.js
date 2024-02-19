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
} else if (storeGender == "female") {
    document.getElementById("gender").innerHTML = "เพศหญิง";
}
document.getElementById("bmi").innerHTML = "ค่า BMI : " + (storeWeight/(storeHeight * storeHeight / 10000)).toFixed(2) + " - " + storeBMIMeaning;
document.getElementById("age").innerHTML = "อายุ : " + storeAge + " ปี";
document.getElementById("height").innerHTML = "ส่วนสูง : " + storeHeight + " เซนติเมตร";
document.getElementById("weight").innerHTML = "น้ำหนัก : " + storeWeight + " กิโลกรัม";

var risk_factor = [];

if (storeSBP < 120) {
    document.getElementById("sbp-text").innerHTML = "เหมาะสม";
    document.getElementById('sbp-block').style.display ='none';
} else if (storeSBP >= 120 && storeSBP < 129) {
    document.getElementById("sbp-text").innerHTML = "ปกติ";
    document.getElementById('sbp-block').style.display ='none';
} else if (storeSBP >= 129 && storeSBP < 139) {
    document.getElementById("sbp-text").innerHTML = "ค่อนข้างสูง";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('sbp');
} else if (storeSBP >= 139 && storeSBP < 159) {
    document.getElementById("sbp-text").innerHTML = "สูง";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('ลดระดับความดันโลหิต');
} else if (storeSBP >= 159) {
    document.getElementById("sbp-text").innerHTML = "สูงมาก";
    document.getElementById('sbp-block').style.display ='block';
    risk_factor.push('ลดระดับความดันโลหิต');
} 

const FPGmgdl = storeFPG * 18;
if (FPGmgdl < 100) {
    document.getElementById("fpg-text").innerHTML = "ปกติ";
    document.getElementById('fpg-block').style.display ='block';
} else if (FPGmgdl >= 100 && FPGmgdl < 126) {
    document.getElementById("fpg-text").innerHTML = "เสี่ยงเป็นโรคเบาหวานแฝง";
    document.getElementById('fpg-block').style.display ='block';
} else if (FPGmgdl >= 126) {
    document.getElementById("fpg-text").innerHTML = "เสี่ยงเป็นโรคเบาหวานสูง";
    risk_factor.push('ลดระดับน้ำตาลในเลือด');
    document.getElementById('fpg-block').style.display ='block';
}

const LDLmgdl = storeLDL * 38.6;
if (LDLmgdl < 130) {
    document.getElementById("ldl-text").innerHTML = "ปกติ";
    document.getElementById('ldl-block').style.display ='block';
} else if (LDLmgdl >= 130 && LDLmgdl < 160) {
    document.getElementById("ldl-text").innerHTML = "ค่อนข้างสูง";
    document.getElementById('ldl-block').style.display ='block';
} else if (LDLmgdl >= 160) {
    document.getElementById("ldl-text").innerHTML = "สูง";
    risk_factor.push('ลดระดับคอลเลสเตอรอล');
    document.getElementById('ldl-block').style.display ='block';
}

if (storeACT < 600) {
    document.getElementById("act-text").innerHTML = "ระดับน้อย (ไม่เพียงพอ)";
    risk_factor.push('เพิ่มการออกกำลังกาย');
    document.getElementById('act-block').style.display ='block';
} else if (storeACT >= 600 && storeACT < 1500) {
    document.getElementById("act-text").innerHTML = "ระดับปานกลาง";
    document.getElementById('act-block').style.display ='none';
} else if (storeACT >= 1500 && storeACT < 3000) {
    document.getElementById("act-text").innerHTML = "ระดับปานมาก";
    document.getElementById('act-block').style.display ='none';
}

if (storeSmokeStatus == "never") {
    document.getElementById("smk-text").innerHTML = "ไม่สูบบุหรี่";
    document.getElementById('smk-block').style.display ='none';
} else if (storeSmokeStatus == "current") {
    document.getElementById("smk-text").innerHTML = storeSmokeRoll.toString() + " มวนต่อวัน";
    risk_factor.push('ลดการสูบบุหรี่');
    document.getElementById('smk-block').style.display ='block';
} else if (storeSmokeStatus == "former") {
    document.getElementById("smk-text").innerHTML = "เลิกบุหรี่แล้ว";
    document.getElementById('smk-block').style.display ='block';
} 

if (storeALC < 100) {
    document.getElementById('alc-block').style.display ='none';
} else {
    document.getElementById('alc-block').style.display ='block';
    risk_factor.push('ลดการดื่มแอลกอฮอล์');
}
document.getElementById("alc-text").innerHTML = storeALC.toString() + " กรัมต่อวัน";
document.getElementById("risk-rd").innerHTML = risk_factor.join(', ');

const le_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
                        storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("total-age").innerHTML = (parseFloat(storeAge) + le_value).toFixed(0);
document.getElementById("up-age").innerHTML = le_value.toFixed(0);

//compare each factor
//act >= 4200
const le_act_value = cal_le(4200, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("act-up-age").innerHTML = " " + (le_act_value - le_value).toFixed(0) + " เดือน";

//Alcohol 0 g/day
const le_alc_value = cal_le(storeACT, 0, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("alc-up-age").innerHTML = (le_alc_value - le_value).toFixed(0) + "ปี" ;

//BMI <= 21 kg/m2
const le_bmi_value = cal_le(storeACT, storeALC, 21, 100, storeFPG, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("bmi-up-age").innerHTML = (le_bmi_value - le_value).toFixed(2);

//SBP <= 115 mmHg
const le_sbp_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, 115, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("sbp-up-age").innerHTML = (le_sbp_value - le_value).toFixed(2) + "ปี";

//FPG <= 4.9 mmol/
const le_fpg_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, 4.9, storeLDL, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("fpg-up-age").innerHTML = (le_fpg_value - le_value).toFixed(2);

//LDL <= 1.3 mmol/L
const le_ldl_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, 1.3, storeSBP, storeSmokeStatus, 
    storeSmokeRoll, storeSmokeYos, storeSmokeYoq, storeGender, storeAge)
document.getElementById("ldl-up-age").innerHTML = (le_ldl_value - le_value).toFixed(2);

//Smoking never smoke
const le_smk_value = cal_le(storeACT, storeALC, storeWeight, storeHeight, storeFPG, storeLDL, storeSBP, "never", 
    0, 0, 0, storeGender, storeAge)
document.getElementById("smk-up-age").innerHTML = (le_smk_value - le_value).toFixed(2);

//best life expectancy
const best_le_value = cal_le(4200, 0, 21, 100, 4.9, 1.3, 115, "never", 
    0, 0, 0, storeGender, storeAge)
const le_age = parseFloat(storeAge) + le_value;
const best_le_age = parseFloat(storeAge) + best_le_value;
document.getElementById("best-le-value").innerHTML = (best_le_age).toFixed(2);
document.getElementById("le-value").innerHTML = (le_age).toFixed(2);

percent_age = le_age/best_le_age;
const bar_width = document.getElementById("cp").offsetWidth;
document.getElementById("best-age").style.setProperty("--best-age", (bar_width*(1-percent_age-0.13)).toFixed(2) + "px");
document.getElementById("curr-age").style.setProperty("--le-age", (bar_width*percent_age).toFixed(2) + "px");
document.getElementById("curr-age-text").style.setProperty("--margin-left-text", (bar_width*10/7*(0.15 + 0.7*percent_age)-100).toFixed(2) + "px");