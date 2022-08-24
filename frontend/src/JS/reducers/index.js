import {combineReducers} from "redux"
import {formationReducer} from "./formationReducer"
import {userReducer} from "./userReducer"
import {profileReducer} from "./profileReducer"

export const rootReducer=combineReducers({formationReducer,userReducer,profileReducer})