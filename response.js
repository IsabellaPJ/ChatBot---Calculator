function getBotResponse(input) {
    const greet=['hi','hello','hey','start another operation','some other operation','some other operations','some another operation','some another operations','some more operation','some more operations','more operations','more operation','another operation','another operations']
    const operation=['add',,'sum','addition','+','plus','subtract','sub','subtraction','minus','-','multiply','*','times','multiplication','divide','division','by','/','mod','modulus','reminder','%','exponent','pow','power','^']
    if(greet.indexOf(input.toLowerCase())!==-1){
        return "Hello!<br>what mathematical operation do I want to do?"
    }
    if(operation.indexOf(input.toLowerCase())!==-1){
        sessionStorage.setItem("Operator",input.toLowerCase())
        if(input.toLowerCase()=='exponent' || input.toLowerCase()=='pow' || input.toLowerCase()=='power' || input.toLowerCase()=='^'){
            return "What is the base?"
        }
        else{
            return "what is the first operand?"
        }        
    }
    if(Number.isInteger(parseInt(input)) && sessionStorage.getItem("what")!="yes"){
        sessionStorage.setItem("First Operand", parseInt(input))
        sessionStorage.setItem("what", "yes")
        if(sessionStorage.getItem("Operator")=='exponent' || sessionStorage.getItem("Operator")=='pow' || sessionStorage.getItem("Operator")=='power' || sessionStorage.getItem("Operator")=='^'){
            return "What is the power?"
        }
        else{
            return "what is the second operand?"
        }  
    }
    else if(sessionStorage.getItem("what")=="yes"){
        sessionStorage.setItem("Second Operand", parseInt(input))
        operator=sessionStorage.getItem("Operator")
        a=parseInt(sessionStorage.getItem("First Operand"))
        b=parseInt(sessionStorage.getItem("Second Operand"))
        if(operator=='add' || operator=='addition' || operator=='+' || operator=='sum' || operator=='plus'){
            ans=a + b
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Sum of "+a+" and "+b+" is "+ans
        }
        if(operator=='sub' || operator=='subtract' || operator=='subtraction' || operator=='-' || operator=='minus'){
            ans=a-b
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Difference of "+a+" and "+b+" is "+ans
        }
        if(operator=='multiply' || operator=='multiplication' || operator=='*' || operator=='times'){
            ans=a*b
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Multiplication of "+a+" and "+b+" is "+ans
        }
        if(operator=='divide' || operator=='division' || operator=='/' || operator=='by'){
            ans=a/b
            if(b==0){
                sessionStorage.removeItem("Second Operand")
                return "Can't be 0. enter a valid operand!"
            }
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Division of "+a+" and "+b+" is "+ans
        }
        if(operator=='mod' || operator=='modulus' || operator=='reminder' || operator=='%'){
            ans=a%b
            if(b==0){
                sessionStorage.removeItem("Second Operand")
                return "Can't be 0. enter a valid operand!"
            }
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Modulus of "+a+" and "+b+" is "+ans
        }
        if(operator=='exponent' || operator=='pow' || operator=='power' || operator=='^'){
            ans=Math.pow(a,b)
            sessionStorage.removeItem("First Operand")
            sessionStorage.removeItem("Second Operand")
            sessionStorage.removeItem("what")
            return "Power of "+a+" and "+b+" is "+ans
        }
    }
}