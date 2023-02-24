const loadUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user =>{
    // const genderTag = document.getElementById('gender');
    // genderTag.innerHTML = user.results[0].gender;
    // console.log(user.results[0].gender);

    //name
    const name = user.results[0].name.first;
    document.getElementById('name').innerHTML = name;
    console.log(user.results[0].name);
}
loadUser();