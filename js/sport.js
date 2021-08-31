
  
const loadTeam = () => {
    const searchBox = document.getElementById('search-box')
    const searchValue = searchBox.value;
    const url =`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`
    searchBox.value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayTeam(data.teams))
}
const displayTeam = data => {
  // console.log(data);
  const searchResult = document.getElementById('search-result')
   searchResult.textContent = '';
   for(const team of data){
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML = `<div class="card">
       <img onclick="loadTeamById('${team.idTeam}')" src="${team.strTeamBadge}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${team.strCountry}</h5>
         <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
       </div>
     </div>
     `
     searchResult.appendChild(div)
   }
}
const loadTeamById = teamid => {
  // console.log(teamid);
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamid}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayTeamById(data.teams))
}
const displayTeamById = team => {
  // console.log(team[0]);
  const teamDetail = document.getElementById('team-detail')
  teamDetail.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${team[0].strStadiumThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${team[0].strTeam}</h5>
            <p class="card-text">${team[0].strDescriptionEN.slice(0, 150)}</p>
            <a href="${team[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
          </div>
          `
            teamDetail.appendChild(div)
  
}