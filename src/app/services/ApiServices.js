


class ApiService{
     fetchGet = async (url, data) => {
        try {
            const response = await fetch(url, data);
            const jsonData = await response.json();
            return jsonData
        } catch(e){
            console.log("Error", e);
        }
     }

     fetchPost = async (url, data) => {
         try {
            const response = await fetch (url, {
                method: 'POST',
                body: JSON.stringify(data),
               
            })
            const jsonData = await response.json() 
            return jsonData
         }catch (e){
            console.log("Error:",  e)
         }
     }
}

export default ApiService