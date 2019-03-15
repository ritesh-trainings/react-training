export default function (state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload);
            const data = action.payload.filter((usr) => usr.user === action.user.username && usr.password === action.user.password);
            if (data[0].token) {
                return data[0];
            }
    }
    return state;
}