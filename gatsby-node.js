const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const guestData = await graphql(`
    query {
      allGuestsJson {
        edges {
          node {
            name
            surname
            nameRus
          }
        }
      }
    }
  `);

  if (guestData.errors) {
    throw new Error('Error retrieving guest data:', guestData.errors);
  }

  const guests = guestData.data.allGuestsJson.edges;

  guests.forEach(({ node: guest }) => {
    const { name, surname, nameRus } = guest;
    const guestSlug = `${name.toLowerCase()}${surname.toLowerCase()}`;
    const guestPagePath = `/${guestSlug}`;

    createPage({
      path: guestPagePath,
      component: path.resolve('./src/templates/guest.tsx'),
      context: {
        guest,
      },
    });
  });
};
