
let invalidBorder="2px solid red"
let validBorder="2px solid green"
let fnameNode;
let spanNode1;
let pass1Node
let spanNode6
let showpNode


$(document).ready(function(){
    fnameNode=$('#fname')
    spanNode1=$('#error1')
    fnameNode.blur(()=>validate1())
    pass1Node=$("#pass1")
    spanNode6=$('#error6')
    pass1Node.blur(()=>validate6())
    showpNode=$("#showpassword")
    showpNode.change(()=>showpassword1())
    $('#rform').submit(()=>formValidate())
    
})

function validate1(){
let firstName=fnameNode.val()
spanNode1.text("")
        if(firstName===""){
            spanNode1.text("Username is required")
            fnameNode.css({"border":invalidBorder})
            return false
        }
        else{
            fnameNode.css('border',validBorder)
            return true
        }

    }


function validate6(){
let pass1=pass1Node.val() 
let regexp=new RegExp("^[a-zA-Z]{2,12}$"); 
let result=regexp.test(pass1)
spanNode6.text("")

if(pass1===""){
            spanNode6.text("password is required")
            pass1Node.css("border",invalidBorder)
            return false
            }
else if(result===false){
        spanNode6.text("Your password must alphabets")
        pass1Node.css("border",invalidBorder)
        return false                   }
        
else{
        pass1Node.css("border",validBorder)
        return true
                                }
        }  
                
                
function showpassword1() {
    
    if(showpNode.prop('checked'))
       {
        pass1Node.attr('type','text')
        
       }
    else{
        pass1Node.attr('type','password')
    
        }
    
}

function formValidate() {
    let st1=validate1()
    let st6=validate6()
   
    return (st1  && st6 )

}
