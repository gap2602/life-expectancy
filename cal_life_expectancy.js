function le(age_value, gender_value, combine_value) {
    const age = parseInt(age_value);
    const gender = gender_value;
    const dr = combine_value;

    let n, nPx, nDx, nMx, dr_fix, nMx_adj, nax, nqx_adj, npx_adj, lx_adj, ndx_adj, nLx_adj, nTx_adj, ex_adj, life_exp;

    if (gender == "male") {
        const dr_sum = Array(6).fill(0).concat(Array(13))
        for (let i = 6; i < dr_sum.length; i++) {
            ar = dr.slice((i-6)*50, (i-5)*50)
            let sum_ar = 0;
            for (let i = 0; i < ar.length; i++ ) {
                sum_ar += ar[i];
            }
            dr_sum[i] = sum_ar;
        }
        n = [1.00, 4.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00];
        nPx = [310029, 1385117, 1974463, 2044531, 2073207, 2410623, 2416178, 2310419, 2529067, 2558044, 2542127, 2438019, 2124926, 1629662, 1259938,
               843126, 557903, 377120, 310444];
        nDx = [2161, 984, 747, 1327, 3544, 4550, 5472, 6669, 10034, 14673, 19051, 23831, 27727, 28099, 29912, 28767, 29205, 28846, 46513];
        nMx = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            nMx[i] = nDx[i]/nPx[i];
        }
        dr_fix = [0, 0, 0, 0, 0, 0, 37.9793066594086, 63.1399794749785, 104.429601962939, 170.590983308124, 227.721950778923, 302.588053798859, 374.189901598111, 470.642452389751, 616.155446227367, 820.054317458024, 1306.43642617957, 1867.3734439515, 3066.17949539552];
        nMx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i < 6) {
                nMx_adj[i] = nMx[i];
            } else if (i == 18) {
                nMx_adj[i] = dr_sum[i] + (dr_fix[i] / 100000);
            } else {
                if ((Math.floor(age/5)*5) <= (i-1)*5) {
                    nMx_adj[i] = dr_sum[i] + (dr_fix[i] / 100000);
                } else {
                    nMx_adj[i] = nMx[i];
                }
            }
        }
        nax = [0.1, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0];
        nqx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                nqx_adj[i] = 1.000;
            } else {
                nqx_adj[i] = n[i] * nMx_adj[i] / (1 + ((1 - nax[i]) * n[i] * nMx_adj[i]));
            }
        }
        npx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            npx_adj[i] = 1 - nqx_adj[i];
        }
        lx_adj = Array(n.length);
        lx_adj[0] = 100000;
        for (let i = 1; i < n.length; i++) {
            lx_adj[i] = lx_adj[i-1] * npx_adj[i-1];
        }
        ndx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                ndx_adj[i] = lx_adj[i];
            } else {
                ndx_adj[i] = lx_adj[i] - lx_adj[i+1];
            }
        }
        nLx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                nLx_adj[i] = lx_adj[i] / nMx_adj[i];
            } else {
                nLx_adj[i] = n[i] * (lx_adj[i+1] + (nax[i] * ndx_adj[i]));
            }
        }
        nTx_adj = Array(n.length);
        for (let i = n.length - 1; i >= 0; i--) {
            if (i == n.length - 1) {
                nTx_adj[i] = nLx_adj[i];
            } else {
                nTx_adj[i] = nTx_adj[i+1] + nLx_adj[i];
            }
        }
        ex_adj = Array(n.length);
        for (let i = 1; i < n.length; i++) {
            ex_adj[i] = nTx_adj[i] / lx_adj[i];
        }

        if (age < 1) { life_exp = ex_adj[0] }
        else if (age >= 1 && age <= 4) { life_exp = ex_adj[1] }
        else if (age >= 5 && age <= 9) { life_exp = ex_adj[2] }
        else if (age >= 10 && age <= 14) { life_exp = ex_adj[3] }
        else if (age >= 15 && age <= 19) { life_exp = ex_adj[4] }
        else if (age >= 20 && age <= 24) { life_exp = ex_adj[5] }
        else if (age >= 25 && age <= 29) { life_exp = ex_adj[6] }
        else if (age >= 30 && age <= 34) { life_exp = ex_adj[7] }
        else if (age >= 35 && age <= 39) { life_exp = ex_adj[8] }
        else if (age >= 40 && age <= 44) { life_exp = ex_adj[9] }
        else if (age >= 45 && age <= 49) { life_exp = ex_adj[10] }
        else if (age >= 50 && age <= 54) { life_exp = ex_adj[11] }
        else if (age >= 55 && age <= 59) { life_exp = ex_adj[12] }
        else if (age >= 60 && age <= 64) { life_exp = ex_adj[13] }
        else if (age >= 65 && age <= 69) { life_exp = ex_adj[14] }
        else if (age >= 70 && age <= 74) { life_exp = ex_adj[15] }
        else if (age >= 75 && age <= 79) { life_exp = ex_adj[16] }
        else if (age >= 80 && age <= 84) { life_exp = ex_adj[17] }
        else { life_exp = ex_adj[18] }

    } else {
        const dr_sum = Array(6).fill(0).concat(Array(13))
        for (let i = 6; i < dr_sum.length; i++) {
            ar = dr.slice((i-6)*52, (i-5)*52)
            let sum_ar = 0;
            for (let i = 0; i < ar.length; i++ ) {
                sum_ar += ar[i];
            }
            dr_sum[i] = sum_ar;
        }
        n = [1.00, 4.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00, 5.00];
        nPx = [292872, 1308878, 1865251, 1933318, 1971371, 2309146, 2337382, 2270970, 2533158, 2631959, 2713986, 2688364, 2388410, 1891688,
               1520438, 1050165, 735114, 541200, 478441];
        nDx = [1732.126436, 783.017949, 533.535708, 621.506263, 1121.910203, 1417.811163, 1741.131517, 2274.667225, 3599.937933, 5539.860057, 
               8215.535918, 11712.651124, 14832.749663, 16747.407492, 20583.435440, 22771.517643, 26816.186537, 32959.973982, 66788.382048];
        nMx = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            nMx[i] = nDx[i]/nPx[i];
        }
        dr_fix = [0, 0, 0, 0, 0, 0, 16.007825583039, 16.3725297209542, 21.3102740309986, 37.3702612076345, 53.3937288206011, 78.9696639076232, 110.803406836964, 163.914297489405, 249.146070643175, 434.849571602286, 736.16965402608, 1427.39391778016, 2992.03295298259];
        nMx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i < 6) {
                nMx_adj[i] = nMx[i];
            } else if (i == 18) {
                nMx_adj[i] = dr_sum[i] + (dr_fix[i] / 100000);
            } else {
                if ((Math.floor(age/5)*5) <= (i-1)*5) {
                    nMx_adj[i] = dr_sum[i] + (dr_fix[i] / 100000);
                } else {
                    nMx_adj[i] = nMx[i];
                }
            }
        }
        nax = [0.1, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0];
        nqx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                nqx_adj[i] = 1.000;
            } else {
                nqx_adj[i] = n[i] * nMx_adj[i] / (1 + ((1 - nax[i]) * n[i] * nMx_adj[i]));
            }
        }
        npx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            npx_adj[i] = 1 - nqx_adj[i];
        }
        lx_adj = Array(n.length);
        lx_adj[0] = 100000;
        for (let i = 1; i < n.length; i++) {
            lx_adj[i] = lx_adj[i-1] * npx_adj[i-1];
        }
        ndx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                ndx_adj[i] = lx_adj[i];
            } else {
                ndx_adj[i] = lx_adj[i] - lx_adj[i+1];
            }
        }
        nLx_adj = Array(n.length);
        for (let i = 0; i < n.length; i++) {
            if (i == n.length - 1) {
                nLx_adj[i] = lx_adj[i] / nMx_adj[i];
            } else {
                nLx_adj[i] = n[i] * (lx_adj[i+1] + (nax[i] * ndx_adj[i]));
            }
        }
        nTx_adj = Array(n.length);
        for (let i = n.length - 1; i >= 0; i--) {
            if (i == n.length - 1) {
                nTx_adj[i] = nLx_adj[i];
            } else {
                nTx_adj[i] = nTx_adj[i+1] + nLx_adj[i];
            }
        }
        ex_adj = Array(n.length);
        for (let i = 1; i < n.length; i++) {
            ex_adj[i] = nTx_adj[i] / lx_adj[i];
        }

        if (age < 1) { life_exp = ex_adj[0] }
        else if (age >= 1 && age <= 4) { life_exp = ex_adj[1] }
        else if (age >= 5 && age <= 9) { life_exp = ex_adj[2] }
        else if (age >= 10 && age <= 14) { life_exp = ex_adj[3] }
        else if (age >= 15 && age <= 19) { life_exp = ex_adj[4] }
        else if (age >= 20 && age <= 24) { life_exp = ex_adj[5] }
        else if (age >= 25 && age <= 29) { life_exp = ex_adj[6] }
        else if (age >= 30 && age <= 34) { life_exp = ex_adj[7] }
        else if (age >= 35 && age <= 39) { life_exp = ex_adj[8] }
        else if (age >= 40 && age <= 44) { life_exp = ex_adj[9] }
        else if (age >= 45 && age <= 49) { life_exp = ex_adj[10] }
        else if (age >= 50 && age <= 54) { life_exp = ex_adj[11] }
        else if (age >= 55 && age <= 59) { life_exp = ex_adj[12] }
        else if (age >= 60 && age <= 64) { life_exp = ex_adj[13] }
        else if (age >= 65 && age <= 69) { life_exp = ex_adj[14] }
        else if (age >= 70 && age <= 74) { life_exp = ex_adj[15] }
        else if (age >= 75 && age <= 79) { life_exp = ex_adj[16] }
        else if (age >= 80 && age <= 84) { life_exp = ex_adj[17] }
        else if (age >= 85) { life_exp = ex_adj[18] }
    }

    return life_exp;
}