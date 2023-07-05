const useVerify =  async (token) => {
    let req = await fetch('http://localhost:3000/auth', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    let response = await req.json();
    if(response != 500){
        return true;
    }else{
        return false;
    }
}

export default useVerify;