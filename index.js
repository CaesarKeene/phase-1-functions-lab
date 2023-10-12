// Code your solution in this file!


function distanceFromHqInBlocks(blockDistance) {
    if (blockDistance >= 42) {
        return blockDistance - 42;
    } else { return 42 - blockDistance; }
}

function distanceFromHqInFeet(blockDistance){
    let feetFromHq = distanceFromHqInBlocks (blockDistance)
    return feetFromHq*264
} 

function distanceTravelledInFeet(start, destination){
    let distanceDifference = Math.abs(start-destination)
    return distanceDifference*264 
} 

function calculatesFarePrice(start,destination){
    const feetTravelled = distanceTravelledInFeet(start, destination)
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}