'use strict';

var productNames = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'dragon', 'greenmonster', 'pen', 'pet-sweep', 'r2d2bag', 'scissors', 'shark', 'sweep', 'tauntaun', 'toiletstand', 'unicorn', 'usb', 'water-can', 'wine-glass'];
ProductImage.allProductImages = [];
var selectedItems = document.getElementById('image_container');


//make an object constructor
function ProductImage(imageName) {
  this.imageName = imageName;
  this.filepath = 'img/' + imageName + '.jpg';
  this.addToCart = true;
  ProductImage.allProductImages.push(this);
}

function handleSubmit(event) {
  event.preventDefault();
  if (!event.target.fullname.value || !event.target.address.value || !event.target.city.value || !event.target.state.value ||!event.target.zip.value || !event.target.phnumber.value) {
    return alert('Fields cannot be empty!');
  }
  var fullName = event.target.fullname.value;
  var address = event.target.address.value;
  var cityLive = event.target.city.value;
  var stateLive = event.target.state.value;
  var zipCode = parseInt(event.target.zip.value);
  var phNumber = parseInt(event.target.phnumber.value);


  new ProductImage(imageName);

  event.target.fullname.value = null;
  event.target.address.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zip.value = null;
  event.target.phnumber.value = null;


  //make new Image instances //how do we make a new object out of a constructor function

  if (localStorage.saveAllProdImages) {
    console.log('localStorage');
    ProductImage.allProductImages =localStorage.getItem('saveAllProdImages');
    ProductImage.allProductImages = JSON.parse(ProductImage.allProductImages);
  } else {
    console.log('scratch');
    for (var i = 0; i < productNames.length; i++) {
      new ProductImage(productNames[i]);
    }
  }

  var stringifyTotalClicks = JSON.stringify(ProductImage.allProductImages);
  localStorage.setItem('saveAllProdImages', stringifyTotalClicks);
}

ProductImage.container.addEventListener('click', handleClick);

// create function to alert user that they have to fill in the infp
handleSubmit();
selectedItems();