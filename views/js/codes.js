function GetAllHttpCodes() {
  fetch('http://localhost:3000/api/v1/codes/all', {
    method: 'GET',
  })
    .then(res => res.json())
    .then((data) => {
    //   console.log(data[0].id);
      let result = '';
      data.forEach((code) => {
        result
                += `<div class="text-container">
                <h3 class="app__main__title">HTTP code: ${code.errorCode}</h3>
                <p>Meaning: ${code.errorMsg}</p>
                <p>Response: ${code.response}</p>
            </div> 
            <br>`;
        document.getElementById('codeResult').innerHTML = result;
      });
    });
}
GetAllHttpCodes();
