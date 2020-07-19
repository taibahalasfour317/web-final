
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

  Swal.fire({
    title: '',
    text: 'نحن هنا من اجلك .',
    imageUrl: 'heart.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

  


  function play() {
    let audio = new Audio('./audio/sa.mp3')
    audio.play();
  }