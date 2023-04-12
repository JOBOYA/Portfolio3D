import url from 'rollup-plugin-url';

export default {
  // ...
  plugins: [
    // ...
    url({
      limit: 10, // Ajustez cette limite en fonction de vos besoins
      include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'], // Ajoutez d'autres formats d'image si nécessaire
    }),
    // ...
  ],
};
