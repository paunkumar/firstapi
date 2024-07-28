import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private key = "encrypt!135790";

  constructor() { }

  /**
   * Encrypts the given text.
   * @param txt The text to encrypt.
   * @returns The encrypted text.
   */
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  /**
   * Decrypts the given text.
   * @param txtToDecrypt The text to decrypt.
   * @returns The decrypted text.
   */
  private decrypt(txtToDecrypt: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(txtToDecrypt, this.key);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      console.error('Decryption error:', e);
      return '';
    }
  }

  /**
   * Saves data to local storage.
   * @param key The key to use for storage.
   * @param value The value to store.
   */
  saveData(key: string, value: any): void {
    try {
      const jsonString = JSON.stringify(value);
      const encryptedData = this.encrypt(jsonString);
      localStorage.setItem(key, encryptedData);
    } catch (e) {
      console.error('Encryption error:', e);
    }
  }

  /**
   * Gets data from local storage.
   * @param key The key to retrieve the data from.
   * @returns The decrypted data or null if decryption fails.
   */
  getData(key: string): any {
    try {
      const encryptedData = localStorage.getItem(key) || '';
      const decryptedData = this.decrypt(encryptedData);
      return decryptedData ? JSON.parse(decryptedData) : null;
    } catch (e) {
      console.error('Decryption or parsing error:', e);
      return null;
    }
  }

  /**
   * Removes data from local storage.
   * @param key The key to remove.
   */
  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all data from local storage.
   */
  clearStorage(): void {
    localStorage.clear();
  }
}





