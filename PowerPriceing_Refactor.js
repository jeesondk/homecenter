
let msg = { data:{
        entity_id: "sensor.nordpool_kwh_dk2_dkk_3_10_025",
        state: "1.882",
        attributes:{
            current_price: 1.882,
            average: 1.58325,
            off_peak_1: 1.370625,
            off_peak_2: 1.3479999999999999,
            peak: 1.765,
            min: 1.321,
            max: 2.36,
            unit: "kWh",
            currency: "DKK",
            country: "Denmark",
            region: "DK2",
            low_price: false,
            tomorrow_valid: true,
            today: [1.49,1.346,1.343,1.344,1.346,1.362,1.365,1.369,1.78,2.139,1.95,1.882,1.513,1.466,1.442,1.673,2.055,2.36,1.952,1.429,1.348,1.382,1.341,1.321],
            tomorrow: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            raw_today: [1.49,1.346,1.343,1.344,1.346,1.362,1.365,1.369,1.78,2.139,1.95,1.882,1.513,1.466,1.442,1.673,2.055,2.36,1.952,1.429,1.348,1.382,1.341,1.321],
            raw_tomorrow: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
            unit_of_measurement: "DKK/kWh",
            icon: "mdi:flash",
            friendly_name: "nordpool_kwh_dk2_dkk_3_10_025",
            last_changed: "2022-01-15T10:20:17.632651+00:00",
            last_updated: "2022-01-15T10:20:17.632651+00:00"
        }
    }
};


//Wrapper to run code as function!
function codeTest (msg) {

    //NodeRed function start
    let now = new Date();
    let hour = now.getHours();

    const Season = {
        Summer: 'Summer',
        Winter: 'Winter',
    };

    const Rate = {
        Low: 'Low',
        High: 'High',
        Peak: 'Peak'
    };

    const transportPriceMatrix = {
        Summer : {
            Low: 1.214862,
            High: 1.288862,
            Peak: 1.643862
        },
        Winter: {
            Low: 1.214862,
            High: 1.510762,
            Peak: 2.398262
        },
    };

    const messagePayload = [];

    const fixedCost = (h) => {

        //handling last day of month calculations
        let month = now.getMonth();
        let day = now.getDay();
        let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth()+1, 0);

        if(day == lastDayOfMonth.getDay()){
            month++;
        }

        let fc = transportPriceMatrix[getSeason(month)][getRate(h)]
        console.log("using fixed cost:", fc);
        return fc;
    };

    const getSeason = (month) => {
        if (month < 10 && month > 3){
                console.log("Season is summer, month is: ", month);
                return Season.Summer;
        }
        else {
            console.log("Season is winter, month is: ", month);
            return Season.Winter;
        }
    };

    const getRate = (h) => {
       if(h < 5 && h > -1){
           console.log("Rate is Low, hour is: ", h);
           return Rate.Low;
       }
       if(h < 22 && h > 16){
           console.log("Rate is High, hour is: ", h);
           return Rate.Peak;
       }
       else {
           console.log("Rate is High, hour is: ", h);
           return Rate.High;
       }
    };

    const calcPrice = () => {
        return Number(fixedCost(hour) + msg.data.attributes.current_price);
    };

    const calcTomorrowPrice = (i) => {
        return Number(fixedCost(hour+i-23) + msg.data.attributes.tomorrow[(hour+i-23)]);
    };

    const calcTodayPrice = (i) => {
        return Number(fixedCost(hour+i) + msg.data.attributes.today[(hour+i)]);
    };

    const calculatedPrice = (i, hour) => {
        return i === 0 ?
            calcPrice() :
                (hour + i > 23) ?
                    calcTomorrowPrice(i): calcTodayPrice(i);
    };

    for (let i = 0; i < 24; i++) {
        let calcResult = calculatedPrice(i, hour);

        if(calcResult <= fixedCost(hour)){
            messagePayload.push({payload:'NaN'});
        }
        else {
            messagePayload.push({payload:calcResult.toFixed(2)});
        }
    }

    return messagePayload;
    //NodeRed function end
}

let result = codeTest(msg);
console.log('------------------- Result Array ---------------------')
console.log(result);
console.log('------------------------------------------------------')


