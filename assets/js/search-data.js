// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Current research projects and data analyses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-complexity",
          title: "complexity",
          description: "Economic complexity analysis of Indian cities and the IPL Player Space.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/complexity/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials and descriptions for classes taught at FLAME University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic curriculum vitae of Dr. Ravikiran Naik.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-selected-for-csh-winter-school-2026-rethinking-human-capital",
        
          title: "Selected for CSH Winter School 2026: Rethinking Human Capital",
        
        description: "I have been selected to participate in the Complexity Science Hub Winter School 2026 on &#39;Rethinking Human Capital: The Past and Future of Work&#39; in Vienna, Austria.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/csh-winter-school-2026/";
          
        },
      },{id: "news-selected-to-participate-in-the-csh-winter-school-2026-on-rethinking-human-capital-the-past-and-future-of-work-in-vienna-austria-april-13-17-2026",
          title: 'Selected to participate in the CSH Winter School 2026 on “Rethinking Human Capital:...',
          description: "",
          section: "News",},{id: "projects-from-human-prejudice-to-machine-bias-testing-caste-discrimination-in-ai-recruitment",
          title: 'From Human Prejudice to Machine Bias: Testing Caste Discrimination in AI Recruitment',
          description: "To test whether AI resume screeners respond to caste-signaling surnames.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-caste-audit/";
            },},{id: "projects-economic-complexity-indian-cities-amp-the-ipl-player-space",
          title: 'Economic Complexity: Indian Cities &amp;amp; the IPL Player Space',
          description: "Applying economic complexity methods to Indian cities (PLFS 2024) and the Indian Premier League (IPL 2008-2024).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/economic-complexity/";
            },},{id: "projects-platform-workers-in-india-wages-skills-and-working-conditions",
          title: 'Platform Workers in India: Wages, Skills, and Working Conditions',
          description: "ICSSR-funded large-scale quantitative study of 2,000+ platform workers across delivery, transport, and service platforms in India.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/platform-workers/";
            },},{id: "teachings-gender-economics",
          title: 'Gender Economics',
          description: "Elective course in gender economics at FLAME University examining gender gaps in labor markets, education, entrepreneurship, and development.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/gender-economics/";
            },},{id: "teachings-labor-economics",
          title: 'Labor Economics',
          description: "Undergraduate course in labor economics at FLAME University covering labor supply, demand, wage determination, and contemporary labor market issues.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/labor-economics/";
            },},{id: "teachings-macroeconomics",
          title: 'Macroeconomics',
          description: "Undergraduate macroeconomics course at FLAME University covering national income, growth, business cycles, and policy.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/macroeconomics/";
            },},{id: "teachings-public-economics",
          title: 'Public Economics',
          description: "Elective course in public economics at FLAME University covering taxation, public goods, externalities, and social welfare programs.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/public-economics/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%76%69%6B%69%72%61%6E.%6E%61%69%6B@%66%6C%61%6D%65.%65%64%75.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ravikirannaik", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0146-3918", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nkOOeKoAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
