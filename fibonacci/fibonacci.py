
# ----------method 1

import math

n = 9
golden_ratio = 1.618
fibonacci = (golden_ratio ** n - (1 - golden_ratio) **n) / math.sqrt(5) 

fibonacci = round(fibonacci)

print(fibonacci)

# -----------method 2 collecting values in a list

# list1 = []
# a = 0
# b = 1
# c = 1
# while c < 54:
#   c = a + b
#   a = b
#   b = c
#   list1.append(b)
# print(list1)