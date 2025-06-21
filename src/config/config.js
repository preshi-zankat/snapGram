const appwriteConfig = {
  apiUrl: String(import.meta.env.VITE_APPWRITE_API_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  usersCollectionId: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
  postsCollectionId: String(import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID),
  likesCollectionId: String(import.meta.env.VITE_APPWRITE_LIKES_COLLECTION_ID),
  commentsCollectionId: String(import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default appwriteConfig