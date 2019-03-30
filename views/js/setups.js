// eslint-disable-next-line no-use-before-define
console.log('ooo');
// document.getElem

function getASetup() {
  console.log('reached');
  fetch('http://localhost:3000/api/v1/setup/all', {
    method: 'GET',
  })
    .then(res => res.json())
    .then((data) => {
      //   console.log(data[0].id);
      let result = '';
      data.forEach((code) => {
        result
                  += `<div class="text-container">
                  <h3 class="page__main__title">~${code.title}</h3>
                  <p>${code.body}</p>
              </div>`;
        document.getElementById('overallPage').innerHTML = result;
      });
    });
}
getASetup();

function getABabel() {
  console.log('reached');
  fetch('http://localhost:3000/api/v1/setup/all/babel', {
    method: 'GET',
  })
    .then(res => res.json())
    .then((data) => {
      //   console.log(data[0].id);
      let result = '';
      data.forEach((code) => {
        result
                    += `<div class="text-container">
                    <h3 class="page__main__title">~${code.title}</h3>
                    <p>${code.body}</p>
                </div>`;
        document.getElementById('overallPage').innerHTML = result;
      });
    });
}
getABabel();
