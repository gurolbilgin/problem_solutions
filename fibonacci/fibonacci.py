
import math

n = 9
golden_ratio = 1.618
fibonacci = (golden_ratio**n - (1-golden_ratio)**n) // math.sqrt(5) 

print(fibonacci)