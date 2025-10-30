// src/services/productService.ts
import { db, storage } from "../firebase";
import {
  collection,
  doc,
  addDoc,
//   setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
//   serverTimestamp,
//   Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../models/all_models";
import { uploadToCloudinary } from "../cloudinary/uploadToCloudinary";

const productsCol = collection(db, "products");

export const createEulivyProduct = async (product: Product, imageFiles?: File[]) => {
  const now = Date.now();
  const productRef = await addDoc(productsCol, {
    ...product,
    createdAt: now,
    updatedAt: now,
    createdBy: product.createdBy ?? null,
  });

  // upload images if provided
  if (imageFiles && imageFiles.length) {
    const urls: string[] = [];
    for (const file of imageFiles) {
      const url = await uploadToCloudinary(file, "products/shirts");
      // const path = `products/${productRef.id}/${uuidv4()}_${file.name}`;
      // const storageRef = ref(storage, path);
      // await uploadBytes(storageRef, file);
      // const url = await getDownloadURL(storageRef);
      urls.push(url);
    }
    await updateDoc(productRef, { images: urls });
  }

  return productRef.id;
};

export const updateProduct = async (id: string, updates: Partial<Product>, newFiles?: File[]) => {
  const refDoc = doc(db, "products", id);
  await updateDoc(refDoc, {
    ...updates,
    updatedAt: Date.now(),
  });

  if (newFiles && newFiles.length) {
    const urls: string[] = [];
    for (const file of newFiles) {
      const path = `products/${id}/${uuidv4()}_${file.name}`;
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      urls.push(url);
    }
    // append images
    await updateDoc(refDoc, { images: [...(updates.images || []), ...urls] });
  }
};

export const deleteProduct = async (id: string) => {
  const refDoc = doc(db, "products", id);
  // Consider deleting storage files separately if needed
  await deleteDoc(refDoc);
};

export const getProduct = async (id: string): Promise<Product | null> => {
  const snap = await getDoc(doc(db, "products", id));
  console.log(snap)
  return snap.exists() ? ({ id: snap.id, ...(snap.data() as Product) } as Product) : null;
};

export const listProducts = async (searchParams?: string) => {
  let q;
  if (searchParams) {
    q = query(productsCol, where("categoryId", "==", searchParams), orderBy("createdAt", "desc"));
  } else {
    q = query(productsCol, orderBy("createdAt", "desc"));
  }
  const snaps = await getDocs(q);
  return snaps.docs.map((d) => ({ id: d.id, ...(d.data() as Product) } as Product));
};
