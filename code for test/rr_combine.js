function rr_combine() {
    const result = document.getElementById("result_combine");
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const [disease_act, risk_act_all] = rr_act();
    const [disease_alc, risk_alc_all] = rr_alc();
    const [disease_bmi, risk_bmi_all] = rr_bmi();
    const [disease_fpg, risk_fpg_all] = rr_fpg();
    const [disease_ldl, risk_ldl_all] = rr_ldl();
    const [disease_sbp, risk_sbp_all] = rr_sbp();
    const [disease_smk, risk_smk_all] = rr_smk();
    const dr = death_rate();

    let all_diseases;
    if (gender == "male") {
        all_diseases = ['Alzheimer disease and other dementias', 'Aortic aneurysm', 'Asthma', 'Atrial fibrillation and flutter', 'Bladder cancer',
                        'Chronic kidney disease', 'Chronic obstructive pulmonary disease', 'Cirrhosis and other chronic liver diseases',
                        'Colon and rectum cancer', 'Diabetes mellitus', 'Endocarditis', 'Epilepsy', 'Esophageal cancer', 'Gallbladder and biliary diseases',
                        'Gallbladder and biliary tract cancer', 'Gout', 'HIV/AIDS', 'Hypertensive heart disease', 'Intracerebral hemorrhage',
                        'Ischemic heart disease', 'Ischemic stroke', 'Kidney cancer', 'Larynx cancer', 'Leukemia', 'Lip and oral cavity cancer', 'Liver cancer',
                        'Lower respiratory infections', 'Multiple myeloma', 'Multiple sclerosis', 'Nasopharynx cancer', 'Non-rheumatic calcific aortic valve disease',
                        'Osteoarthritis', 'Other cardiomyopathy', 'Other pharynx cancer', 'Pancreatic cancer', 'Pancreatitis', "Parkinson's disease",
                        'Peptic ulcer disease', 'Peripheral artery disease', 'Prostate cancer', 'Rheumatic heart disease', 'Rheumatoid arthritis',
                        'Road injuries', 'Self-harm and interpersonal violence', 'Stomach cancer', 'Subarachnoid hemorrhage', 'Thyroid cancer',
                        'Tracheal, bronchus, and lung cancer', 'Tuberculosis', 'Unintentional injuries'];
        risk_act = risk_act_all.slice(0, risk_act_all.length / 2);
        risk_alc = risk_alc_all.slice(0, risk_alc_all.length / 2);
        risk_bmi = risk_bmi_all.slice(0, risk_bmi_all.length / 2);
        risk_fpg = risk_fpg_all.slice(0, risk_fpg_all.length / 2);
        risk_ldl = risk_ldl_all.slice(0, risk_ldl_all.length / 2);
        risk_sbp = risk_sbp_all.slice(0, risk_sbp_all.length / 2);
        risk_smk = risk_smk_all.slice(0, risk_smk_all.length / 2);
    } else {
        all_diseases = ['Alzheimer disease and other dementias', 'Aortic aneurysm', 'Asthma', 'Atrial fibrillation and flutter', 'Bladder cancer',
                        'Breast cancer', 'Cervical cancer', 'Chronic kidney disease', 'Chronic obstructive pulmonary disease', 'Cirrhosis and other chronic liver diseases',
                        'Colon and rectum cancer', 'Diabetes mellitus', 'Endocarditis', 'Epilepsy', 'Esophageal cancer', 'Gallbladder and biliary diseases',
                        'Gallbladder and biliary tract cancer', 'Gout', 'HIV/AIDS', 'Hypertensive heart disease', 'Intracerebral hemorrhage',
                        'Ischemic heart disease', 'Ischemic stroke', 'Kidney cancer', 'Larynx cancer', 'Leukemia', 'Lip and oral cavity cancer', 'Liver cancer', 
                        'Lower respiratory infections', 'Multiple myeloma', 'Multiple sclerosis', 'Nasopharynx cancer', 'Non-rheumatic calcific aortic valve disease',
                        'Osteoarthritis', 'Other cardiomyopathy', 'Other pharynx cancer', 'Ovarian cancer', 'Pancreatic cancer', 'Pancreatitis',
                        "Parkinson's disease", 'Peptic ulcer disease', 'Peripheral artery disease', 'Rheumatic heart disease', 'Rheumatoid arthritis',
                        'Road injuries', 'Self-harm and interpersonal violence', 'Stomach cancer', 'Subarachnoid hemorrhage', 'Thyroid cancer',
                        'Tracheal, bronchus, and lung cancer', 'Tuberculosis', 'Unintentional injuries'];
        risk_act = risk_act_all.slice(risk_act_all.length / 2);
        risk_alc = risk_alc_all.slice(risk_alc_all.length / 2);
        risk_bmi = risk_bmi_all.slice(risk_bmi_all.length / 2);
        risk_fpg = risk_fpg_all.slice(risk_fpg_all.length / 2);
        risk_ldl = risk_ldl_all.slice(risk_ldl_all.length / 2);
        risk_sbp = risk_sbp_all.slice(risk_sbp_all.length / 2);
        risk_smk = risk_smk_all.slice(risk_smk_all.length / 2);
    }

    var all_rr_act = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_alc = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_bmi = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_fpg = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_ldl = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_sbp = Array(all_diseases.length * 13).fill(1.000);
    var all_rr_smk = Array(all_diseases.length * 13).fill(1.000);


    for (let i = 0; i < risk_act.length; i++) {
        let disease_index = all_diseases.indexOf(disease_act[i%(disease_act.length)])
        if  (disease_index == -1) {}
        else {all_rr_act[Math.floor(i/disease_act.length)*all_diseases.length + disease_index] = risk_act[i];}
    }

    for (let i = 0; i < risk_alc.length; i++) {
        let disease_index = all_diseases.indexOf(disease_alc[i%(disease_alc.length)])
        if  (disease_index == -1) {}
        else {all_rr_alc[Math.floor(i/disease_alc.length)*all_diseases.length + disease_index] = risk_alc[i];}
    }

    for (let i = 0; i < risk_bmi.length; i++) {
        let disease_index = all_diseases.indexOf(disease_bmi[i%(disease_bmi.length)])
        if  (disease_index == -1) {}
        else {all_rr_bmi[Math.floor(i/disease_bmi.length)*all_diseases.length + disease_index] = risk_bmi[i];}
    }

    for (let i = 0; i < risk_fpg.length; i++) {
        let disease_index = all_diseases.indexOf(disease_fpg[i%(disease_fpg.length)])
        if  (disease_index == -1) {}
        else {all_rr_fpg[Math.floor(i/disease_fpg.length)*all_diseases.length + disease_index] = risk_fpg[i];}
    }

    for (let i = 0; i < risk_ldl.length; i++) {
        let disease_index = all_diseases.indexOf(disease_ldl[i%(disease_ldl.length)])
        if  (disease_index == -1) {}
        else {all_rr_ldl[Math.floor(i/disease_ldl.length)*all_diseases.length + disease_index] = risk_ldl[i];}
    }

    for (let i = 0; i < risk_sbp.length; i++) {
        let disease_index = all_diseases.indexOf(disease_sbp[i%(disease_sbp.length)])
        if  (disease_index == -1) {}
        else {all_rr_sbp[Math.floor(i/disease_sbp.length)*all_diseases.length + disease_index] = risk_sbp[i];}
    }

    for (let i = 0; i < risk_smk.length; i++) {
        let disease_index = all_diseases.indexOf(disease_smk[i%(disease_smk.length)])
        if  (disease_index == -1) {}
        else {all_rr_smk[Math.floor(i/disease_smk.length)*all_diseases.length + disease_index] = risk_smk[i];}
    }

    var all_rr_combine = Array(all_diseases.length * 13);

    for (let i = 0; i < all_diseases.length * 13; i++) {
        all_rr_combine[i] = all_rr_act[i] * all_rr_alc[i] * all_rr_bmi[i] * all_rr_fpg[i] * all_rr_ldl[i] * all_rr_sbp[i] * all_rr_smk[i];
    }

    var all_rr_adj_dr = Array(all_diseases.length * 13);

    for (let i = 0; i < all_diseases.length * 13; i++) {
        all_rr_adj_dr[i] = all_rr_combine[i] * dr[i]  / 100000;
    }

    const dr_sum = Array(13)
    for (let i = 0; i < dr_sum.length; i++) {
        ar = all_rr_adj_dr.slice((i)*50, (i+1)*50)
        let sum_ar = 0;
        for (let i = 0; i < ar.length; i++ ) {
            sum_ar += ar[i];
        }
        dr_sum[i] = sum_ar;
    }

    result.textContent = `Your combine is ${all_rr_combine} years`;

    return all_rr_adj_dr;
}