window.onload = function() {
    const coursesElement = document.querySelector(".courses") 
    const courses = [
        {
            _id: "course-1",
            illustration: "./assets/html.jpg",
            courseName: "Fundamental",
            technology: "HTML, CSS, and JavScript"
        },
        {
            _id: "course-2",
            illustration: "./assets/open-source.jpg",
            courseName: "Backend Tas",
            technology: "Node.Js and Express.Js"
        },
        {
            _id: "course-3",
            illustration: "./assets/progamming.jpg",
            courseName: "JS Frameworks",
            technology: "React.Js, Vue.Js, and Angular CLI"
        },
        {
            _id: "course-4",
            illustration: "./assets/html.jpg",
            courseName: "Web Server",
            technology: "NGINX and AWS"
        },
    ]
    let courseContents = ""
    for(let course of courses) {
        courseContents +=
            '<div id='+course._id+' class="card">'+
                '<img src='+course.illustration+'>'+
                '<h2>'+course.courseName+'</h2>'+
                '<p>'+course.technology+'</p>'+
            '</div>'
    }
    coursesElement.innerHTML = courseContents
}

function navbar() {
    const navBars = document.querySelector("nav")
    if(navBars.className === "__nav") {
        navBars.className += " responsive"
    } else {
        navBars.className = "__nav"
    }
}