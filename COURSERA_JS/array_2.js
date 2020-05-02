var limit=5;
function enter_numbers()
{
    
    nums=[]
    sum=Number(0);
   alert("Enter five numbers");
   for(i=0;i<limit;i++)
   {
    nums[nums.length]=window.prompt("Enter the number");
    sum+=Number(nums[i]);
   }
   averaged=sum/limit;
    document.getElementById("result").innerHTML="The average of five entered numbers is: "+ averaged;
 
}


