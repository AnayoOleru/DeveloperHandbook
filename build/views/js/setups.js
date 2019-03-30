'use strict';

// eslint-disable-next-line no-use-before-define
console.log('ooo');
// document.getElem

function getASetup() {
  console.log('reached');
  fetch('http://localhost:3000/api/v1/setup/all', {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    //   console.log(data[0].id);
    var result = '';
    data.forEach(function (code) {
      result += '<div class="text-container">\n                  <h3 class="page__main__title">~' + code.title + '</h3>\n                  <p>' + code.body + '</p>\n              </div>';
      document.getElementById('overallPage').innerHTML = result;
    });
  });
}
getASetup();

function getABabel() {
  console.log('reached');
  fetch('http://localhost:3000/api/v1/setup/all/babel', {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    //   console.log(data[0].id);
    var result = '';
    data.forEach(function (code) {
      result += '<div class="text-container">\n                    <h3 class="page__main__title">~' + code.title + '</h3>\n                    <p>' + code.body + '</p>\n                </div>';
      document.getElementById('overallPage').innerHTML = result;
    });
  });
}
getABabel();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXdzL2pzL3NldHVwcy5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ2V0QVNldHVwIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHQiLCJmb3JFYWNoIiwiY29kZSIsInRpdGxlIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRBQmFiZWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQUEsUUFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQTs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ25CRixVQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBRSxRQUFNLHdDQUFOLEVBQWdEO0FBQzlDQyxZQUFRO0FBRHNDLEdBQWhELEVBR0dDLElBSEgsQ0FHUTtBQUFBLFdBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLEdBSFIsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLElBQUQsRUFBVTtBQUNkO0FBQ0EsUUFBSUMsU0FBUyxFQUFiO0FBQ0FELFNBQUtFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckJGLG9HQUUyQ0UsS0FBS0MsS0FGaEQsb0NBR2VELEtBQUtFLElBSHBCO0FBS0FDLGVBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFNBQXZDLEdBQW1EUCxNQUFuRDtBQUNELEtBUEQ7QUFRRCxHQWZIO0FBZ0JEO0FBQ0RQOztBQUVBLFNBQVNlLFNBQVQsR0FBcUI7QUFDbkJqQixVQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBRSxRQUFNLDhDQUFOLEVBQXNEO0FBQ3BEQyxZQUFRO0FBRDRDLEdBQXRELEVBR0dDLElBSEgsQ0FHUTtBQUFBLFdBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLEdBSFIsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLElBQUQsRUFBVTtBQUNkO0FBQ0EsUUFBSUMsU0FBUyxFQUFiO0FBQ0FELFNBQUtFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckJGLHNHQUU2Q0UsS0FBS0MsS0FGbEQsc0NBR2lCRCxLQUFLRSxJQUh0QjtBQUtBQyxlQUFTQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxTQUF2QyxHQUFtRFAsTUFBbkQ7QUFDRCxLQVBEO0FBUUQsR0FmSDtBQWdCRDtBQUNEUSIsImZpbGUiOiJzZXR1cHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbmNvbnNvbGUubG9nKCdvb28nKTtcbi8vIGRvY3VtZW50LmdldEVsZW1cblxuZnVuY3Rpb24gZ2V0QVNldHVwKCkge1xuICBjb25zb2xlLmxvZygncmVhY2hlZCcpO1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zZXR1cC9hbGwnLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhWzBdLmlkKTtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICs9IGA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX21haW5fX3RpdGxlXCI+fiR7Y29kZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHA+JHtjb2RlLmJvZHl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbFBhZ2UnKS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cbmdldEFTZXR1cCgpO1xuXG5mdW5jdGlvbiBnZXRBQmFiZWwoKSB7XG4gIGNvbnNvbGUubG9nKCdyZWFjaGVkJyk7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3NldHVwL2FsbC9iYWJlbCcsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGFbMF0uaWQpO1xuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICArPSBgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhZ2VfX21haW5fX3RpdGxlXCI+fiR7Y29kZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke2NvZGUuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGxQYWdlJykuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG59XG5nZXRBQmFiZWwoKTtcbiJdfQ==