def sum_to_n_a(n):
    return int(n * (n + 1) / 2)

def sum_to_n_b(n):
    result = 0
    for num in range(1,n+1):
        result += num
    return result

def sum_to_n_c(n):
    if n == 1:
        return 1
    return n + sum_to_n_c(n - 1)

print(sum_to_n_c(10))
print(sum_to_n_b(10))
print(sum_to_n_a(10))
