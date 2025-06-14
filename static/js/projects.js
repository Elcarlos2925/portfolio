document.getElementById("projects-container").innerHTML =
`
    <h2>Proyectos</h2>
    <div id="projects">
        
    </div>
`

function loadProject(){
    fetch('../static/js/projects.json')
        .then(function(res){
            return res.json()
        })
        .then(function(projects){
            let html = ''

            projects.forEach(function(project){
                html+=`
                <div id="motor-inc">
                    <article class="card card-project image-project" style="width: 18rem;">
                        <a href="${project.more}">
                            <img src="${project.img}" alt="${project.name}" class="card-img-top image-card">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.more}" class="btn btn-more-info">Mas Información</a>
                        </div>
                        <div class="card-footer">
                             ${project.requeriments}
                        </div>
                    </article>
                </div>
            `
            })
            document.getElementById('projects').innerHTML = html
        })
}

loadProject()