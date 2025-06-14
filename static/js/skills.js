document.getElementById("skill-container").innerHTML =
`
    <h2>Habilidades Técnicas</h2>
    <section id="skills">
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="devicon-csharp-plain"></i></span>
            </div>
            <p class="name-skill">C#</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="fa-brands fa-html5"></i></span>
            </div>
            <p class="name-skill">HTML</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="fa-brands fa-css3-alt"></i></span>
            </div>
            <p class="name-skill">CSS</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="fa-brands fa-square-js"></i></span >
            </div>
            <p class="name-skill">JS</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="fa-brands fa-php"></i></span>
            </div>
            <p class="name-skill">PHP</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="devicon-mysql-plain-wordmark"></i></span>
            </div>
            <p class="name-skill">MySQL</p>
        </article>
        <article class="skill-container">
            <div class="bg-skill">
                <span><i class="fa-brands fa-git-alt"></i></span>
            </div>
            <p class="name-skill">Git</p>
        </article>
    </section>
    <section id="lenguajes">
        <h2>Idiomas</h2>
        <article id="espanol" class="lenguajes">
            <p>Español</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-secondary" style="width: 90%">Nativo</div>
            </div>
        </article>
        <article id="ingles" class="lenguajes">
            <p>Ingles</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-secondary" style="width: 33%">Básico</div>
            </div>
        </article>
    </section>
`