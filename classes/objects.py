class results:
    def __init__(self, fname, lname):
        self.fname=fname
        self.lname=lname
    
    def printname(self):
        print(self.fname, self.lname)

    def marks(self):
        term1=input("Enter your marks:")
        term2=input("Enter your marks:")
        term3=input("Enter your marks:")
        total= int(term1)+int(term2)+int(term3)
        print(total)

class final(results):

    def __str__(self, total):
       if total > 50:
           return f"You passed with{total}" 
       else:
           return f"You failed with{total}"
       
n1= results("Mrs", "Bee")
n1.printname()
n1.marks()
