export const locationsReducer = (state = {locations: [], requesting: false}, action) => {
    let index
    switch(action.type){
        case "START_ADDING_LOCATIONS":
        return {
            ...state,
            locations: [...state.locations],
            requesting: true
          }
        case 'ADD_LOCATIONS':
            return {...state, 
                locations: action.locations,
                requesting: false}

        case 'DELETE_LOCATION':
            index = state.findIndex(location => location.id === action.id)
            return [...state.slice(0, index), ...state.slice(index + 1)]
            
        default: 
            return state
    }
}