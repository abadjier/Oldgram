import posts from './data.js'


const postsEl = document.getElementById('posts-el')

let sectionStrings = ``

for (let post of posts) {   
    sectionStrings += `<section class="post" data-id=${post.username}>
                    <div class="section-header flex">
                        <img class="avatar" src=${post.avatar} alt="avatar for ${post.name}">
                        <div>
                            <h2>${post.name}</h2>
                            <p>${post.location}</p> 
                        </div>                    
                    </div>                
                    <img class="section-main-img" src=${post.post} alt="image of ${post.name}">
                    <div class="section-footer">
                        <div class="icons flex">
                            <img class="icon-heart" src="images/icon-heart.png" alt="heart icon to like the post" data-id=${post.username}>
                            <img class="icon-comment" src="images/icon-comment.png" alt="bubble icon to comment on the post">
                            <img class="icon-dm" src="images/icon-dm.png" alt="plane icon to send a message">
                        </div>
                        <p class="likes"><span id=${post.username}>${post.likes}</span> likes</p>
                        <p class="comment"><span>${post.username}</span> ${post.comment}</p>
                    </div>                
                </section>`
}

postsEl.innerHTML = sectionStrings


// Note:   dbl clicking anywhere on the section increase likes 

let allDOMPosts = document.querySelectorAll(".post")
let likeBtns = document.querySelectorAll(".icon-heart")

for(let post of allDOMPosts){
    post.addEventListener("dblclick", function(event){
        const eventId = event.currentTarget.dataset.id
        updateNumberOfLikes(eventId)        
    })
}


// single click on a heart button increases likes
for(let like of likeBtns){
    like.addEventListener("click", function(event){
        
        const eventId = event.currentTarget.dataset.id        
        updateNumberOfLikes(eventId)
    })
}

function updateNumberOfLikes(userId){
    let likes = 0
    for (let post of posts){        
        if (post.username === userId){           
           post.likes += 1 
           
        //    update data on page
           const likesEl = document.getElementById(userId)
           likesEl.innerHTML = post.likes       
           return 
        }
    }
}

