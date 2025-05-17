const conf={
    appwriteurl:string(import.meta.env.VITE_APPWRITE_URL),
    projectid:string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    dbid:string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionid:string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketid:string(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf