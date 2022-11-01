'use strict';


let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


const Seattle={
  locationName:'Seattle',
  minCustomersPerHour:23,
  maxCustomersPerHour:65,
  averageCookies:6.3,
  custEachHour:[],
  cookiesEachHour:[],
  totalDailyCookies:0,
  hourlyCustomers:function(){
    for(let i=0;i<hours.length;i++){
      this.custEachHour.push(Math.random(this.minCustomersPerHour,this.maxCustomersPerHour));
    }
  },
  cookiesSoldHourly: function(){
    this.hourlyCustomers();
    for(let i=0;i<hours.length;i++){
      let oneHour=Math.ceil(this.custEachHour[i]*this.averageCookies);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies+=oneHour;
    }
  },
  rendor: function(){
    this.cookiesSoldHourly();
    let seattleSection=document.getElementById("seattle");
    let title=document.createElement("h3");
    title.textContent='seattle';
    seattleSection.appendChild(title);
    let seattleList=document.createElement("ul");
    seattleSection.appendChild(seattleList);
    for(let i=0;i<hours.length;i++){
      let listItem=document.createElement("li");
      listItem.textContent=`${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalElem=document.createElement("li");
    totalElem.textContent=`total: ${this.totalDailyCookies}`;
    seattleList.appendChild(totalElem);
  },
}
Seattle.rendor();
