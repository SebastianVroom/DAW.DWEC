img1 = "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
img2 = "https://images.pexels.com/photos/6247601/pexels-photo-6247601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
img3 = "https://images.pexels.com/photos/5231242/pexels-photo-5231242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
pos = Math.random() * 3;
foto = (pos <= 1)? img1 : (pos <= 2)? img2 : img3
document.write(`<img src="${foto}"></img>`)
