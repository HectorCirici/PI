import sys

# sys.argv is a list in Python, which contains the command-line arguments passed to the script.
# With the help of this list, you can handle command line arguments in your Python program.

# sys.argv[0] is the script name itself, so we start from index 1
args = sys.argv[1:]
mainList = []
# Let's print the arguments to see what we get
for i, arg in enumerate(args):
    mainList.append(arg)

############################# max | min | function #############################
def integrales(max, min, funct):
    

    funct2 = funct.split('+')
    funct_final = []
    sings = [1]
    var2 = 0
    calcA = 0
    calcB = 0

    for y in funct2:
        var = True
        var_list = []
        for g in y:
            if g == '-':
                    var = False
                    
        if var:
            sings.append(1)
            funct_final.append(y)
        else:
            var_list = y.split('-')
            for j in range(len(var_list)-1):
                sings.append(0)
            var_list = y.split('-')
            for j in range(len(var_list)):
                funct_final.append(var_list[j])
                
    for y in funct_final:
        var = True
        elv = 2
        prod = 1
        var_list = []
        var_list2 = []
        for g in y:
            if g == 'x':
                var = False
        if var:
            if sings[var2] == 1:
                calcA += max*int(y)
                calcB += min*int(y)
            else:
                calcA -= max*int(y)
                calcB -= min*int(y)
        else:
            var_list = y.split('x')
            var_list2 = var_list[1].split('**')
        
            if var_list[0] != '':
                prod = var_list[0]
            if len(var_list2) != 1:
                elv = int(var_list2[1]) +1
            if sings[var2] == 1:
                calcB += eval(str(prod)+'*'+str(min)+'**'+str(elv)+'/'+str(elv))
                calcA += eval(str(prod)+'*'+str(max)+'**'+str(elv)+'/'+str(elv))
            else:
                calcB -= eval(str(prod)+'*'+str(min)+'**'+str(elv)+'/'+str(elv))
                calcA -= eval(str(prod)+'*'+str(max)+'**'+str(elv)+'/'+str(elv))
        var2 += 1

    return calcA - calcB

print(integrales(int(mainList[2]),int(mainList[1]),mainList[0]))
   