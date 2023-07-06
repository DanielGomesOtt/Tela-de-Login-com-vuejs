const useVerify =  async (token) => {
    try{
        let req = await fetch('http://localhost:3000/auth', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        let response = await req.json();
        if(response != 500 && response != false){
            return true;
        }else{
            return false;
        }
    }catch(error){
        return false;
    }
}

export default useVerify;