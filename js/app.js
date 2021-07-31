"use strict";

let seattleStore = {
  name: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSoldPerHour: 6.3,
}

let tokyoStore = {
  name: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSoldPerHour: 1.2,
}

let dubiaStore = {
  name: "Dubia",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSoldPerHour: 3.7,
}

let parisStore = {
  name: "Paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSoldPerHour: 2.3,
}

let limaStore = {
  name: "Lima",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSoldPerHour: 2.3,
} 

var City = function(cityObj) {
  this.name = cityObj.name;
  this.cookiesSoldEachHour = [];
  this.dailySoldCookies = 0;
  this.parentContainer = document.getElementById('Sales-Table');
  this.hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
  for (let i =0; i < this.hoursOpen.length; i++) {
    let cookiesSoldThisHour = Math.ceil(Math.floor(Math.random() * (cityObj.maxCustomer - cityObj.minCustomer + 1) + cityObj.minCustomer) * cityObj.avgCookieSoldPerHour);
    console.log(cookiesSoldThisHour)
    this.dailySoldCookies += cookiesSoldThisHour;
    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
}

let tableContainer = document.getElementById('Sales-Table');
let table = document.createElement('table');
tableContainer.appendChild(table);
let tablehead = document.createElement('thead');
table.appendChild(tablehead);
let tableHeaderRow = document.createElement('tr');
tablehead.appendChild(tableHeaderRow);
let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
let blankCell = document.createElement('td');
blankCell.textContent = '';
tableHeaderRow.appendChild(blankCell);
for (let i=0; i < hoursOpen.length; i++) {
  let headerTd = document.createElement('td');
  headerTd.id = 'table-header';
  headerTd.textContent = hoursOpen[i];
  tableHeaderRow.appendChild(headerTd);
}
let headerTd = document.createElement('td');
headerTd.id = 'table-header';
headerTd.textContent = 'Daily Location Total';
tableHeaderRow.appendChild(headerTd)

City.prototype.renderObjTableRow = function () {
  let newRow = document.createElement('tr');
  table.appendChild(newRow);
  newRow.id = this.name;
  let cityNameCell = document.createElement('td');
  cityNameCell.id = 'table-city-name';
  cityNameCell.textContent = this.name;
  newRow.appendChild(cityNameCell);
  for (let i=0; i < this.cookiesSoldEachHour.length; i ++) {
    let cellData = document.createElement('td');
    cellData.textContent = this.cookiesSoldEachHour[i];
    newRow.appendChild(cellData);
  }
  let dailyTotalCellData = document.createElement('td');
  dailyTotalCellData.textContent = parseInt(this.dailySoldCookies)
  newRow.appendChild(dailyTotalCellData)
}

let seattle = new City(seattleStore);
seattle.renderObjTableRow()

let tokyo = new City(tokyoStore);
tokyo.renderObjTableRow()

let paris = new City(parisStore);
paris.renderObjTableRow()

let dubia = new City(dubiaStore);
dubia.renderObjTableRow()

let lima = new City(limaStore);
lima.renderObjTableRow()

let tableFoot = document.createElement('tfoot');
table.appendChild(tableFoot);
tableFoot.id = 'table-footer';
let totalsLabel = document.createElement('td');
totalsLabel.id = 'total-label';
totalsLabel.textContent = 'Totals';
tableFoot.appendChild(totalsLabel);
for (let i=0; i < hoursOpen.length; i++) {
  let cellData = document.createElement('td');
  cellData.id = 'totals-cells';
  cellData.textContent = parseInt(seattle.cookiesSoldEachHour[i] + tokyo.cookiesSoldEachHour[i] + paris.cookiesSoldEachHour[i] + dubia.cookiesSoldEachHour[i] + lima.cookiesSoldEachHour[i])
  tableFoot.appendChild(cellData)
}
let finalTotalCellData = document.createElement('td');
  finalTotalCellData.textContent = parseInt(seattle.dailySoldCookies + tokyo.dailySoldCookies + paris.dailySoldCookies + dubia.dailySoldCookies + lima.dailySoldCookies)
  tableFoot.appendChild(finalTotalCellData)