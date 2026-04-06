

async function github() {
    
    const response =  await fetch("https://api.github.com/users");
    const data = await response.json();
            const parent= document.getElementById("first");

    for (let user of data) {

        const div = document.createElement('div');
        div.classList.add('box')
        const img = document.createElement('img');
        img.src=user.avatar_url;
        img.classList.add('IMG');
        const h2 = document.createElement('h2');
        h2.textContent=user.login
        h2.classList.add('H2');
        const a = document.createElement('a');
        a.href=user.html_url;
        a.textContent="Visit Profile";
        a.classList.add('anchor');


        div.append(img,h2,a);
            parent.append(div);

    }



}

github();