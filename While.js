  // increment 
  let i = 1;
while(i<=10){
                                                  console.log(i);
                                                  i++;
                                                  
}
do{
                                                  console.log(i);
                                                  i++;

}while(i<=20);

// Addition of num
let j = 2;
let sum=0;
while(j<=20){
                                                  console.log(j)
                                                  sum += j;
                                                  j+=2;
}
console.log("addition",sum)
// reversing number
let num=12345;
rev=0;
while(num>0){
                                                  rev = rev*10+num%10
                                                  num=Math.floor(num/10)
}
console.log("reverse no.:",rev)