function distanceFromHqInBlocks(location){
    
    let distance = (location - 42);

    if (distance < 0){
        return (distance * -1)
    }

    else {
        return distance
    }
}

function distanceFromHqInFeet(location){

    let distance = (location - 42) * 264;

    if (distance < 0){
        return (distance * -1)
    }

    else {
        return distance
    }
}

function distanceTravelledInFeet(start, destination){
    let travel = (destination - start) * 264

    if (travel < 0){
        return (travel * -1)
    }
    else {
        return travel;
    }

}

function calculatesFarePrice(start, destination){
    // subtract start from destination and multiply by 264 to get feet
    const fare = Math.abs(destination - start) * 264

    // return 0 since there is no charge for first 400
    if (fare <= 400) {
        return 0
    } else if (fare <= 2000) {
        const fared = fare -400;
        const faredd = fared * 0.02;
        return faredd
    } else if (fare <= 2500) {
        return 25
    } else if (fare >= 2500) {
        return 'cannot travel that far'
    }


}

    // // multiply fare by 0.02 (cents) and subtract the 
    // //first 400 bcoz they aren't charged
    // else if (fare => 400 && fare <= 2000){
    //     return (fare - 400) * 0.02

    // } 
    
    // // charge 35 for fare between 2000 & 2500
    // else if (fare <= 2000){
    //     return 25
    // }
    
    // // return 'cannot travel that far' for > 2500 feet
    // else {
    //     return "cannot travel that far"
    // }

