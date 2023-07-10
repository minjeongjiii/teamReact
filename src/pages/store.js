/* 리덕스 관리파일, 컴포넌트가 아님*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

//스테이트 만들기 createSlice
const user = createSlice ({
  name: 'user',
  initialState: {name:'차은우', memberYear:1}, // initialState초기값
  reducers: {
    changeName(state) {
      state.name =  state.name + ' : Green'
    },
    changeYear(state, action) {
      state.memberYear += action.payload
    } 
  }
})
const cart = createSlice({
  name: 'cart',
  initialState: [], 
  reducers: {
    addItem(state, action) { 
      const index = state.findIndex((findId) => { 
        return findId.id === action.payload.id
      })
      if(index > -1) { 
        state[index].count++
      } else { 
        state.push(action.payload)
      }
    }, 
    deleteItem(state, action) {
      const index = state.findIndex((findId) => { 
        return findId === action.payload
      }) 
      state.splice(index,1)
    }, //deleteItem
    addCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id === action.payload
      })
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((findId) => { 
        return findId.id === action.payload
      })
      if(state[index].count > 1) 
        state[index].count--
    }
  }
})

export const { addItem, deleteItem, addCount, subCount } = cart.actions 
export const { changeName, changeYear } = user.actions 


export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 

