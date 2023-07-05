const useVerifyExistToken =  async () => {
    if(localStorage.getItem("id") && localStorage.getItem('token')){
        let req = await fetch('http://localhost:3000/auth', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        let response = await req.json();
        if(response != 500){
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}

export default useVerifyExistToken;