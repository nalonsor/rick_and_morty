export function validateUsername (username){
    //console.log(username);
    if(username === ''){
        return '* Username is required';
    }

    if(username.length > 35){
        return '* Username must be less than 35 characters';
    }

    //if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(username)){
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(username)){
        return '* Username must be a valid email address';
    }
    return '';
}

export function validatePassword(password){
    // console.log(password,password.length);
    if(password.length < 6 || password.length > 10){
        return '* Password must be between 6 and 10 characters';
    }

    //if(!/^\w+(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])/.test(password)){
    if(!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(password)){
        return 'Password must contain at least one uppercase letter, one lowercase letter and one number';
    }
    return '';
}

