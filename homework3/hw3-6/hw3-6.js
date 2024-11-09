let products = [
  {
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
  },
  {
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
  },
  {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
  },
  {
    title: 'tea',
    price: 15,
    image: 'https://th.bing.com/th/id/R.05f4f8666696276c20acb12eef1d40f0?rik=obu%2bnTQp%2bn5xVw&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftea%2ftea_PNG16893.png&ehk=eULSIeBCgKP4gKSdyWc5eu2xnW8IZcuMhHM80eTsIGU%3d&risl=&pid=ImgRaw&r=0'
  },
];

for (const product of products) {

  document.write(`
<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>
`)
}
