// function validate() {
//     document.getElementById('company').addEventListener('change', companyInfo);
//     document.getElementById('submit').addEventListener('click', isFieldValid);
//     let validField = document.getElementById('valid');
//     let isEverythingValid = true;

    

//     function isFieldValid(){
//         let username = document.getElementById('username');
//         if(!isUsernameValid(username.value)){
//             addBorderColor(username);
//             isEverythingValid = false;
//         }else {
//             removeBorderColor(username);
//         }

//         let email = document.getElementById('email');
//         let password = document.getElementById('password');
//         let confirmPassword = document.getElementById('confirm-password');
        
//         if(!isPasswordValid(password.value)){
//             addBorderColor(password);
//             isEverythingValid = false;
//         }else {
//             removeBorderColor(password);
//         }

//         if(confirmPassword.value != password.value){
//             addBorderColor(confirmPassword);
//             addBorderColor(password);
//             isEverythingValid = false;
//         }else{
//             removeBorderColor(password);
//             removeBorderColor(confirmPassword);
//         }

//         if(!isEmailValid(email.value)){
//             addBorderColor(email);
//             isEverythingValid = false;
//         }else{
//             removeBorderColor(email);
//         }

//         if(document.getElementById('company').checked){
//             let companNumber = document.getElementById('companyNumber');
//             if(!isCompanyNumberValid(companyNumber.value)){
//                 addBorderColor(companyNumber);
//                 isEverythingValid = false;
//             }else{
//                 removeBorderColor(companyNumber);
//             }
//         }
//         if(isEverythingValid){
//             validField.style.display = 'block';
//         }else{
//             validField.style.display = 'none';
//         }
//     }

//     function isUsernameValid(username){
//         const regex = new RegExp('^[A-Za-z0-9]{3,20}$');
//        return regex.test(username);
//     }
//     function isEmailValid(email){
//         const regex = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/);     
//        return regex.test(email);
//     }
//     function isPasswordValid(password){
//         const regex = new RegExp('^[A-Za-z0-9_]{5,15}$');
//        return regex.test(password);
//     }
//     function isCompanyNumberValid(companyNumber){
//         return (Number.isInteger(value) && value>=1000 && value <=9999)
//     }

//     function addBorderColor(value){
//         value.style.borderColor = 'red';
//     }
//     function removeBorderColor(value){
//         value.style.border = 'none';
//     }
//     function companyInfo(event){
//         let companyInfo = document.getElementById('companyInfo');
//         if(event.target.checked){
//             companyInfo.style.display = 'block';
//         }else{
//             companyInfo.style.display = 'none'
//         }
//     }
// }
function validate() {

    //adding type='button' prop to BUTTON in HTML, preventing page from reload!!!
    document.querySelector("#submit").type = "button";


    const submitBtn=document.getElementById('submit');
    const isCompanyCheckbox=document.getElementById("company");
    

    submitBtn.addEventListener('click', onFormSubmission);
    isCompanyCheckbox.addEventListener('change', onCheckboxChange);
    isEverythingValid=true;

    function onFormSubmission(event) {
        
        
        const username=document.getElementById('username').value; 
        const password=document.getElementById('password').value; 
        const confirmPassword=document.getElementById('confirm-password').value; 
        const email=document.getElementById('email').value; 
        const companyNumber=document.getElementById('companyNumber').value; 

        isEverythingValid=true;
        validateUsername(username);
        validatePasswords(password, confirmPassword);
        validateEmail(email);
        validateCompany(Number(companyNumber));
        
        if (isEverythingValid==true) {
            document.getElementById('valid').style.display='block';
        }else{
            document.getElementById('valid').style.display='none';
        }
        
    }

    function validateCompany(value) {
        //first check if div is visible and checkbox is checked
        if (isCompanyCheckbox.checked==true) {
            //TODO can the number be float?
            if (Number.isInteger(value) && value>=1000 && value <=9999) {
                document.getElementById('companyNumber').style.borderColor='';                           
            }else{
                document.getElementById('companyNumber').style.borderColor = "red"; 
                isEverythingValid=false;
            }
        }
    }

    function onCheckboxChange(event) {
        if (event.target.checked == true) {
            document.getElementById('companyInfo').style.display='block';
        }else{
            document.getElementById('companyInfo').style.display='none';
        }
    }

    function validateEmail(value) {
        const regexEmail = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/);        
        if (!regexEmail.test(value)) {
            document.getElementById('email').style.borderColor = "red";
            isEverythingValid=false;            
        }else{
            document.getElementById('email').style.borderColor='';            
        }
    }

    function validatePasswords(password, confirmation) {
        const regexPassword = new RegExp('^[0-9a-zA-Z_]{5,15}$');
        //validation first pass
        if (!regexPassword.test(password)) {
            document.getElementById('password').style.borderColor = "red"; 
            isEverythingValid=false;           
        }else{
            document.getElementById('password').style.borderColor='';            
        }
        //validation second
        if (!regexPassword.test(confirmation)) {
            document.getElementById('confirm-password').style.borderColor = "red";
            isEverythingValid=false;            
        }else{
            document.getElementById('confirm-password').style.borderColor='';            
        }
        //validation if match
        if (password!=confirmation) {
            document.getElementById('password').style.borderColor = "red";
            document.getElementById('confirm-password').style.borderColor = "red"; 
            isEverythingValid=false;
            console.log('DONT MATCH');
        }

    }

    function validateUsername(value) {
        const regexUsername = new RegExp('^[0-9a-zA-Z]{3,20}$');        
        if (!regexUsername.test(value)) {
            document.getElementById('username').style.borderColor = "red"; 
            isEverythingValid=false;           
        }else{
            document.getElementById('username').style.borderColor='';            
        }
    }
}