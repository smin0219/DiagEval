import axios from 'axios'

const baseuri = "https://sitapi.brdg.kr/api/sit/";
// const baseuri = "https://localhost:7037/";

const GetDefaults = () => {
    try{
        return axios.get(baseuri + 'defaults');
    }
    catch(error){
        console.error(error);
    }
}

const GetCodes = () => {
    try{
        return axios.get(baseuri + 'codes');
    }
    catch(error){
        console.error(error);
    }
}

const GetUValues = () => {
    try{
        return axios.get(baseuri + 'uval');
    }
    catch(error){
        console.error(error);
    }
}

const GetUserEnter = (id_etr) => {
    try {
        axios
          .get(baseuri + "get-userenter", {
            params: { id_etr: id_etr },
          })
          .then((response) => {
              return response;
          })
    }
    catch(error){

    }
}


const GetUsgTypes = (id) => {
    try{
        const headers = {'Content-Type': 'application/json'}
        const response = axios.post(baseuri + 'typload',  id , {headers: headers})
            .then(function a(response){
                if(response!=undefined){
                    return response;
                }
            });
    }
    catch(error){
        console.error(error);
    }
}

const InsertUserEnter = (userEnter) => {
    try{
        var userEnterValues = JSON.stringify(userEnter);
       axios.post(baseuri + 'userenter', userEnterValues,
            { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        ).then(response => {
            return response.data
        });
    }
    catch(error){
        console.error(error);
    }
}

const InsertUsgTypes = (usgTypes) => {
    try{
        const headers = {'Content-Type': 'application/json'}
        const response = axios.post(baseuri + 'usgtype',  usgTypes , {headers: headers})
            .then(function a(response){
                if(response!=undefined){
                    return response;
                }
            });
    }
    catch(error){
        console.error(error);
    }
}

export default {GetDefaults, GetCodes, GetUValues, InsertUserEnter, InsertUsgTypes, GetUserEnter}
