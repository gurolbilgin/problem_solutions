opslist = []


def scor_validator(ops):
    for el in ops:
        if el == "C":
            opslist.pop()
            # opslist.pop()
        elif el == 'D':
            opslist.append((opslist[-1]) * 2)
        elif el == '+':
            opslist.append(opslist[-2] + opslist[-1])
        else:
            opslist.append(int(el))
    return (sum(opslist), opslist)


print(scor_validator(["5", "2", "C", "D", "+"]))
# print(scor_validator(["5", "-2", "4", "C", "D", "9", "+", "+"]))
