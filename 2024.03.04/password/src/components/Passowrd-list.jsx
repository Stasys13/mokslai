import {useEffect} from 'react'
 function Password_list () {
    useEffect (() => {
        let data = localStorage.getItem('data');
        if(!data)return;
        data = JSON.parse(data);
        setPassword_list
    })
}
export default Password_list