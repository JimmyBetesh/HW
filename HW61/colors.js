(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
     element.style[property] = value;
  }

  
  let interval;
  const theButton = get('start');
  const theTable = get('myTable');

  
  let r = 0;
  let g = 0;
  let b = -1;

  const INCREMENT = 50;

  function startColors() {
    interval = setInterval(() => {
      

      b += INCREMENT;
      if (b >= 256) {
        b = 0;

        g += INCREMENT;
        if (g >= 256) {
          g = 0;

          r += INCREMENT;
          if (r >= 256) {
            r = 0;
          }
        }
      }

      setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
      setCss(document.body, 'color', `rgb(${b},${g},${r})`);
      addRow(r,g,b);

      theButton.innerHTML = 'stop'; 
    }, 1000);
  }

  function stopColors() {
    clearInterval(interval);
    interval = null;
    theButton.innerHTML = 'start';
  }

  function addRow(r,g,b) {
    const row = theTable.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = new Date();
    cell2.innerHTML = `rgb(${r},${g},${b})`;
    cell3.innerHTML = `rgb(${b},${g},${r})`;
    row.addEventListener('click', () => {
      stopColors();
      setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
      setCss(document.body, 'color', `rgb(${b},${g},${r})`);
    });
  }

  //
  // within event callback, this is domElement event was on - if not arrow function
  get('start').addEventListener('click', function () { //() => {
    if (!interval) {
      startColors();
 
    } else {
      stopColors();
      
    };
  });
}());