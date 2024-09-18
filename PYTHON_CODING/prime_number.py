def prime(a):
    for i in range(2,a-1):
        if a%i==0:
            return "Not prime number"
    return "yes prime number"
a=int(input())
print(prime(a))

