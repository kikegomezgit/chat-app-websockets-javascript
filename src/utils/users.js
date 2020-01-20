const users = []

//addUser , remove , get , getusersinroom

const addUser = ({id, username, room}) => {
    //clean de data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate
    if(!username  || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if (existingUser) {
        return {
            error: 'username is in use'
        }
    }

    //store user
    const user = {id, username, room}
    users.push(user)
    return {user}

}

// const removeUser = (id) => {
//     const index = users.findIndex((user) => {
//         return user.id === id
//     })
// }
//or
const removeUser = (id => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
})

const getUser = (id => {
    //search for => condition
    return users.find((user) => user.id === id)
})

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room
    )}
// addUser({
//     id:22,
//     username: 'kike',
//     room: 'lobby'
// })

// addUser({
//     id:29,
//     username: 'mike',
//     room: 'lobby'
// })

// addUser({
//     id:26,
//     username: 'maria',
//     room: 'games'
// })

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}