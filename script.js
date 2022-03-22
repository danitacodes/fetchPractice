async function makeCall() {
    let response = await fetch('https://reqres.in/api/users');
    let data = await response.json();
    let randomUser = Math.floor(Math.random() * 5);
    let user = data.data[randomUser];
    console.log(user);
}

function displayData(user) {
    let name = document.getElementById('name');
    let image = document.getElementById('image');

    name.innerText = `${user.first_name}`
}
makeCall();