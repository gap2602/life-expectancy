function showSmkStatus(){
    const smk_status = document.querySelector('input[name="smoke-status"]:checked').value;
    if (smk_status == "never") {
        document.getElementById('current_block').style.display ='none';
        document.getElementById('former_block').style.display ='none';
    } else if (smk_status == "current") {
        document.getElementById('current_block').style.display ='block';
        document.getElementById('former_block').style.display ='none';
    } else if (smk_status == "former") {
        document.getElementById('former_block').style.display = 'block';
        document.getElementById('current_block').style.display ='none';
    }   
}
function showAlcStatus(){
    const alc_status = document.querySelector('input[name="alc-status"]:checked').value;
    if (alc_status == "not-drink") { 
        document.getElementById('drink_block').style.display = 'none';
    } else if (alc_status == "drink") {
        document.getElementById('drink_block').style.display = 'block';
    }
}

function checkCheckboxState (source) {
    document.getElementById(source+"-units").disabled = !(document.getElementById(source).checked);
    document.getElementById(source+"-amt").disabled = !(document.getElementById(source).checked);
}

window.onload = function() {
    if (document.querySelector('input[name="smoke-status"]:checked')) {
        showSmkStatus();
        showAlcStatus();
    }
};

function checkInput() {
    const act_1 = document.getElementById("act-1");
    const act_2 = document.getElementById("act-2");
    const act_3 = document.getElementById("act-3");
    const act_4 = document.getElementById("act-4");
    const act_5 = document.getElementById("act-5");
    const smk_status = document.querySelector('input[name="smoke-status"]:checked');
    const alc_status = document.querySelector('input[name="alc-status"]:checked');
    const smoke_roll_curr = document.getElementById("smk-roll-current").value;
    const smoke_roll_former = document.getElementById("smk-roll-former").value;
    const smoke_yos_year_curr = document.getElementById("smk-yos-year-current").value;
    const smoke_yos_month_curr = document.getElementById("smk-yos-month-current").value;
    const smoke_yos_year_form = document.getElementById("smk-yos-year-former").value;
    const smoke_yos_month_form = document.getElementById("smk-yos-month-former").value;
    const smoke_yoq_year = document.getElementById("smk-yoq-year").value;
    const smoke_yoq_month = document.getElementById("smk-yoq-month").value;
    const beer_status = document.getElementById("beer").checked;
    const beer_unit = document.getElementById("beer-units").options[document.getElementById("beer-units").selectedIndex].value;
    const beer_amount = document.getElementById("beer-amt").value;
    const cl_status = document.getElementById("cl").checked;
    const cl_unit = document.getElementById("cl-units").options[document.getElementById("cl-units").selectedIndex].value;
    const cl_amount = document.getElementById("cl-amt").value;
    const white_status = document.getElementById("white").checked;
    const white_unit = document.getElementById("white-units").options[document.getElementById("white-units").selectedIndex].value;
    const white_amount = document.getElementById("white-amt").value;
    const wine_status = document.getElementById("wine").checked;
    const wine_unit = document.getElementById("wine-units").options[document.getElementById("wine-units").selectedIndex].value;
    const wine_amount = document.getElementById("wine-amt").value;
    const wort_status = document.getElementById("wort").checked;
    const wort_unit = document.getElementById("wort-units").options[document.getElementById("wort-units").selectedIndex].value;
    const wort_amount = document.getElementById("wort-amt").value;
    const cocktail_status = document.getElementById("cocktail").checked;
    const cocktail_unit = document.getElementById("cocktail-units").options[document.getElementById("cocktail-units").selectedIndex].value;
    const cocktail_amount = document.getElementById("cocktail-amt").value;


    var check_count = 0;

    if (act_1.value == ""){
        document.getElementById("act-1-w").style.visibility = "visible";
        document.getElementById("act-1").style.borderColor = "red";
        check_count += 1;
    } else {
        document.getElementById("act-1-w").style.visibility = "hidden";
        document.getElementById("act-1").style.borderColor = "#E6E6E6";
    }

    if (act_2.value == ""){
        document.getElementById("act-2-w").style.visibility = "visible";
        document.getElementById("act-2").style.borderColor = "red";
        check_count += 1;
    } else {
        document.getElementById("act-2-w").style.visibility = "hidden";
        document.getElementById("act-2").style.borderColor = "#E6E6E6";
    }

    if (act_3.value == ""){
        document.getElementById("act-3-w").style.visibility = "visible";
        document.getElementById("act-3").style.borderColor = "red";
        check_count += 1;
    } else {
        document.getElementById("act-3-w").style.visibility = "hidden";
        document.getElementById("act-3").style.borderColor = "#E6E6E6";
    }

    if (act_4.value == ""){
        document.getElementById("act-4-w").style.visibility = "visible";
        document.getElementById("act-4").style.borderColor = "red";
        check_count += 1;
    } else {
        document.getElementById("act-4-w").style.visibility = "hidden";
        document.getElementById("act-4").style.borderColor = "#E6E6E6";
    }

    if (act_5.value == ""){
        document.getElementById("act-5-w").style.visibility = "visible";
        document.getElementById("act-5").style.borderColor = "red";
        check_count += 1;
    } else {
        document.getElementById("act-5-w").style.visibility = "hidden";
        document.getElementById("act-5").style.borderColor = "#E6E6E6";
    }

    if (smk_status == null){
        document.getElementById("smk-w").style.visibility = "visible";
        check_count += 1;
    } else {
        if (smk_status.value == "current" && (smoke_roll_curr == "" || smoke_yos_year_curr == "" || smoke_yos_month_curr == "")) {
            if (smoke_roll_curr == ""){
                document.getElementById("smk-q1-w").style.visibility = "visible";
                document.getElementById("smk-roll-current").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q1-w").style.visibility = "hidden";
                document.getElementById("smk-roll-current").style.borderColor = "#E6E6E6";
            }
            if (smoke_yos_year_curr == ""){
                document.getElementById("smk-q2-w").style.visibility = "visible";
                document.getElementById("smk-yos-year-current").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q2-w").style.visibility = "hidden";
                document.getElementById("smk-yos-year-current").style.borderColor = "#E6E6E6";
            }
            if (smoke_yos_month_curr == ""){
                document.getElementById("smk-q3-w").style.visibility = "visible";
                document.getElementById("smk-yos-month-current").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q3-w").style.visibility = "hidden";
                document.getElementById("smk-yos-month-current").style.borderColor = "#E6E6E6";
            }
        } else if (smk_status.value == "former" && (smoke_roll_former == "" || smoke_yos_year_form == "" || smoke_yos_month_form == "" || smoke_yoq_year == "" || smoke_yoq_month == "")) {
            if (smoke_roll_former == ""){
                document.getElementById("smk-q4-w").style.visibility = "visible";
                document.getElementById("smk-roll-former").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q4-w").style.visibility = "hidden";
                document.getElementById("smk-roll-former").style.borderColor = "#E6E6E6";
            }
            if (smoke_yos_year_form == ""){
                document.getElementById("smk-q5-w").style.visibility = "visible";
                document.getElementById("smk-yos-year-former").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q5-w").style.visibility = "hidden";
                document.getElementById("smk-yos-year-former").style.borderColor = "#E6E6E6";
            }
            if (smoke_yos_month_form == ""){
                document.getElementById("smk-q6-w").style.visibility = "visible";
                document.getElementById("smk-yos-month-former").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q6-w").style.visibility = "hidden";
                document.getElementById("smk-yos-month-former").style.borderColor = "#E6E6E6";
            }
            if (smoke_yoq_year == ""){
                document.getElementById("smk-q7-w").style.visibility = "visible";
                document.getElementById("smk-yoq-year").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q7-w").style.visibility = "hidden";
                document.getElementById("smk-yoq-year").style.borderColor = "#E6E6E6";
            }
            if (smoke_yoq_month == ""){
                document.getElementById("smk-q8-w").style.visibility = "visible";
                document.getElementById("smk-yoq-month").style.borderColor = "red";
                check_count += 1;
            } else {
                document.getElementById("smk-q8-w").style.visibility = "hidden";
                document.getElementById("smk-yoq-month").style.borderColor = "#E6E6E6";
            }
        }
        document.getElementById("smk-w").style.visibility = "hidden";
    }

    let alc_status_2;

    if (alc_status == null) {
        document.getElementById("alc-w").style.visibility = "visible";
        alc_status_2 = "0"
        check_count += 1;
    } else {
        document.getElementById("alc-w").style.visibility = "hidden";
        alc_status_2 = alc_status.value;
    }

    if (alc_status_2.value == "drink" && !(beer_status) && !(cl_status) && !(white_status) && !(wort_status) && !(wine_status) && !(cocktail_status)) {
        document.getElementById("choices").style.display = "block";
        check_count += 1;
    } 

    const all_status = [beer_status, cl_status, white_status, wine_status, wort_status, cocktail_status];
    const all_units = [beer_unit, cl_unit, white_unit, wine_unit, wort_unit, cocktail_unit];
    const all_amt = [beer_amount, cl_amount, white_amount, wine_amount, wort_amount, cocktail_amount];
    const all_w = ["beer-w", "cl-w", "white-w", "wine-w", "wort-w", "cocktail-w"];
    const all_unit_elements = ["beer-units", "cl-units", "white-units", "wine-units", "wort-units", "cocktail-units"];
    const all_amt_elements = ["beer-amt", "cl-amt", "white-amt", "wine-amt", "wort-amt", "cocktail-amt"];

    for (let i = 0; i < all_status.length; i++) {
        if (all_status[i] && (all_units[i] == "" || all_amt[i] == "")) {
            document.getElementById(all_w[i]).style.visibility = "visible";
            check_count += 1;
        } else {
            document.getElementById(all_w[i]).style.visibility = "hidden";
        }
    }
    
    for (let i = 0; i < all_status.length; i++) {
        if (all_status[i] && all_units[i] == "") {
            document.getElementById(all_unit_elements[i]).style.borderColor = "red";
            check_count += 1;
        } else {
            document.getElementById(all_unit_elements[i]).style.borderColor = "#E6E6E6";
        }
    }

    for (let i = 0; i < all_status.length; i++) {
        if (all_status[i] && all_amt[i] == "") {
            document.getElementById(all_amt_elements[i]).style.borderColor = "red";
            check_count += 1;
        } else {
            document.getElementById(all_amt_elements[i]).style.borderColor = "#E6E6E6";
        }
    }

    if (check_count > 0) {
        check_count = 0;
    } else {
        const sum_act = ((parseFloat(act_1.value) + parseFloat(act_3.value) + parseFloat(act_4.value)) * 4) + ((parseFloat(act_2.value) + parseFloat(act_5.value)) * 8);

        let roll, yos, yoq;
        if (smk_status.value == "never") {
            roll = 0;
            yos = 0;
            yoq = 0;
        } else if (smk_status.value == "current") {
            roll = parseFloat(smoke_roll_curr);
            yos = parseFloat(smoke_yos_year_curr) + parseFloat(smoke_yos_month_curr)/12;
            yoq = 0;
        } else if (smk_status.value == "former") {
            roll = parseFloat(smoke_roll_former);
            yos = parseFloat(smoke_yos_year_form) + parseFloat(smoke_yos_month_form)/12;
            yoq = parseFloat(smoke_yoq_year) + parseFloat(smoke_yoq_month)/12;
        }

        var sum_alc = 0;
        if (beer_status == true) {
            if (beer_unit == "can" || beer_unit == "bottle-small") {
                sum_alc += (beer_amount * 10);
            } else if (beer_unit == "bottle-big") {
                sum_alc += (beer_amount * 25);
            }
        }
        
        if (cl_status == true) {
            if (cl_unit == "flat") {
                sum_alc += (cl_amount * 104);
            } else if (cl_unit == "bottle") {
                sum_alc += (cl_amount * 220);
            }
        }

        if (white_status == true) {
            if (white_unit == "flat") {
                sum_alc += (white_amount * 104);
            } else if (white_unit == "bottle") {
                sum_alc += (white_amount * 220);
            }
        }
        
        if (wine_status == true) {
            sum_alc += (wine_amount * 10);
        }
        
        if (wort_status == true) {
            if (wort_unit == "tong" || wort_unit == "cup") {
                sum_alc += (wort_amount * 10);
            } else if (wort_status == true) {
                sum_alc += (wort_amount * 2.5);
            }
        }
        
        if (cocktail_status == true) {
            sum_alc += (cocktail_amount * 30);
        }

        sessionStorage.setItem('act', sum_act);
        sessionStorage.setItem('smk-status', smk_status.value);
        sessionStorage.setItem('smk-roll', roll);
        sessionStorage.setItem('smk-yos', yos);
        sessionStorage.setItem('smk-yoq', yoq);
        sessionStorage.setItem('drink-status', alc_status.value);
        sessionStorage.setItem('alc-amt', sum_alc);
        window.location.href = "page_5.html";
    }

}