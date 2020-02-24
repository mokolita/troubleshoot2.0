const usersReducer = (state = {user: [], requesting: false}, action) => {
    let index
    switch(action.type){
        case "START_ADDING_USER":
        return {
            ...state,
            user: [...state.user],
            requesting: true
          }
        case 'ADD_USER':
            return {...state, 
                user: {
                    first_name: action.user.first_name,
                    last_name: action.user.last_name,
                    id: action.user.id,
                    locations: action.user.locations},
                requesting: true}
        
        case 'DELETE_USER':
            index = state.findIndex(user => user.id === action.id)
            return [...state.slice(0, index), ...state.slice(index + 1)]
            
        default: 
            return state
    }
}

export default usersReducer