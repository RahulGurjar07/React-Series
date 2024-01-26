// ager future me bhi  kabhi appwrite ko use karna pade to ye file ko use kar sakte hai
// ye file me jo service ha wahi dusre file mee bhi use karege to isi ko copy kar ke use kar sakete he 
// ye file ko use karne ke liye appwrite ko install karna padega

import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    ID;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create( ID.unique(),email, password, name);
            if (userAccount){
                // call anthor method
                return this.login({email, password});

            }
            else{
                return userAccount;
            }

        } catch (error) {
            console.log("error when creating user:: auth.js",error);
            
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("error in login function :: auth.js",error);
            
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ",error);
            
        }

        return null; 
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error ",error);
            
        }
    }

}

const authService = new AuthService();

export default AuthService;