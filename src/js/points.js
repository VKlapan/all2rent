const points = [
  { id: 1, lat: 50.3864813, lng: 30.4610184 },
  { id: 2, lat: 50.3893584, lng: 30.4744418 },
  { id: 3, lat: 50.3766632, lng: 30.4545341 },
  { id: 4, lat: 50.3871685, lng: 30.4633948 },
  { id: 5, lat: 50.3839428, lng: 30.4448406 },
  { id: 6, lat: 50.3950753, lng: 30.5020464 },
  { id: 7, lat: 50.3932314, lng: 30.4851096 },
  { id: 8, lat: 50.3932962, lng: 30.4808875 },
  { id: 9, lat: 50.3850642, lng: 30.4800686 },
  { id: 10, lat: 50.3852944, lng: 30.4568793 },
  { id: 11, lat: 50.383335, lng: 30.4582703 },
];

const appartments = [
  {
    id: 1,
    title: 'Вільямса, 9',
    image:
      'https://pixabay.com/get/g51291aa48a74db643b36349f6032bfc25dea3f25bba60355e4defd442e46e405b1d3b0f495e33ecc7b1864bfacb2c8217c7ac7cb5e6f0b321c90c04a10a4424f_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 2,
    title: 'Ломоносова, 38',
    image:
      'https://pixabay.com/get/ged7e7f616d828f220c9c6666002318ccf75b897ddcc9ad803300a9343877fa5b3b5f08931b68d8a26c2f5c065b08ddff55d18607106bd9f2001cb4eb7a62674d_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 3,
    title: 'Касьяна, 20',
    image:
      'https://pixabay.com/get/gc9cccde1954d9b97920ebd140f67af8e1dc4ad303a6b6ea67ef943dc97a9eac98b52dce52df95fd3f104b6ab409565a1dfe6cde3b46d89bde682db8d665b9f2a_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 4,
    title: 'Мейтуса, 10',
    image:
      'https://pixabay.com/get/g2f2a4f4c46a6ccd96090e4ef351b43d0049cde68388e7b9bc1c5e8d0beb5596e152eda8c559733a752ce37f8f09ed5cf34d8f9be56732af8edc7256926bf588e_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 5,
    title: 'Луценка, 11',
    image:
      'https://pixabay.com/get/g4002af7dcd43bda7197e497d12c83e75617d6645bd670d69690f83a6fa3ecabaa733e6c94a7ce3a3e672d3ad299868a0816a3961dff415fdcaec60f6b92cf2e8_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 6,
    title: 'Васильківська, 11',
    image:
      'https://pixabay.com/get/g8432083f41e6955fce6aab7a4eb18bea3996bca75ebb7481930320bddd0002324893bdbd9a368886b198ef7e5802b529228831c420976a367e94f27ad9293cf4_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 7,
    title: 'Васильківська, 34',
    image:
      'https://pixabay.com/get/g83c70ad71393f4bb386026204c76feae01f1464e3959660ca9f68ec4f227964f8f1142ad0f16d2efb2938a5b6ff2d7db5e839388d9f5096400251f3d04f1c4f8_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 8,
    title: 'Максимовича, 4',
    image:
      'https://pixabay.com/get/g3d1219bc47ede121643114fab342ba3605806fcf7632dfc679b5b5031e6632fdb4ed35def8b1c329cb873d52b92fc10cbbf81b019c9d44fb3aab5cee82b86aad_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 9,
    title: 'Васильківська, 53',
    image:
      'https://pixabay.com/get/g0e06e535cffb0a305a5dadd767c437749b267444942ccd5f9c8a4bf9d0a93b2b7cdc427d420bbfb948dab15aca834407291a98a996e588dca367d668c784b959_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 10,
    title: 'Вільямса, 11',
    image:
      'https://pixabay.com/get/g32061f0ac408b1c126d5a9012f16662cf0f5f5241099afe0c60c5badc746fa862ba752f036a76d699031735780f3426c6ebee4c394c0efd890db3453a745c745_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 11,
    title: 'Конєва, 10',
    image:
      'https://pixabay.com/get/g947ac8f9923e7563cc1de679801e6dbcedceefac954c213f2ae34cd1ca459a64cb06014074bcfe62c85e05c75cad2aa97514b849e0d045bbbafce77781c307e3_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
];

export { points, appartments };
