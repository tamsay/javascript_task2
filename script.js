let data = [
    {principal : 2500, time : 1.8},
    {principal : 1000, time : 5},
    {principal : 3000, time : 1},
    {principal : 2000, time : 3},
];

let interestCalculator=(arr)=>{
    let interestData = [];

    for(x=0; x < arr.length; x++){
        let principal = arr[x].principal;
        let time = arr[x].time;

        if((principal >= 2500) && (time > 1 && time < 3)){
            let rate = 3;
            let result = ((principal * rate * time)/100);
            interestData.push({principal : principal, rate : rate, time : time, interest : result});
        }
        else if((principal >= 2500) && (time >= 3)){
            let rate = 4;
            let result = ((principal * rate * time)/100);
            interestData.push({principal : principal, rate : rate, time : time, interest : result});
        }
        else if((principal < 2500) || (time <= 1)){
            let rate = 2;
            let result = ((principal * rate * time)/100);
            interestData.push({principal : principal, rate : rate, time : time, interest : result});
        }
        else {
            let rate = 1;
            let result = ((principal * rate * time)/100);
            interestData.push({principal : principal, rate : rate, time : time, interest : result});
        }
    }
    console.log(interestData)
    return interestData;
}
interestCalculator(data);
