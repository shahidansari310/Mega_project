import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.projectid);
        this.account=new Account(this.client);
    }


    //Create a new user ID
    async createAccount({email,password,name}){
        try {
            const useracc=await this.account.create(ID.unique(),email,password,name)
            if(useracc){
                return this.login({email,password})

            }
            else{
                return useracc;
            }
        } catch (error) {
            throw error;
        }
    }


    //Login in existing account
    async login({email,password}){
        try {
            return await this.account.createSession(email,password);
        } catch (error) {
            throw error;          
        }
    }

    //Get current User
    async getcurruser(){
        try {
    return await this.account.get();
     } catch (error) {
    if (error.code === 401) {
      return null;
    }
    throw error; 
  }
    }

    //Logout
    async logout({}){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authservice=new Authservice();

export default authservice ;