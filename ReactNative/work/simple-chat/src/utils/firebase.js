// Firebase 패키지에서 필요한 모듈만 개별적으로 import
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import config from '../../firebase.json';

// Firebase 앱 초기화
export const app = initializeApp(config);

// Firebase 인증 및 Firestore, Storage 설정
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Sign in function
export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

// Image upload function
const uploadImage = async uri => {
  if (uri.startsWith('https')) {
    return URL;
  }

  const response = await fetch(uri);
  const blob = await response.blob();
  const { uid } = auth.currentUser;
  const storageRef = ref(storage, `/profile/${uid}/photo.png`);
  await uploadBytes(storageRef, blob, { contentType: 'image/png' });

  return await getDownloadURL(storageRef);
};

// Sign up function
export const signup = async ({ name, email, password, photoUrl }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const photoURL = await uploadImage(photoUrl);
  await updateProfile(auth.currentUser, { displayName: name, photoURL });
  return user;
};

// Get current user info
export const getCurrentUser = () => {
  const { uid, displayName, email, photoURL } = auth.currentUser;
  return { uid, name: displayName, email, photoUrl: photoURL };
};

// Update user info
export const updateUserInfo = async photo => {
  const photoUrl = await uploadImage(photo);
  await updateProfile(auth.currentUser, { photoURL: photoUrl });
  return photoUrl;
};

// Sign out function
export const signout = async () => {
  await signOut(auth);
  return {};
};

// Create channel in Firestore
export const createChannel = async ({ title, description }) => {
  const channelCollection = collection(db, 'channels');
  const newChannelRef = doc(channelCollection);
  const id = newChannelRef.id;
  const newChannel = {
    id,
    title,
    description,
    createdAt: Date.now(),
  };
  await setDoc(newChannelRef, newChannel);
  return id;
};

// Create message in Firestore
export const createMessage = async ({ channelId, message }) => {
  const docRef = doc(db, `channels/${channelId}/messages`, message._id);
  await setDoc(docRef, { ...message, createdAt: Date.now() });
};
