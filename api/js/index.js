function loadData2(){
    const url = ('https://jsonplaceholder.typicode.com/users')
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  function displayUsers(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = 'user'
        ul.appendChild(li);
    }
    
  }