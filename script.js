
document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const brand = {
        name: 'João.dev',
        iconClass: 'bi bi-code-slash' // Example, matches CodeBracketSquareIcon used in React
    };

    const navItems = [
        { href: '#hero', label: 'Início', iconClass: 'bi bi-house-door-fill' },
        { href: '#formacao-academica', label: 'Formação', iconClass: 'bi bi-mortarboard-fill' },
        { href: '#experiencia-profissional', label: 'Experiência', iconClass: 'bi bi-briefcase-fill' },
        { href: '#habilidades', label: 'Habilidades', iconClass: 'bi bi-gear-fill' },
        { href: '#interesses', label: 'Interesses', iconClass: 'bi bi-heart-fill' },
    ];

    const heroData = {
        name: 'João Vitor Costa Cardoso',
        title: 'Professor de Tecnologia & Desenvolvedor',
        imageUrl: 'https://i.imgur.com/9toXy70.jpg',
        fallbackImageUrl: 'https://via.placeholder.com/280x350/667eea/ffffff?text=Jo%C3%A3o+Vitor',
        contactInfo: [
            { iconClass: 'bi bi-envelope-fill', text: 'prof.joaovitorcardoso@gmail.com' },
            { iconClass: 'bi bi-telephone-fill', text: '9 9227-3018' },
            { iconClass: 'bi bi-geo-alt-fill', text: 'Rio Grande do Norte, Brasil' },
        ]
    };
    
    const educationData = [
        { title: 'Técnico em Tecnologia da Informação', institution: 'Universidade Federal do Rio Grande do Norte - UFRN', period: '2015' },
        { title: 'Licenciado em Computação e Informática', institution: 'Universidade Federal Rural do Semi-árido - UFERSA', period: '2021' },
        {
            title: 'Especializações - Faculdade de Minas (FACUMINAS)',
            institution: '',
            period: 'Concluídas',
            details: [
                'Tecnologias digitais para sala de aula',
                'Tecnologias digitais e inovação na educação',
                'Pedagogia digital e letramento',
                'Pedagogia digital',
                'Pedagogia digital e inovações tecnológicas',
            ]
        },
    ];

    const experienceData = [
        {
            title: 'Professor do Ensino Técnico Profissional',
            company: 'Centro Estadual de Educação Profissional Professora Maria Rodrigues Gonçalves',
            period: 'Junho de 2022 - Atual',
            details: {
                title: 'Disciplinas Ministradas:',
                items: [
                    { year: '2022-2025', points: ['Programação WEB I e II', 'Programação Estruturada e Orientada a Objetos', 'Desenvolvimento de Sistemas', 'Lógica de Programação (Algoritmos)'] },
                    { year: '2023', points: ['Segurança da Informação', 'Empreendedorismo'] }
                ]
            }
        },
        { title: 'Professor Coordenador da Área Técnica', company: 'Centro Estadual de Educação Profissional Professora Maria Rodrigues Gonçalves', period: 'Agosto de 2022 - Atual' },
        {
            title: 'Técnico Administrativo-Pedagógico',
            company: 'Secretaria Municipal de Educação e Cultura - Pedro Avelino/RN',
            period: 'Maio de 2020 - Atual',
            details: [
                'Suporte técnico e funcional a servidores da educação com orientações para uso da plataforma SIGEduc',
                'Configuração e gerenciamento do sistema SIGEduc, incluindo perfis de usuário e permissões',
                'Análise de relatórios educacionais e interpretação de dados estatísticos',
                'Treinamentos internos para funcionários da educação',
                'Criação de conteúdo educacional digital para redes sociais institucionais',
                'Elaboração de materiais pedagógicos digitais e slides instrucionais',
                'Configuração e suporte de hardwares e softwares',
            ]
        },
        {
            title: 'Professor de Informática Básica',
            company: 'Escola Nossa Senhora das Graças - Afonso Bezerra/RN',
            period: 'Agosto de 2019 - Junho de 2022',
            details: [
                'Planejamento de aulas para turmas de 1° a 5° série',
                'Atualização do currículo de Informática Básica',
                'Criação de materiais didáticos instrucionais',
                'Ministração de aulas teóricas e práticas',
            ]
        }
    ];

    const skillsData = [
        { iconClass: 'bi bi-code-slash', categoryName: 'Linguagens de Programação', skills: [{ name: 'Java' }, { name: 'JavaScript' }] },
        { iconClass: 'bi bi-stack', categoryName: 'Banco de Dados', skills: [{ name: 'MySQL' }] }, // bi-stack as CircleStackIcon
        { iconClass: 'bi bi-google', categoryName: 'Google Scripts', skills: [{ name: 'Desenvolvimento de Scripts' }] }, // bi-google for Google
        { iconClass: 'bi bi-palette-fill', categoryName: 'Design & Mídia', skills: [{ name: 'Canva Design' }, { name: 'Edição de Vídeo' }] },
        { iconClass: 'bi bi-cpu-fill', categoryName: 'Inteligência Artificial', skills: [{ name: 'Tarefas Administrativas com IA' }] },
        { iconClass: 'bi bi-server', categoryName: 'Desenvolvimento', skills: [{ name: 'Back-end' }, { name: 'Plataformas No-Code' }] },
    ];

    const interestsData = [
        { iconClass: 'bi bi-cpu-fill', name: 'Inteligência Artificial' },
        { iconClass: 'bi bi-globe', name: 'Desenvolvimento Web' },
        { iconClass: 'bi bi-code', name: 'Programação de Computadores' },
        { iconClass: 'bi bi-laptop', name: 'Ensino de Tecnologia Digital' },
        { iconClass: 'bi bi-book-fill', name: 'Objetos Digitais de Aprendizagem' },
    ];

    // --- RENDER FUNCTIONS ---

    function renderNavbar() {
        document.getElementById('brand-icon-placeholder').className = brand.iconClass + ' me-2';
        document.getElementById('brand-name-placeholder').textContent = brand.name;

        const navContainer = document.getElementById('nav-items-container');
        navItems.forEach(item => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.innerHTML = `<a class="nav-link" href="${item.href}"><i class="${item.iconClass}"></i>${item.label}</a>`;
            navContainer.appendChild(li);
        });
    }

    function renderHeroSection() {
        const profileContainer = document.getElementById('hero-profile-image-container');
        profileContainer.innerHTML = `
            <img src="${heroData.imageUrl}" 
                 alt="Foto de perfil de ${heroData.name}" 
                 class="profile-image img-fluid mx-auto animate-on-scroll"
                 onerror="this.onerror=null; this.src='${heroData.fallbackImageUrl}';">
        `;
        
        const contentContainer = document.getElementById('hero-content-container');
        let contactInfoHtml = '';
        heroData.contactInfo.forEach(info => {
            contactInfoHtml += `
                <div class="contact-item">
                    <i class="${info.iconClass}"></i>
                    <span>${info.text}</span>
                </div>
            `;
        });
        contentContainer.innerHTML = `
            <div class="hero-content animate-on-scroll">
                <h1>${heroData.name}</h1>
                <p class="hero-subtitle">${heroData.title}</p>
                <div class="contact-info-box">
                    ${contactInfoHtml}
                </div>
            </div>
        `;
    }

    function renderSectionTitle(title, iconClass) {
        return `
            <h2 class="section-title">
                <i class="${iconClass}"></i>
                ${title}
            </h2>
        `;
    }

    function renderEducationSection() {
        const container = document.getElementById('formacao-academica');
        let contentHtml = renderSectionTitle('Formação Acadêmica', 'bi bi-mortarboard-fill');
        
        educationData.forEach(edu => {
            let detailsHtml = '';
            if (edu.details) {
                detailsHtml = '<ul class="mt-2">';
                edu.details.forEach(detail => detailsHtml += `<li>${detail}</li>`);
                detailsHtml += '</ul>';
            }
            contentHtml += `
                <div class="education-card animate-on-scroll">
                    <h3 class="card-title-custom">${edu.title}</h3>
                    ${edu.institution ? `<p class="card-institution">${edu.institution}</p>` : ''}
                    <span class="card-period">${edu.period}</span>
                    ${detailsHtml ? `<div class="card-details">${detailsHtml}</div>` : ''}
                </div>
            `;
        });
        container.innerHTML = contentHtml;
    }

    function renderExperienceSection() {
        const container = document.getElementById('experiencia-profissional');
        let contentHtml = renderSectionTitle('Experiência Profissional', 'bi bi-briefcase-fill');

        experienceData.forEach(exp => {
            let detailsHtml = '';
            if (exp.details) {
                if (Array.isArray(exp.details)) {
                    detailsHtml = '<ul class="mt-3">';
                    exp.details.forEach(detail => detailsHtml += `<li>${detail}</li>`);
                    detailsHtml += '</ul>';
                } else if (typeof exp.details === 'object') { // Disciplinas Ministradas
                    detailsHtml = `<div class="mt-3"><h5 class="disciplines-title">${exp.details.title}</h5><div class="row">`;
                    exp.details.items.forEach(itemSet => {
                        detailsHtml += `<div class="col-md-6"><h6 class="year-title">${itemSet.year}:</h6><ul class="points-list list-disc ms-4">`;
                        itemSet.points.forEach(point => detailsHtml += `<li>${point}</li>`);
                        detailsHtml += `</ul></div>`;
                    });
                    detailsHtml += `</div></div>`;
                }
            }
            contentHtml += `
                <div class="experience-card animate-on-scroll">
                    <h3 class="card-title-custom">${exp.title}</h3>
                    <p class="card-institution">${exp.company}</p>
                    <span class="card-period">${exp.period}</span>
                    ${detailsHtml ? `<div class="card-details">${detailsHtml}</div>` : ''}
                </div>
            `;
        });
        container.innerHTML = contentHtml;
    }

    function renderSkillsSection() {
        const container = document.getElementById('habilidades');
        let contentHtml = renderSectionTitle('Habilidades', 'bi bi-gear-fill');
        contentHtml += '<div class="row gy-4 mt-3">'; // mt-8 in tailwind

        skillsData.forEach(skillCat => {
            let skillsListHtml = '<ul class="skill-list">';
            skillCat.skills.forEach(skill => skillsListHtml += `<li class="skill-pill">${skill.name}</li>`);
            skillsListHtml += '</ul>';

            contentHtml += `
                <div class="col-md-6 col-lg-4">
                    <div class="skill-category-card animate-on-scroll">
                        <i class="skill-icon ${skillCat.iconClass}"></i>
                        <h4>${skillCat.categoryName}</h4>
                        ${skillsListHtml}
                    </div>
                </div>
            `;
        });
        contentHtml += '</div>';
        container.innerHTML = contentHtml;
    }

    function renderInterestsSection() {
        const container = document.getElementById('interesses');
        let contentHtml = renderSectionTitle('Interesses', 'bi bi-heart-fill');
        contentHtml += '<div class="interests-container animate-on-scroll">';

        interestsData.forEach(interest => {
            contentHtml += `
                <span class="interest-tag">
                    <i class="${interest.iconClass}"></i>
                    ${interest.name}
                </span>
            `;
        });
        contentHtml += '</div>';
        container.innerHTML = contentHtml;
    }
    
    function renderFooter() {
        const container = document.getElementById('footer-container');
        const currentYear = new Date().getFullYear();
        container.innerHTML = `
            <div class="container">
                <p>
                    <i class="${brand.iconClass}"></i>
                    &copy; ${currentYear} João Vitor Costa Cardoso. Todos os direitos reservados.
                    <i class="${brand.iconClass}"></i>
                </p>
            </div>
        `;
    }


    // --- INITIALIZATION & EVENT LISTENERS ---
    
    renderNavbar();
    renderHeroSection();
    renderEducationSection();
    renderExperienceSection();
    renderSkillsSection();
    renderInterestsSection();
    renderFooter();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar-main');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('#nav-items-container a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Manually close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('#navbarNavContent');
                if (navbarCollapse.classList.contains('show') && !navbarToggler.classList.contains('collapsed')) {
                     bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                }
                
                // Scroll
                 const offset = navbar.offsetHeight; // Get navbar height for offset
                 const bodyRect = document.body.getBoundingClientRect().top;
                 const elementRect = targetElement.getBoundingClientRect().top;
                 const elementPosition = elementRect - bodyRect;
                 const offsetPosition = elementPosition - offset + 5; // +5 for a little padding

                 window.scrollTo({
                     top: offsetPosition,
                     behavior: 'smooth'
                 });
            }
        });
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up', 'visible');
                observer.unobserve(entry.target); // Optional: stop observing once animated
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => {
      el.classList.add('fade-in-up'); // Add initial state for animation
      observer.observe(el);
    });
    
    // Activate Bootstrap scrollspy
    // Note: For ScrollSpy to work correctly with dynamic content and fixed navbar,
    // ensure body has position: relative, and target elements have correct offsets.
    // The data-bs-offset on body tag helps.
    // It might require more tweaking if nav links don't highlight perfectly.
    // Manually trigger a refresh if content is loaded async or layout changes.
    // For now, this should be sufficient as content is rendered on DOMContentLoaded.
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-main',
        offset: 100 // Adjust this offset based on your navbar height and preference
    });


});
    