function rr_bmi() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / (height / 100 * height / 100);
    const result = document.getElementById("result_bmi");

    let used_value, used_value_2;
    if (bmi > 21) {
        used_value = bmi - 21;
    } else {
        used_value = 0
    }

    if (Math.floor((bmi - 21)/5) > 0) {
        used_value_2 = Math.floor((bmi - 21)/5);
    } else {
        used_value_2 = 0
    }

    const bmi_diseases = ['Esophageal cancer', 'Colon and rectum cancer', 'Liver cancer', 'Gallbladder and biliary tract cancer', 'Pancreatic cancer',
                          'Breast cancer', 'Ovarian cancer', 'Kidney cancer', 'Thyroid cancer', 'Multiple myeloma', 'Leukemia', 'Ischemic heart disease',
                          'Ischemic stroke', 'Intracerebral hemorrhage', 'Subarachnoid hemorrhage', 'Hypertensive heart disease', 'Atrial fibrillation and flutter',
                          'Gallbladder and biliary diseases', 'Alzheimer disease and other dementias', 'Diabetes mellitus', 'Chronic kidney disease',
                          'Cataract', 'Gout', 'Osteoarthritis', 'Low back pain'];               

    const bmi_rr_ref = [1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,2.274,2.472,3.066,3.066,3.122,1.344,1.464,1.218,3.547,1.000,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,2.018,2.235,2.913,2.913,3.000,1.344,1.464,1.218,3.455,1.000,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.724,1.979,2.597,2.597,2.769,1.344,1.464,1.218,3.349,1.746,1.104,1.628,1.370,1.101,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.599,1.826,2.389,2.389,2.573,1.344,1.464,1.218,3.160,1.746,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.567,1.733,2.199,2.199,2.407,1.344,1.464,1.218,2.864,1.746,1.104,1.628,1.370,1.099,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.520,1.635,1.996,1.996,2.281,1.344,1.464,1.218,2.624,1.746,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.466,1.543,1.805,1.805,2.159,1.344,1.464,1.218,2.417,1.746,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.414,1.455,1.665,1.665,2.035,1.344,1.464,1.218,2.215,2.036,1.104,1.628,1.370,1.101,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.364,1.380,1.523,1.523,1.955,1.344,1.464,1.218,2.046,2.036,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.319,1.304,1.410,1.410,1.860,1.344,1.464,1.218,1.896,1.621,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.274,1.228,1.295,1.295,1.792,1.344,1.464,1.218,1.740,1.621,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.170,1.068,1.070,1.070,1.697,1.344,1.464,1.218,1.461,1.431,1.104,1.628,1.370,1.100,1.391,1.177,1.289,1.155,1.071,1.000,1.000,1.240,1.221,1.089,1.086,1.170,1.068,1.070,1.070,1.697,1.344,1.464,1.218,1.461,1.431,1.104,1.628,1.370,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,2.274,2.472,3.066,3.066,3.122,1.346,1.729,1.214,3.547,1.000,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,2.018,2.235,2.913,2.913,3.000,1.346,1.729,1.214,3.455,1.000,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.724,1.979,2.597,2.597,2.769,1.346,1.729,1.214,3.349,1.746,1.104,1.493,1.375,1.101,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.599,1.826,2.389,2.389,2.573,1.346,1.729,1.214,3.160,1.746,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.567,1.733,2.199,2.199,2.407,1.346,1.729,1.214,2.864,1.746,1.104,1.493,1.375,1.099,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.520,1.635,1.996,1.996,2.281,1.346,1.729,1.214,2.624,1.746,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.466,1.543,1.805,1.805,2.159,1.346,1.729,1.214,2.417,1.746,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.414,1.455,1.665,1.665,2.035,1.346,1.729,1.214,2.215,2.036,1.104,1.493,1.375,1.101,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.364,1.380,1.523,1.523,1.955,1.346,1.729,1.214,2.046,2.036,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.319,1.304,1.410,1.410,1.860,1.346,1.729,1.214,1.896,1.621,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.274,1.228,1.295,1.295,1.792,1.346,1.729,1.214,1.740,1.621,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.170,1.068,1.070,1.070,1.697,1.346,1.729,1.214,1.461,1.431,1.104,1.493,1.375,1.100,1.351,1.059,1.176,1.344,1.092,0.890,1.038,1.320,1.136,1.092,1.131,1.170,1.068,1.070,1.070,1.697,1.346,1.729,1.214,1.461,1.431,1.104,1.493,1.375,1.100];
    const bmi_rr_pop = [1.307357280000000,1.139136160000000,1.227177120000000,1.121842400000000,1.055811680000000,1.000000000000000,1.000000000000000,1.188659200000000,1.173723680000000,1.069961120000000,1.067602880000000,2.001465920000000,2.157109760000000,2.624041279999999,2.624041279999999,2.668061760000000,1.270411520000000,1.364741120000000,1.171365440000000,3.002145759999999,1.000000000000000,1.081752320000000,1.493658240000000,1.290849600000000,1.078608000000000,1.295011064000000,1.133547208000000,1.218051656000000,1.116948120000000,1.053569784000000,1.000000000000000,1.000000000000000,1.181080960000000,1.166745384000000,1.067150856000000,1.064887344000000,1.768085072000000,1.931812440000000,2.443366152000000,2.443366152000000,2.509008000000000,1.259549376000000,1.350089856000000,1.164481872000000,2.852307320000000,1.000000000000000,1.078468416000000,1.473828512000000,1.279166480000000,1.075450400000000,1.280736436000000,1.127085292000000,1.207500844000000,1.111289380000000,1.050977716000000,1.000000000000000,1.000000000000000,1.172319040000000,1.158677116000000,1.063901644000000,1.061747656000000,1.519829104000000,1.702918084000000,2.146639612000000,2.146639612000000,2.270134924000000,1.246990624000000,1.333150144000000,1.156523128000000,2.686572604000000,1.535625016000000,1.074671584000000,1.450901488000000,1.265658520000000,1.072517596000000,1.313342708000000,1.141845676000000,1.231601132000000,1.124215140000000,1.056898548000000,1.000000000000000,1.000000000000000,1.192333120000000,1.177106748000000,1.071323532000000,1.068919368000000,1.480031412000000,1.661946488000000,2.113127932000000,2.113127932000000,2.260583324000000,1.275677472000000,1.371844032000000,1.174702584000000,2.730998080000000,1.597835448000000,1.083344352000000,1.503271664000000,1.296513560000000,1.080138800000000,1.293059974000000,1.132663978000000,1.216609546000000,1.116174670000000,1.053215494000000,1.000000000000000,1.000000000000000,1.179883360000000,1.165642594000000,1.066706746000000,1.064458204000000,1.424974438000000,1.549393762000000,1.898667286000000,1.898667286000000,2.054566198000000,1.257832816000000,1.347774496000000,1.163394052000000,2.397094096000000,1.559137444000000,1.077949456000000,1.470694792000000,1.277320180000000,1.074201886000000,1.264911102000000,1.119921394000000,1.195803858000000,1.105015910000000,1.048104062000000,1.000000000000000,1.000000000000000,1.162605280000000,1.149732362000000,1.060299458000000,1.058266892000000,1.352311440000000,1.430226470000000,1.674811912000000,1.674811912000000,1.867905682000000,1.233067568000000,1.314370208000000,1.147699796000000,2.100295728000000,1.505431412000000,1.070462288000000,1.425483816000000,1.250683140000000,1.067752200000000,1.288394562000000,1.130552014000000,1.213161198000000,1.114325210000000,1.052368322000000,1.000000000000000,1.000000000000000,1.177019680000000,1.163005622000000,1.065644798000000,1.063432052000000,1.343713212000000,1.400507026000000,1.593753510000000,1.593753510000000,1.854857538000000,1.253728208000000,1.342238048000000,1.160792876000000,2.045153694000000,1.550236172000000,1.076708528000000,1.463201496000000,1.272905340000000,1.073758200000000,1.225455292000000,1.102060324000000,1.166640868000000,1.089374860000000,1.040939452000000,1.000000000000000,1.000000000000000,1.138386880000000,1.127431252000000,1.051318468000000,1.049588632000000,1.238717368000000,1.262358460000000,1.383446980000000,1.383446980000000,1.596793420000000,1.198354528000000,1.267547968000000,1.125701416000000,1.700583580000000,1.597370032000000,1.059967648000000,1.362112336000000,1.213346440000000,1.058237812000000,1.182509416000000,1.082619352000000,1.134898264000000,1.072350280000000,1.033141096000000,1.000000000000000,1.000000000000000,1.112026240000000,1.103157496000000,1.041543064000000,1.040142736000000,1.169906464000000,1.177374880000000,1.244123848000000,1.244123848000000,1.445771080000000,1.160570944000000,1.216584064000000,1.101757168000000,1.488247696000000,1.483579936000000,1.048544704000000,1.293135328000000,1.172707120000000,1.046677600000000,1.167685824000000,1.075908928000000,1.123941696000000,1.066473920000000,1.030449344000000,1.000000000000000,1.000000000000000,1.102927360000000,1.094778944000000,1.038168896000000,1.036882304000000,1.136807616000000,1.130374656000000,1.175834240000000,1.175834240000000,1.368823040000000,1.147529216000000,1.198992896000000,1.093492352000000,1.384262144000000,1.266324544000000,1.044601856000000,1.269326592000000,1.158679680000000,1.042886400000000,1.161704306000000,1.073201182000000,1.119520574000000,1.064102730000000,1.029363186000000,1.000000000000000,1.000000000000000,1.099255840000000,1.091398086000000,1.036807374000000,1.035566676000000,1.113317084000000,1.094293048000000,1.122001970000000,1.122001970000000,1.327544272000000,1.142266704000000,1.191894624000000,1.090157388000000,1.306038840000000,1.256824486000000,1.043010864000000,1.259719448000000,1.153019420000000,1.041356600000000,1.055768330000000,1.025245510000000,1.041220070000000,1.022107650000000,1.010126730000000,1.000000000000000,1.000000000000000,1.034231200000000,1.031521230000000,1.012694070000000,1.012266180000000,1.024247100000000,1.009698840000000,1.009984100000000,1.009984100000000,1.099413110000000,1.049064720000000,1.066180320000000,1.031093340000000,1.065752430000000,1.061473530000000,1.014833520000000,1.089571640000000,1.052773100000000,1.014263000000000,1.055768330000000,1.025245510000000,1.041220070000000,1.022107650000000,1.010126730000000,1.000000000000000,1.000000000000000,1.034231200000000,1.031521230000000,1.012694070000000,1.012266180000000,1.024247100000000,1.009698840000000,1.009984100000000,1.009984100000000,1.099413110000000,1.049064720000000,1.066180320000000,1.031093340000000,1.065752430000000,1.061473530000000,1.014833520000000,1.089571640000000,1.052773100000000,1.014263000000000,1.303015492000000,1.050934228000000,1.151939392000000,1.296972448000000,1.079422864000000,0.905037880000000,1.032805096000000,1.276253440000000,1.117407712000000,1.079422864000000,1.113091252000000,2.099834008000000,2.270765824000000,2.783561272000000,2.783561272000000,2.831905624000000,1.298699032000000,1.629339868000000,1.184744488000000,3.198804724000000,1.000000000000000,1.089782368000000,1.425602956000000,1.323734500000000,1.086329200000000,1.334180080000000,1.056172720000000,1.167566080000000,1.327515520000000,1.087591360000000,0.895271200000000,1.036179040000000,1.304665600000000,1.129482880000000,1.087591360000000,1.124722480000000,1.969217440000000,2.175818800000000,2.821329040000000,2.821329040000000,2.904160000000000,1.329419680000000,1.694066320000000,1.203745120000000,3.337356400000000,1.000000000000000,1.099016320000000,1.469375440000000,1.357030000000000,1.095208000000000,1.332597070000000,1.055906630000000,1.166772320000000,1.325964080000000,1.087176440000000,0.895767300000000,1.036007660000000,1.303222400000000,1.128869520000000,1.087176440000000,1.124131670000000,1.686040680000000,1.927671030000000,2.513269290000001,2.513269290000001,2.676251330000001,1.327859220000000,1.690778530000000,1.202779980000000,3.225841930000001,1.706887220000000,1.098547280000000,1.467152010000000,1.355338750000000,1.095704570000000,1.367257507084000,1.061142098604000,1.183095965184000,1.359850727424000,1.095444307776000,0.886643596400000,1.039352298096000,1.334481561600000,1.141296740864000,1.095444307776000,1.136079551724000,1.631837249484000,1.877709734384000,2.502765317164001,2.502765317164001,2.711758627436001,1.361966607344000,1.772212959244000,1.222906846064000,3.394008870400002,1.790655458544000,1.107936351744000,1.518234703916000,1.392677687500000,1.103771240000000,1.373836571758000,1.062008959998000,1.185967550208000,1.366265177088000,1.096838145312000,0.885285331800000,1.039899544152000,1.340341939200000,1.143440218368000,1.096838145312000,1.138135137438000,1.609787853262000,1.794174577662000,2.325973430958000,2.325973430958000,2.570094242542000,1.368427951128000,1.789700317678000,1.226511255768000,3.121091290368001,1.808726565528000,1.109529308928000,1.528446647742000,1.399831468750000,1.104239638558000,1.346055112000000,1.058168808000000,1.173520512000000,1.339153728000000,1.090703904000000,0.891549680000000,1.037464656000000,1.315491840000000,1.134084032000000,1.090703904000000,1.129154472000000,1.512674240000000,1.626054120000000,1.981968352000000,1.981968352000000,2.262953272000000,1.341125552000000,1.718729848000000,1.210985168000000,2.601121087999999,1.735490352000000,1.102534848000000,1.486054616000000,1.369717000000000,1.098591200000000,1.333862074000000,1.056119266000000,1.167406624000000,1.327203856000000,1.087508008000000,0.895370860000000,1.036144612000000,1.304375680000000,1.129359664000000,1.087508008000000,1.124603794000000,1.443247084000000,1.516487482000000,1.765695070000000,1.765695070000000,2.102410666000000,1.329106204000000,1.693405846000000,1.203551236000000,2.347813558000000,1.709575804000000,1.098922096000000,1.468928782000000,1.356690250000000,1.095117400000000,1.321453522000000,1.054033498000000,1.161184672000000,1.315042768000000,1.084255624000000,0.899259580000000,1.034801236000000,1.293063040000000,1.124551792000000,1.084255624000000,1.119972682000000,1.379150308000000,1.416699010000000,1.609021630000000,1.609021630000000,1.947875770000000,1.316874412000000,1.667634238000000,1.195985908000000,2.112723730000000,1.948791592000000,1.095245488000000,1.451500246000000,1.343433250000000,1.092498022000000,1.282307896000000,1.047453464000000,1.141556096000000,1.276677824000000,1.073995232000000,0.911527440000000,1.030563248000000,1.257374720000000,1.109384256000000,1.073995232000000,1.105362776000000,1.292763744000000,1.305632480000000,1.420646808000000,1.420646808000000,1.768102680000000,1.278286416000000,1.586331784000000,1.172119344000000,1.841293616000000,1.833250656000000,1.083646784000000,1.396517928000000,1.301611000000000,1.080429600000000,1.259512552000000,1.043621768000000,1.130125952000000,1.254337088000000,1.068020384000000,0.918671280000000,1.028095376000000,1.236592640000000,1.100551872000000,1.068020384000000,1.096855112000000,1.235853288000000,1.224763008000000,1.303134320000000,1.303134320000000,1.635842720000000,1.255815792000000,1.538987608000000,1.158221328000000,1.662459392000000,1.459137592000000,1.076892608000000,1.364500536000000,1.277257000000000,1.073935200000000,1.192748140000000,1.032399260000000,1.096648640000000,1.188904160000000,1.050520880000000,0.939594600000000,1.020867320000000,1.175724800000000,1.074683040000000,1.050520880000000,1.071937340000000,1.150464360000000,1.125203920000000,1.161996300000000,1.161996300000000,1.434918880000000,1.190002440000000,1.400323060000000,1.117515960000000,1.406363600000000,1.341015940000000,1.057110560000000,1.270726020000000,1.205927500000000,1.054914000000000,1.076997466000000,1.012942594000000,1.038608416000000,1.075461904000000,1.020181672000000,0.975869740000000,1.008335908000000,1.070197120000000,1.029833776000000,1.020181672000000,1.028736946000000,1.037292220000000,1.014916888000000,1.015355620000000,1.015355620000000,1.152898102000000,1.075900636000000,1.159917814000000,1.046944324000000,1.101127726000000,1.094546746000000,1.022814064000000,1.108147438000000,1.082262250000000,1.021936600000000,1.076997466000000,1.012942594000000,1.038608416000000,1.075461904000000,1.020181672000000,0.975869740000000,1.008335908000000,1.070197120000000,1.029833776000000,1.020181672000000,1.028736946000000,1.037292220000000,1.014916888000000,1.015355620000000,1.015355620000000,1.152898102000000,1.075900636000000,1.159917814000000,1.046944324000000,1.101127726000000,1.094546746000000,1.022814064000000,1.108147438000000,1.082262250000000,1.021936600000000];

    const bmi_rr_indv = [];

    for (let i = 0; i < bmi_rr_ref.length; i++) {
        bmi_rr_indv[i] = Math.pow(bmi_rr_ref[i], used_value_2) + (((used_value / 5) - used_value_2) * (Math.pow(bmi_rr_ref[i], used_value_2 + 1) - Math.pow(bmi_rr_ref[i], used_value_2)));
    }

    const bmi_rr_rel = [];

    for (let i = 0; i < bmi_rr_ref.length; i++) {
        bmi_rr_rel[i] = bmi_rr_indv[i] / bmi_rr_pop[i];
    }

    const bmi_rr_adj = [];

    for (let i = 0; i < bmi_rr_ref.length; i++) {
        if (i % 25 == 11) {
            bmi_rr_adj[i] = ((bmi_rr_rel[i] - 1)*0.91*0.9*0.65) + 1;
        } else if (i % 25 == 12) {
            bmi_rr_adj[i] = ((bmi_rr_rel[i] - 1)*0.84*0.97*0.35) + 1;
        } else if (i % 25 == 13|i % 25 == 14) {
            bmi_rr_adj[i] = ((bmi_rr_rel[i] - 1)*0.78*0.35) + 1;
        } else if (i % 25 == 15|i % 25 == 19) {
            bmi_rr_adj[i] = 1.000;
        } else if (i % 25 == 16) {
            bmi_rr_adj[i] = ((bmi_rr_rel[i] - 1)*0.69) + 1;
        } else {
            bmi_rr_adj[i] = bmi_rr_rel[i];
        }
    }

    result.textContent = `Your BMI is ${bmi_rr_adj} Unit`;

    return [bmi_diseases, bmi_rr_adj];

}