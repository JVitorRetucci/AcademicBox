export const getUserName = () => {
    const user = (localStorage.getItem('logged-user'));

    return user.usuario_nome;
}

export const getUserXP = () => {
    const user = JSON.parse(localStorage.getItem('logged-user'));

    return user.usuario_xp;
}