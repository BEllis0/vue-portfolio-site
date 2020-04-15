// https://docs.cypress.io/api/introduction/api.html

before(() => {
  cy.visit('/');
})

describe('Home Page', () => {

  it('Visits the app root url', () => {
    cy.visit('/')
  })

  it('banner buttons exist and have valid links', () => {
    //contact component is not visible
    cy.get('.contact-overlay').should('not.visible');
    
    //resume button should be visible
    cy.get('.resumebtn').should('be.visible');

    cy.get('.resumebtn').click();
    
    //click on contact button
    cy.get('.inquirebtn').click();
    
    ////contact component should now be visible
    cy.get('.contact-overlay').should('be.visible');

    cy.get('.hide-contact').click();
    cy.get('.contact-overlay').should('not.visible');
  });

  it('displays header and footer', () => {
    cy.get('.navbar').should('be.visible');
    cy.get('.footer-nav').should('be.visible')
  });

  it ('header and footer links are valid', () => {
    cy.get('ul>li').each(item => {
      item.click();
    });
  });

  it('social icons should exist and links should be valid', () => {
    //github
    cy.get('.github').should('exist');
    cy.get('.github').click({multiple: true, force: true})
    //linkedin
    cy.get('.linkedin').should('exist');
    cy.get('.linkedin').click({multiple: true, force: true})
    //youtube
    cy.get('.youtube').should('exist');
    cy.get('.youtube').click({multiple: true, force: true})
    //twitter
    cy.get('.twitter').should('exist');
    cy.get('.twitter').click({multiple: true, force: true})
    //facebook
    cy.get('.facebook').should('exist');
    cy.get('.facebook').click({multiple: true, force: true});
  });

  it('Other home page components should be visible', () => {
    cy.get('.testimonial-list').should('be.visible');

    cy.get('.testimonial').should('be.visible');

    cy.get('.clientImg').should('be.visible');

    cy.get('.contact-module').should('be.visible');
  })

  it('Project items should link to their pages', () => {
    
    //first link should go to web designs page
    cy.get('.project-item').eq(0).click({force: true});
    cy.url().should('include', '/web-designs');

    cy.visit('/')

    //first link should go to web designs page
    cy.get('.project-item').eq(1).click({force: true});
    cy.url().should('include', '/web-apps');

    cy.visit('/')

    //first link should go to web designs page
    cy.get('.project-item').eq(2).click({force: true});
    cy.url().should('include', '/data-visualization');
  });
});

describe('Web Design Page', () => {
  it('Visits the web design page', () => {
    cy.visit('/web-designs');
  })

  it('Includes a sidebar and main section component', () => {
    cy.get('.sidebar').should('be.visible');

    cy.get('.main').should('be.visible');
  });

  it('Sidebar contains anchor links', () => {
    cy.get('.sidebar-design-items').click({multiple: true});
  });

  it('Portfolio items contain a website button', () => {
    cy.get('.website-btn').should('be.visible');
    cy.get('.website-btn').click({multiple: true});
  });
});

describe('Web Applications Page', () => {
  it('Visits the web apps page', () => {
    cy.visit('/web-apps');
  })

  it('Includes a sidebar and main section component', () => {
    cy.get('.sidebar').should('be.visible');

    cy.get('.main').should('be.visible');
  });

  it('Sidebar contains anchor links', () => {
    cy.get('.sidebar-application-items').click({multiple: true});
  });

  it('Portfolio items contain a website button', () => {
    cy.get('.website-btn').should('be.visible');
    cy.get('.website-btn').click({multiple: true});
  });
});

describe('Data Visualization Page', () => {
  it('Visits the data visualization page', () => {
    cy.visit('/data-visualization');
  })

  it('Includes a sidebar and main section component', () => {
    cy.get('.sidebar').should('be.visible');

    cy.get('.main').should('be.visible');
  });

  it('Sidebar contains anchor links', () => {
    cy.get('.sidebar-data-visuals-items').click({multiple: true});
  });

  it('Portfolio items contain a website button', () => {
    cy.get('.website-btn').should('be.visible');
    cy.get('.website-btn').click({multiple: true});
  });
});
