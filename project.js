const completedProjects = [
    {
        title: "Cool Project1", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project2", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project3", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project4", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project5", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
    ]
      const printtodom = (divId, textToprint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToprint;

      }

      const createProjectCards = () => {
        let domString = '';
        for(let i = 0; i < completedProjects.length; i++) {
            domString +=`<main class="main-content">`
            domString +=    `<div class="card">`
            domString +=        `<div class="title"><p>Title:${completedProjects[i].title}</p></div>`
            domString +=        `<div class="screenshot"><img src=${completedProjects[i].screenshot}></div>`
            domString +=        `<div class="technologiesUsed"><p>Technologies Used: ${completedProjects[i].technologiesUsed}</p></div>`
            if (completedProjects[i].available === true) {
                domString +=    `<div class="available"><p>available: ${completedProjects[i].available}</p></div>`
            } else {
                domString +=    `<div class="notAvailable"><p>${completedProjects[i].title} is not available</p></div>`
            }
            
            domString +=        `<div class="projectURL"><a href=${completedProjects[i].url}>Project Link</a></div>`
            domString +=        `<div class="githubURL"><a href=${completedProjects[i].githubUrl}>Github Link</a></div>`
            domString +=    `</div>`
            domString += `</main>`
    
            }
            printtodom('projectsPage', domString);
           
          };
        

            const initializer = () => {
              createProjectCards();
            };
            initializer();
            








    