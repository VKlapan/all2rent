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
      'https://pixabay.com/get/gf12b1d03da74eb05c5b9325b1990e7af3c9c091d07e5ab23a9e6d7b67d1bda8360d4e22e05e3f67a09a04bc57dc38ee6ac315af183684bfad421c0d6505c6720_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 2,
    title: 'Ломоносова, 38',
    image:
      'https://pixabay.com/get/g69883fb15e54c4184ee72e4af6523f00bb571de21c1ae00f547204b1aa634e6eb6fcfd2864a67a0ad94a143f4d2bf270766a1d5bbe9499cfd94a9ce27d008e3f_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 3,
    title: 'Касьяна, 20',
    image:
      'https://pixabay.com/get/g69883fb15e54c4184ee72e4af6523f00bb571de21c1ae00f547204b1aa634e6eb6fcfd2864a67a0ad94a143f4d2bf270766a1d5bbe9499cfd94a9ce27d008e3f_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 4,
    title: 'Мейтуса, 10',
    image:
      'https://pixabay.com/get/g605facb8c5e70c47738c0490cbd328b8f135edfbb14245756e51a406838949724564525fd8c001911af27519406852ad67c1204d1e7443907d4caeb4dfefab34_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 5,
    title: 'Луценка, 11',
    image:
      'https://pixabay.com/get/gac90db03e45057fc013b466885d76c0d7784d98a69804396cab11a6ce1f3f3019cf9909eb92b1447f46ae5e482f4e64cf50727fa1f96ac155f7142e3ce211926_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 6,
    title: 'Васильківська, 11',
    image:
      'https://pixabay.com/get/g1772059d72ebc6876bd237da7946f8c33791f47911c16b14f915a3516ea5b5870151b769ba7de5a91f181fdc78072bc1b557ed9728ff0e1b8805f8a63fdb303e_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 7,
    title: 'Васильківська, 34',
    image:
      'https://pixabay.com/get/ga329493137db8edaf0dc453781364815bb61f46faafa549a6d1bb0033942061db0abccd8b9c5b0043450993fcb58ada2f0afe6cb274d15fbbef5352b81e87931_1280.jpg',
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
      'https://pixabay.com/get/gb5767a80b09b312fd1f54d6c567e4f5d81e1667b2d6b2c41180442007a6ef6614db499e824cb5f67dc2afc71445f7d1e2da5259ab9fae2684680e2da15b3dcc5_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 10,
    title: 'Вільямса, 11',
    image:
      'https://pixabay.com/get/g5478b53f60d5f19c667faaac9e2311d61761bc91d73c17832f70b814d5e0dc63a983db2b004e3837f27ae851432015b0615541a4f136e3a542dc0c55727806c0_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
  {
    id: 11,
    title: 'Конєва, 10',
    image:
      'https://pixabay.com/get/g11372e99dce9882f8486595023808fab88294d037514776250db68103d4b6605500769194f4520fba3f29eadac62174c4a0cb3932f06749f4bd7fb29beab7692_1280.jpg',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?',
  },
];

export { points, appartments };
