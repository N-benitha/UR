def nearest(n):
    return abs(n-50)
mylist=[100, 50, 65, 82, 23]
mylist.sort(key= nearest)
print(mylist)
newlist=["sihs", "KPS", "GHA", "gss"]
newlist.sort(key= str.lower)
print(newlist)