import os
os.system("clear")

numbers = []
divisableNumbers = [] 

def perfectNumber(num):
  number = num
  perfect = number, "is a perfect number!"
  notPerfect = number, "is NOT a perfect number!"
 
  
  for i in range(number):
    numbers.append(i)
    number -= 1
    # print(num)
    # print(numbers)

  del numbers[0] 
  
  for i in numbers:
    if ((numbers[-1] + 1) % i == 0):
      divisableNumbers.append(i)
  
  Sum = sum(divisableNumbers)
  
  if ((numbers[-1] + 1) == Sum):
    print(perfect)
  else:
    print(notPerfect)
  

# one this that really ridicoulus is when the function inputs below are run individually, there is not any errors, but when they are run as below, division by zero error message is recieved.

perfectNumber(6)
perfectNumber(81)
perfectNumber(28)
perfectNumber(496)
perfectNumber(55)
perfectNumber(8128)


