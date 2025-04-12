# Write code in any language of your choice to find the distinct characters and their frequency of occurrences in a given string or sentence. Include both a positive test case and a negative test case to validate your code

# input = "Tanapo Tan"

def conut_string(str):
    count = {}

   
    for s in str:
        # print(s)
        if s not in count: 
            count[s] = 1  
        else: 
            count[s] = count[s]+1
    print(count)
str = "Tanapo Tan"
# str = ""
# str = [1,2,3,4,]  
conut_string(str)
# print()

