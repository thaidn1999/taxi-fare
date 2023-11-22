export const priceFare = (
  distanceTravel: number,
  travelUnit: number,
  costPerDistance: number,
  baseFareDistance: number,
  baseFarePrice: number
): number => {
  if (distanceTravel > baseFareDistance) {
    // Distance Traveled Units = (Distance traveled - Base Fare Distance) / Traveled Unit
    const distanceTravelUnit = (distanceTravel - baseFareDistance) / travelUnit;
    // Fare = Base Fare Price + (Distance Traveled Units * Cost Per Distance Traveled)
    return baseFarePrice + distanceTravelUnit * costPerDistance;
  } else {
    return baseFarePrice;
  }
};
