import { makeAutoObservable } from "mobx";
import { autorun, set, toJS } from 'mobx'

export function autoSave(_this: any, name: string) {
 const storedJson = localStorage.getItem(name)
 if (storedJson) {
  set(_this, JSON.parse(storedJson))
 }
 autorun(() => {
  const value = toJS(_this)
  localStorage.setItem(name, JSON.stringify(value))
 })
}

export interface User {
  id: number;
  name: string;
  date:Date;
  position:UserPosition|string;
  occupation:UserOccupation|string;
  sex:string;  
  }


  export enum UserPosition{
    Lead='Lead',
    Senior='Senoir',
    Middle='Middle',
    Junior='Junior'
  }

  export enum UserOccupation{
    Full='Полная',
    Partial='Частичная',
    Empty=''
  }

export const UserPositionList:string[]=[
  'Lead',
  'Senoir',
  'Middle',
  'Junior',
]

export const UserOccupationList:string[]=[
  'Полная',
  'Частичная'
]


  
  const emptyUser:User={
    id:1,
    name: '',
    date:new Date(),
    position:'',
    occupation:'',
    sex:''
  };

 const removeUser = (users: User[], id: number): User[] =>
 users.filter((user) => user.id !== id);

 const addUser = (users: User[],newUser:User): User[] => [
  ...users,newUser
];

const  userById=(users: User[], id: number): User =>
users.filter((user) => user.id === id)[0];




class Store{
  users:User[]=[];
  newUser:User=emptyUser;
  selectedUser:User=emptyUser;
  

  constructor(){
    makeAutoObservable(this);
    autoSave(this,"userList")
  }

  addUser(){
    const newUserObj = {...this.newUser}
    newUserObj.id=Math.max(0, Math.max(...this.users.map(({ id }) => id))) + 1
    this.users = addUser(this.users,newUserObj)
    this.newUser= emptyUser;
  }

  

  removeUser(id:number){
this.users=removeUser(this.users,id)
  }

  userById(id:number){
this.selectedUser= userById(this.users,id);
  }

  changeUser(id:number){
    this.users.map(user=>user.id === id?this.selectedUser:user)
  }

  load(url: string) {
    fetch(url)
      .then((resp) => resp.json())
      .then((tds: User[]) => (store.users = tds));
  }
}

const store = new Store();
export default store;


