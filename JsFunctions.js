 // calculate area
 function CalculateAreaFunction1(value1, value2) {
    let area = parseInt(value1) * parseInt(value2);
    return area;
  }

  // check for valid input
  function check(value1, value2) {
    if (value1 && value2) {
      if (value1 < 0 || value2 < 0) {
        alert("Please Enter Valid Number to Calculate Area");
        return false;
      }
      else return true;
    }
    else {
      alert("Please Enter Valid Number to Calculate Area");
      return false;
    }

  }

  // access card elements and add area in the Calculation List
  document.getElementById("ellipse").addEventListener('click', function (e) {

    let value1 = document.getElementById("ellipse1").value;
    let value2 = document.getElementById("ellipse2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = 3.1416 * CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Ellipse    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });

  document.getElementById("pentagon").addEventListener('click', function () {
    let value1 = document.getElementById("pentagon1").value;
    let value2 = document.getElementById("pentagon2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = 0.5 * CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Pentagon    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });

  document.getElementById("rhombus").addEventListener('click', function () {
    let value1 = document.getElementById("rhombus1").value;
    let value2 = document.getElementById("rhombus2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = 0.5 * CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Rhombus    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });

  document.getElementById("parallelogram").addEventListener('click', function () {
    let value1 = document.getElementById("parallelogram1").value;
    let value2 = document.getElementById("parallelogram2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Parallelogram    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });

  document.getElementById("rectangle").addEventListener('click', function () {
    let value1 = document.getElementById("rectangle1").value;
    let value2 = document.getElementById("rectangle2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Rectangle    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });

  document.getElementById("triangle").addEventListener('click', function () {
    let value1 = document.getElementById("triangle1").value;
    let value2 = document.getElementById("triangle2").value;

    let areaExist = check(value1, value2);
    if (areaExist) {
      let Area = 0.5 * CalculateAreaFunction1(value1, value2);
      Area = Area.toFixed(2);
      let list = document.getElementById('area-list');
      let entry = document.createElement('li');
      entry.classList.add('py-1');
      entry.innerHTML = `Triangle    ${Area} cm<sup>2</sup>    <button class='btn bg-primary'>Convert to m<sup>2</sup></button>`
      list.appendChild(entry);
    }
  });


//   <!-- random color on hover -->
  var cardBox = document.getElementsByClassName('card');
  for (var i = 0; i < cardBox.length; i++) {
    cardBox[i].onmouseenter = function (e) {
      const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
      document.documentElement.style.setProperty('--main-bg-color', randomColor);
    }
  }