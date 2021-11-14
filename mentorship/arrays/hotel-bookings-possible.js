// After sorting arrive and depart arrays, we need to look for three cases:

// set i = 0 (arrival index)
// set d = 0 (departure index)

// Case 1: What if (arrive[i] < depart[d])
//     - arrival-date is before the departure date 
//     - ONE extra room is needed
//     - because the new guest will arrive before the previous guest departs
//     - increment arrival index (i++)

// Case 2: What if (arrival[i] === departure[d]): 
//     - arrival-date and departure-date are same day
//     - NO extra room is needed 
//     - because previous guest will depart in the morning before the new guest arrives
//     - increment both indices (i++) (d++)

// Case 3: What if (arrive[i] > depart[d])
//     - arrival-date is after departure-date
//     - NO extra room needed
//     - because previous guest will depart a day+ before new guest arrives
//     - increment both indices (i++) (d++)
function hotel(arrivals, departures, roomsAvailable) {
  // set extra-rooms-needed to zero
  let extraRoomsNeeded = 0;
  // set index for arrival and departure
  let i = 0;
  let d = 0;
  // sort dates so we can compare
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);
  // while indices are less-than their respective array-lengths
  while (i < arrivals.length && d < departures.length) {
    // if arrival date is less-than departure date
    if (arrivals[i] < departures[d]) {
      // increment arrival index
      i++;
      // add 1 to rooms required
      extraRoomsNeeded++;
    } else {
      // increment both arrival and departure indices
      i++;
      d++;
    }
  }
  // return if rooms required is less-than-equal-to roomsAvailable;
  return extraRoomsNeeded <= roomsAvailable ? 1 : 0;
}

let arrival;
let departure;
let K;

arrival = [1, 2, 3];
departure = [2, 3, 4];
K = 1;
console.log(hotel(arrival, departure, K)); // 1 (true)

arrival = [1, 3, 5];
departure = [2, 6, 8];
K = 1;
console.log(hotel(arrival, departure, K)); // 0 (false)

arrival = [ 47, 4, 0, 12, 47, 31, 15, 49, 29, 33, 7, 22, 26, 24, 16 ]
departure = [ 95, 4, 26, 16, 51, 79, 43, 58, 32, 80, 30, 27, 29, 54, 16 ]
K = 10
console.log(hotel(arrival, departure, K)); // 1 (true)
