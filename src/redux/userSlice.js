import {createSlice} from "@reduxjs/toolkit" ;

export const userSlice = createSlice({ 
    name: "user",
    initialState : {
        name: "Lê Quỳnh Ái Vân",
        nameId: "lequynhaivan01",
        phoneNumber: "0767375921",
        password: "123456789",
        repeat:"123456789",
        email: "adminSSO1@domain.com",
        role: "Kế toán",
        avatarUrl: "../img/unsplash_Fyl8sMC2j2Q.png"
    },
    reducers : {
        update: (state, action) => {
            state.password= action.payload.password;
            state.repeat= action.payload.repeat;
        }
    }
});
export const {update} =userSlice.actions;
export default userSlice.reducer;