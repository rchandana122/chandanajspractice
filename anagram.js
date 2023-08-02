function areAnagram(str1,str2)
{
    //Get lengths of both strings
    let n1 = str1.length;
    let n2 =str2.length;
    //If length of both strings is not same,
    //then they cannot be anargram
    if (n1 != n2)
        return false;
        //sort both strings
        str1.sort();
        str2.sort()
        //compare sorted strings
        for (let i = 0; i < n1; i++)
           if (str1[i] != str2[i])
           return false;

   // return true;
}
   / * Driver code*/
   let str1=['g','r','a','m' ];
   let str2=['a','r','m'];
   //function call
   if (areAnagram(str1, str2))
        document.write("the two strings are" + "anagram of each other<br>");
   else
         document.Write("the two strings are not" + "anagram of each other<br>");
