// Traduções EN/PT do portfólio
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.certs": "Certificates",
    "nav.contact": "Contact",
    "hero.hi": "Hi, I'm",
    "hero.role": "Python / Django Developer",
    "hero.location": "Dublin, Ireland",
    "about.p1": "I hold a Bachelor's degree in Information Systems (2016) and spent six years running Servban, a payroll-loan (consignado) brokerage in Brazil with three branches. That experience taught me how credit operations really work — contracts, commissions, compliance and the daily pain points of the people behind them.",
    "about.p2": "Now based in Dublin, I build web applications with Python, Django and PostgreSQL. My main project, ConsignaPlus, is a SaaS CRM for credit brokers that runs in production: I designed the data model, authentication, reports, security hardening and deployment.",
    "about.p3": "I'm looking for my first developer role in Dublin, where I can combine real business experience in financial services with hands-on backend development.",
    "proj.cp.desc": "SaaS CRM for Brazilian payroll-loan brokers (Corbans): manages clients, contracts and loan proposals end-to-end. Built from my own experience running a brokerage, live in production with paying plans.",
    "proj.cp.f1": "Client &amp; contract management with full proposal history tracking",
    "proj.cp.f2": "Reports centre and financial module with Chart.js dashboards",
    "proj.cp.f3": "Multi-user accounts, subscription plans and trial system",
    "proj.cp.f4": "CPF validation (check-digit algorithm) and data integrity rules",
    "proj.cp.f5": "Security hardening: CSRF/XSS/HSTS, rate limiting and login lockout (django-axes)",
    "proj.cp.f6": "Deployed on Render with PostgreSQL, custom domain and transactional email",
    "proj.cp.link": "Visit live site",
    "skill.python": "My main language: backend logic, data validation, scripts for database migration and custom management commands.",
    "skill.django": "Models, views, forms, authentication and permissions, ORM queries, migrations and security settings — used to build ConsignaPlus from scratch.",
    "skill.postgres": "Relational data modelling, foreign keys and constraints; migrated a production database between hosting providers.",
    "skill.git": "Version control with branches and remotes on GitHub; deploys triggered from Git to Render.",
    "skill.html": "Django templates, responsive layouts and forms for the front end of my applications.",
    "skill.bootstrap": "UI components, grids and dashboards; combined with Chart.js for reports.",
    "skill.other.title": "Other tools",
    "skill.other": "Linux, Docker (basic), AWS (basic), Render, Chart.js, PyCharm.",
    "btn.more": "Read more",
    "btn.less": "Read less",
    "form.name": "Name",
    "form.name.ph": "Your name",
    "form.msg": "Message",
    "form.send": "Send",
    "footer": "Developed by",
    "footer.rights": "All rights reserved.",
    "meta.title": "Pablo Mendes | Python / Django Developer"
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.certs": "Certificações",
    "nav.contact": "Contato",
    "hero.hi": "Oi, eu sou",
    "hero.role": "Desenvolvedor Python / Django",
    "hero.location": "Dublin, Irlanda",
    "about.p1": "Sou bacharel em Sistemas de Informação (2016) e passei seis anos à frente da Servban, correspondente bancário de crédito consignado em Minas Gerais com três filiais. Essa experiência me ensinou como uma operação de crédito funciona de verdade — contratos, comissões, conformidade e as dores do dia a dia de quem está por trás dela.",
    "about.p2": "Hoje, morando em Dublin, desenvolvo aplicações web com Python, Django e PostgreSQL. Meu principal projeto, o ConsignaPlus, é um CRM SaaS para correspondentes bancários que está em produção: fiz a modelagem de dados, autenticação, relatórios, segurança e deploy.",
    "about.p3": "Busco minha primeira vaga como desenvolvedor em Dublin, unindo experiência real de negócio no setor financeiro com desenvolvimento backend na prática.",
    "proj.cp.desc": "CRM SaaS para correspondentes bancários (Corbans) de crédito consignado: gestão de clientes, contratos e propostas de ponta a ponta. Criado a partir da minha experiência como dono de correspondente, em produção com planos pagos.",
    "proj.cp.f1": "Gestão de clientes e contratos com histórico completo de propostas",
    "proj.cp.f2": "Central de relatórios e módulo financeiro com gráficos em Chart.js",
    "proj.cp.f3": "Contas multiusuário, planos de assinatura e período de teste",
    "proj.cp.f4": "Validação de CPF (dígitos verificadores) e regras de integridade de dados",
    "proj.cp.f5": "Segurança: CSRF/XSS/HSTS, limite de requisições e bloqueio de login (django-axes)",
    "proj.cp.f6": "Deploy no Render com PostgreSQL, domínio próprio e e-mail transacional",
    "proj.cp.link": "Acessar o site",
    "skill.python": "Minha linguagem principal: lógica de backend, validação de dados, scripts de migração de banco e comandos de gerenciamento personalizados.",
    "skill.django": "Models, views, forms, autenticação e permissões, consultas com ORM, migrations e configurações de segurança — usados para construir o ConsignaPlus do zero.",
    "skill.postgres": "Modelagem relacional, chaves estrangeiras e constraints; migrei um banco de produção entre provedores de hospedagem.",
    "skill.git": "Controle de versão com branches e remotes no GitHub; deploys disparados pelo Git no Render.",
    "skill.html": "Templates Django, layouts responsivos e formulários no front-end das minhas aplicações.",
    "skill.bootstrap": "Componentes de interface, grids e dashboards; combinado com Chart.js nos relatórios.",
    "skill.other.title": "Outras ferramentas",
    "skill.other": "Linux, Docker (básico), AWS (básico), Render, Chart.js, PyCharm.",
    "btn.more": "Leia mais",
    "btn.less": "Leia menos",
    "form.name": "Nome",
    "form.name.ph": "Digite seu nome",
    "form.msg": "Mensagem",
    "form.send": "Enviar",
    "footer": "Desenvolvido por",
    "footer.rights": "Todos os direitos reservados.",
    "meta.title": "Pablo Mendes | Desenvolvedor Python / Django"
  }
};

let currentLang = "en";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  // Mantém o texto do botão "Leia mais" coerente com o estado atual
  const vmais = document.getElementById("vmais");
  const btn = document.getElementById("btnLeiaMais");
  if (btn && vmais) {
    btn.innerHTML = vmais.style.display === "inline" ? t("btn.less") : t("btn.more");
  }

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", function () {
  let lang = "en";
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param) {
    lang = param;
  } else {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) lang = saved;
    } catch (e) {}
  }
  setLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLanguage(b.dataset.lang); });
  });
});
