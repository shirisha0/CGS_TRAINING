s=input()
s=s.upper()#www
p=0
c=0
for i in range(len(s)):
    if s[i]=="W":
        p=p+1
    else:
        s=p*s[i]+s[i:]
        break
a=s[1]
for i in range(len(s)):
    if s[i]!=a and s[i]!="W":
        a=s[i]
    if s[i]=="W":
        s=s[:i]+a+s[i+1:]
for i in range(len(s)-1):
    if s[i]!=s[i+1]:
        c=c+1
print(c)

        
