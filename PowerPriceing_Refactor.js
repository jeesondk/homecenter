
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
    let fixedCost = 1.76;

    const messagePayload = [];

    const calcPrice = () => {
        return (fixedCost + msg.data.attributes.current_price).toFixed(2).toString();
    };

    const calcTomorrowPrice = (i) => {
        return (fixedCost + msg.data.attributes.tomorrow[(hour+i-23)]).toFixed(2).toString();
    };

    const calcTodayPrice = (i) => {
        return (fixedCost + msg.data.attributes.today[(hour+i)]).toFixed(2).toString();
    };

    const calculatedPrice = (i, hour) => {
        return i === 0 ?
            { payload:calcPrice()} :
                (hour + i > 23) ?
                    {payload:calcTomorrowPrice(i)}: {payload:calcTodayPrice(i)};
    };

    for (let i = 0; i < 24; i++) {
        messagePayload.push(calculatedPrice(i, hour));
    }

    return messagePayload;
    //NodeRed function end
}

let result = codeTest(msg);
console.log('------------------- Result Array ---------------------')
console.log(result);
console.log('------------------------------------------------------')


