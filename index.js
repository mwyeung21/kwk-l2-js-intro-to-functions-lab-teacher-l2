// Write your code in this file!
function getUKTime()
{
  return new Date().getHours() + 5 //midwest time
}

//getUKTime(5)

function discountTicket(oriAmt)
{
  return oriAmt * 0.80
}

function tweetReply(str)
{
  return "Hey " + str + ", thanks so much for the support! I really appreciate it!";
  
  // why doesn this works?/cahnge color? return "Hey ${str} thanks!"
  

}




