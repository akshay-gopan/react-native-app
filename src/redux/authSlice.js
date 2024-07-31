import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';


export const signup = createAsyncThunk('auth/signup', async ({ name, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const { uid } = userCredential.user;
  await setDoc(doc(db, 'users', uid), {
    name,
    email,
    uid,
  });
  return { uid, name, email };
});


export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const { uid } = userCredential.user;
  const userDocRef = doc(db, 'users', uid);
  const userDoc = await getDoc(userDocRef);
  return { uid, ...userDoc.data() };
});


export const logout = createAsyncThunk('auth/logout', async () => {
  await signOut(auth);
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
