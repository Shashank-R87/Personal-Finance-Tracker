export const getUser = async (uid) => {
    return await fetch(`https://finance-tracker-api-python.vercel.app/get_user/${uid}`)
        .then(res => res.json())
}

export const requestBody = (userData) => {
    return (
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
    )
}