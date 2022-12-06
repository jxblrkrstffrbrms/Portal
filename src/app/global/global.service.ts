import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  srcode = null;
  isStudent = null;
  name = null;
  section = null;
  isLoggedIn = false;
  tasks = [];
  public is_admin = false;
  constructor() { }

  setCode(code) {
    this.isLoggedIn = true;
    this.srcode = code;
  }

  getCode() {
    return this.srcode;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setSection(section) {
    this.section = section;
  }

  getSection() {
    return this.section;
  }

  setType(type) {
    this.isStudent = type;
  }

  getType() {
    return this.isStudent;
  }

  setIsAdmin(type) {
    this.is_admin = type;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
  
  getTasks() {
    return this.tasks
  }

  loggedIn() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }





}
