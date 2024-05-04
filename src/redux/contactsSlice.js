import { createSlice } from "@reduxjs/toolkit";
import { initialStateContacts } from "./constants";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    // initialState: {
    //      items: []  
    // },

    
    
    reducers: {
        addContact: {
            reducer(state, action) {
                //  state.items.push(action.payload)
                state.push(action.payload)
            },
            prepare(values) {
                return {
                    payload: {
                        ...values,
                        id: crypto.randomUUID(),
                    }
                }
            }
        },
        
        deleteContact: (state, action) => {
        // state.items = state.items.filter(contact => contact.id !== action.payload); 
            return state.filter(contact => contact.id !== action.payload);
        }
    }
    })


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;