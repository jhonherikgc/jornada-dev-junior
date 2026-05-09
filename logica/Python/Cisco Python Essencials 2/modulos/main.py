import mint 

def make_money():
    money = mint.mint()
    return f"Money has been generated with success, was generated: {money} dolars"

print(make_money())