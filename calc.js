const num1 = prompt("Enter number 1 :");
const num2 = prompt("Enter number 2 :");
const opt = prompt("Enter +,-,*,/");
calc(num1,num2,opt);

function calc(n1,n2,op)
{
 switch(op)
 {
  case '+':
  console.log(n1+n2);
  break;
  case '-':
  console.log(n1-n2);
  break;
  case '*':
  console.log(n1*n2);
  break;
  case '/':
  console.log(n1/n2);
  break;
  default:
  console.log("Wrong choice");
  break;
 }
}
