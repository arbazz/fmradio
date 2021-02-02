
const data = { data: "1" }

const user = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return action.payload;
            break;
        }
        default:
            return state
    }
}

export default user;