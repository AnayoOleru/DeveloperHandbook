'use strict';

function GetAllHttpCodes() {
  fetch('http://localhost:3000/api/v1/codes/all', {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    //   console.log(data[0].id);
    var result = '';
    data.forEach(function (code) {
      result += '<div class="text-container">\n                <h3 class="app__main__title">HTTP code: ' + code.errorCode + '</h3>\n                <p>Meaning: ' + code.errorMsg + '</p>\n                <p>Response: ' + code.response + '</p>\n            </div> \n            <br>';
      document.getElementById('codeResult').innerHTML = result;
    });
  });
}
GetAllHttpCodes();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXdzL2pzL2NvZGVzLmpzIl0sIm5hbWVzIjpbIkdldEFsbEh0dHBDb2RlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzdWx0IiwiZm9yRWFjaCIsImNvZGUiLCJlcnJvckNvZGUiLCJlcnJvck1zZyIsInJlc3BvbnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3pCQyxRQUFNLHdDQUFOLEVBQWdEO0FBQzlDQyxZQUFRO0FBRHNDLEdBQWhELEVBR0dDLElBSEgsQ0FHUTtBQUFBLFdBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLEdBSFIsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLElBQUQsRUFBVTtBQUNoQjtBQUNFLFFBQUlDLFNBQVMsRUFBYjtBQUNBRCxTQUFLRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCRiwyR0FFa0RFLEtBQUtDLFNBRnZELDJDQUdzQkQsS0FBS0UsUUFIM0IsMkNBSXVCRixLQUFLRyxRQUo1QjtBQU9BQyxlQUFTQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxTQUF0QyxHQUFrRFIsTUFBbEQ7QUFDRCxLQVREO0FBVUQsR0FqQkg7QUFrQkQ7QUFDRFAiLCJmaWxlIjoiY29kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBHZXRBbGxIdHRwQ29kZXMoKSB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvZGVzL2FsbCcsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhkYXRhWzBdLmlkKTtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICArPSBgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYXBwX19tYWluX190aXRsZVwiPkhUVFAgY29kZTogJHtjb2RlLmVycm9yQ29kZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPk1lYW5pbmc6ICR7Y29kZS5lcnJvck1zZ308L3A+XG4gICAgICAgICAgICAgICAgPHA+UmVzcG9uc2U6ICR7Y29kZS5yZXNwb25zZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8YnI+YDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGVSZXN1bHQnKS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cbkdldEFsbEh0dHBDb2RlcygpO1xuIl19