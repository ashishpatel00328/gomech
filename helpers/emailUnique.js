function chekingEmail(email,emailNow){
    email.forEach(el => {
        if(el == emailNow){
            return false
        }
    });
}
module.exports = chekingEmail