const formData = {
    dogName: "Bryon",
    dogBreed: "Poodle",
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
}

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(res => res.json())
//     .then(obj => console.log(obj))
//     .then(console.log('wat'))
//     .catch(error => {
//         alert('Whoa now, that\'s an error.')
//         console.log(error.message)
//     })

function submitData(userName, userEmail){
    // 1) makes a POST request to /users with a name and email
    const fetchData = fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    // 2) handles the POST request response, retrieves the new id value and appends it to the DOM
    .then(res => res.json())
    .then(obj => {
        const body = document.querySelector('body')
        // const userInfo = document.createElement('p')
        // console.log('obj:')
        // console.log(obj)
        // console.log(`obj: ${obj.name}`)
        // console.log(obj.id)
        // userInfo.innerText = `${userName}, ${userEmail}`
        // console.log(`obj: ${stringify(obj)}`)
        // console.log(`obj: ${obj.id}`)
        // userInfo.innerText = `${obj.id}`
        // console.log(userInfo)

        // body.appendChild(userInfo)
        body.append(obj.id)

        // console.log(body)
        console.log(body.innerHTML)
    })
    // 3) handles a failed POST request using catch, appends the error message to the DOM
    .catch(error => {
        const body = document.querySelector('body')
        // alert('Whoa now, that\'s an error.')
        // console.log(error.message)
        body.append(error)
    })

    return fetchData
}