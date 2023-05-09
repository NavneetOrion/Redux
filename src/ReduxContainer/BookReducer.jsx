import { buy_book } from "./BookType"
const initialstate = {
  NumberofBooks : 20
}

const BookReducer = (state=initialstate,action)=>{
  switch(action.type){
    case  buy_book: return {
      ...state,NumberofBooks:state.initialstate-1
    }
    default : return state
  }
}

export default BookReducer;