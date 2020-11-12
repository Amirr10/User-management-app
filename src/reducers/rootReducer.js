const initState = {
    users: [
        {id:1, name:'Amir',email:'a@gmail.com', role:[]},
        {id:2, name:'Jon',email:'job@gmail.com', role:[]},
        {id:3, name:'Messi',email:'leo@gmail.com', role:[]}
    ],
    fakeUsers: [],
    id:'',
    input:'',
    selected: '',
    flag: false,
    sidebarFlag: false
}


const formReducer = (state = initState, action) => {

    switch(action.type){

        case `DISPLAY_FORM`:
            return {
                ...state,
                flag: action.payload
            }

        case `DISPLAY_SIDEBAR`:
            return {
                ...state,
                sidebarFlag: action.payload[0],
                id: action.payload[1] - 1
            }

        case 'CLOSE_SIDEBAR':
            return {
                ...state,
                sidebarFlag: false
            }

        case 'TEXT_NAME':
            return {
                ...state,
                name: action.name
            }

        case 'TEXT_EMAIL':
            return {
                ...state,
                email: action.email
            }  

        case 'FORM_SUBMIT':
            let users = state.users
            let id = users.length + 1
            let newUser = { id:id, name: action.payload.name, email:action.payload.email, role:[]}
            users.push(newUser)

            return {
                ...state,
                users,
                name: '',
                email: '',
                flag: false
            }  

            case 'DELETE_USER':
                console.log(action.payload.id , 'from reducer')
                let tempId = action.payload.id

                let userList = state.users.filter(user => user.id !== tempId)
                console.log(userList, 'new user lists')

            return {
                ...state,
                users: userList,
                sidebarFlag: false
            }   

            case 'SEARCH_HANDLER':
                let input = action.payload.name

                return {
                ...state,
                input: input
                } 

            case 'SELECT_HANDLER':
            let selectVal = action.payload.selected

            return {
                ...state,
                selected: selectVal
            } 

            case 'ADD_ROLE':
            let tempUser = state.users.filter(user => user.id === action.payload.id)
            let val = action.payload.selected
            tempUser[0].role.push(val)

            let tempUserList = [ ...state.users ]
            tempUserList[action.payload.id - 1] = tempUser[0]

            return {
                ...state,
                selected: val,
                users: tempUserList
            } 


            // ADD_ROLE
        default: return state;
    }
}

export default formReducer