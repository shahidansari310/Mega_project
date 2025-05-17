import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteurl).setProject(conf.projectid);
    this.datatbases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({title,slug,content,featuredImage,status,userid}){
    try {
        return await this.databases.createDocument(
            conf.dbid,
            conf.collectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userid
            }
        )
    } catch (error) {
        throw error;
    }
  }

  async updatePost(slug ,{title,content,featuredImage,status,userid}){
    try {
        return await this.databases.updateDocument(
            conf.dbid,
            conf.collectionid,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
    } catch (error) {
        throw error
    }
  }

  async deletePost(slug){
    try {
    await this.databases.deleteDocument(
            conf.dbid,
            conf.collectionid,
            slug,
        )
        return true
    } catch (error) {
        throw error
        // return false
    }
  }

  async getPost(slug){
    try {
        await this.databases.getDocument(
            conf.dbid,
            conf.collectionid,
            slug
        )
        return true        
    } catch (error) {
        throw error
    }
  }

  async getPosts(queries=[Query.equal["status","active"]]){
    try {
        await this.databases.listDocuments(
            conf.dbid,
            conf.collectionid,
            queries,
        )
        return true        
    } catch (error) {
        throw error
    }
  }

  //file uplaod
  async UploadFile(file){
  try {
    await this.bucket.createFile(
    conf.bucketid,
    ID.unique,
    file
    )
    return true
  } catch (error) {
    throw error
  }
  }

  async deleteFile(file){
  try {
    await this.bucket.deleteFile(
        conf.bucketid,
        file,
    )    
    return true
  } catch (error) {
    throw error
  }
  }

  getfilePreview(fileid){
    try {
        return this.bucket.getFilePreview(
            conf.bucketid,
            fileid
        )
    } catch (error) {
        throw error
    }
  }
}

const databaseservice = new DatabaseService();

export default databaseservice;
