export default async function useVerify(token){
    let req = await fetch('http://localhost:3000/auth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    let response = req.json();
    if(response != 500){
        return true;
    }else{
        window.location.replace('http://localhost:5173/');
    }
}