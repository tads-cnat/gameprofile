const initialState = {

    page: 'Home'

}


const sidebarReducer = (state = initialState, actions:any) => {

    if(actions.type === 'navbar/setPage'){
        return {
            ...state,
            page: actions.payload
        }

    }

    return state

}

export default sidebarReducer