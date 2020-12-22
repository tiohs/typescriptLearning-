type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const veriFyUSer: VerifyUserFn = (user, sentValue) =>{
    return (user.username === sentValue.username && sentValue.password === user.password)
}

const bdUser = {username : 'Hamilton Silva', password: '123456'};
const sentUser = {username : 'Hamilton Silva', password: '123456'};

console.log(veriFyUSer(bdUser, sentUser));
