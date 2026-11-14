const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(button);

button.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'gray':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'black':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      case 'aqua':
        body.style.backgroundColor = e.target.id;
        break;
      case 'orange':
        body.style.backgroundColor = e.target.id;
        break;
      case 'brown':
        body.style.backgroundColor = e.target.id;
        break;
      case 'maroon':
        body.style.backgroundColor = e.target.id;
        break;
      case 'darkblue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blueviolet':
        body.style.backgroundColor = e.target.id;
        break;
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
      case 'skyblue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'darkmagenta':
        body.style.backgroundColor = e.target.id;
        break;
      case 'burlywood':
        body.style.backgroundColor = e.target.id;
        break;
      case 'darkgreen':
        body.style.backgroundColor = e.target.id;
        break;
      case 'cadetblue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'chartreuse':
        body.style.backgroundColor = e.target.id;
        break;
      case 'chocolate':
        body.style.backgroundColor = e.target.id;
        break;
      case 'teal':
        body.style.backgroundColor = e.target.id;
        break;
      case 'slategray':
        body.style.backgroundColor = e.target.id;
        break;
      case 'violet':
        body.style.backgroundColor = e.target.id;
        break;
      case 'darkred':
        body.style.backgroundColor = e.target.id;
        break;
      case 'navy':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});
