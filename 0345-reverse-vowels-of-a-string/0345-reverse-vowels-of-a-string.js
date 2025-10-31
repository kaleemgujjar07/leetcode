var reverseVowels = function(s) {
  const isVowel = (c) => "aeiouAEIOU".includes(c);

  const chars = s.split('');
  let l = 0, r = chars.length - 1;

  while (l < r) {
    while (l < r && !isVowel(chars[l])) l++;
    while (l < r && !isVowel(chars[r])) r--;

    if (l < r) {
      const tmp = chars[l];
      chars[l] = chars[r];
      chars[r] = tmp;
      l++;
      r--;
    }
  }

  return chars.join('');
};
