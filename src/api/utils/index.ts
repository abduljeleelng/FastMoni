import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const authencate = async ({token}:{token:string}) =>{
    try {
        await AsyncStorage.setItem("FASTA_USER_TOKEN",token)
        return true
    } catch (error) {
        console.log("registered user token in the App "+error)
        return false
    }
}

export const isAuthenticated = async () =>{
    try {
        let data = await AsyncStorage.getItem("FASTA_USER_TOKEN");
        if (!data) {
            return false
        }
        return true
    } catch (error) {
        console.log("check if the user already login"+error)
        return false
    }
}

export const removeToken = async () =>{
    try {
        return await AsyncStorage.removeItem("FASTA_USER_TOKEN");
    } catch (error) {
        console.log("check if the user already login"+error)
        return false
    }
}



export {}