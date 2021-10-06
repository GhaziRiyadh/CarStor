def ret(x,y):
    if  isinstance(x, list) and isinstance(y, list) :
        if len(x) == len(y):
            return all(list(map(lambda x , y : type(x) == type(y) , x , y)))
    elif (isinstance(x, (int,str)) and isinstance(y,  (int,str))):
        return True
    else:
        return False


def same_structure_as(original,other):
    end = []
    if type(original) is not list or type(other) is not list or len(original) != len(other) :
        return False

    for x in range(len(original)):
        end.append(ret(original[x],other[x]))

    print(end)

    return all(end)

def same_structure_as1(original, other):
    if type(original) == list == type(other):
        return len(original) == len(other) and all(map(same_structure_as1, original, other))
    else:
        return type(original) != list != type(other)

def same_structure_as2(a, b):
    return (False if not (isinstance(a, list) and isinstance(b, list)) or len(a) != len(b)
            else all(same_structure_as2(c, d) for c, d in zip(a, b) if isinstance(c, list)))

if __name__=="__main__":
    print(same_structure_as2([[[],[]]],[[1,1]] ))
