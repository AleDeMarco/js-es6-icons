const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  }
];
const color = ['blue', 'orange', 'purple'];

const iconComplete = icons.map((element) => {
  if(element.type == 'animal') {
    element.color = color[0];
   }
  if(element.type == 'vegetable') {
    element.color = color[1];
   }
  if(element.type == 'user') {
    element.color = color[2];
   }
return element;
});

$('#type').change(function () {
  const category = $(this).val();
  printSettings(iconComplete, category);
  printer(print, iconComplete);
});

function printSettings(array, type) {
  const print = array.filter((element) => {
    console.log(element.type);
    console.log(type);
      return element.type == type;
    });
  return print;
}

function printer(array, general) {
  if (array.length > 0) {
    array.forEach((element) => {
      const {name, family, prefix, type, color} = element;

      $('.icons').append(
        `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
        `
      );
    });
  }
  else {
    general.forEach((element) => {
      const {name, family, prefix, type, color} = element;

      $('.icons').append(
        `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
        `
      );
    });
  }
}
