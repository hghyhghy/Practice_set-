function isPalindrome(s) {
 
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
   
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
  }
  

  const inputString = "A man, a plan, a canal, Panama!";
  const result = isPalindrome(inputString);
  console.log(result);
  