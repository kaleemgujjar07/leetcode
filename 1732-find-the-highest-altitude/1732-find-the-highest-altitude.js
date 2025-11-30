function largestAltitude(gain) {
  let currentAltitude = 0; // start at 0
  let maxAltitude = 0;     // highest seen

  for (let i = 0; i < gain.length; i++) {
    currentAltitude = currentAltitude + gain[i];

    if (currentAltitude > maxAltitude) {
      maxAltitude = currentAltitude;
    }
  }

  return maxAltitude;
}
