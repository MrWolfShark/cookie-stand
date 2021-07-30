"use strict";

let seattle = {
  name: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSoldPerHour: 6.3,
  dailySoldCookies: 0,
  cookiesSoldEachHour: {},
  parentContainer: document.getElementById('cookieSalesSeattle'),
  getRandomCustomerServed: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getCookieSoldEachHour: function() {
    let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
    for (let i =0; i < hoursOpen.length; i++) {
      let customersServed = this.getRandomCustomerServed();
      let cookiesSoldThisHour = Math.ceil(customersServed * this.avgCookieSoldPerHour);
      this.dailySoldCookies += cookiesSoldThisHour;
      this.cookiesSoldEachHour[hoursOpen[i]] = cookiesSoldThisHour;
    }
  },
  renderDictAsList: function () {
    let article = document.createElement('article');
    this.parentContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Seattle';
    article.appendChild(h3);  
    let ul = document.createElement('ul');
    ul.id = 'cookiesSoldEachHour';
    article.appendChild(ul);
    for (const [key, value] of Object.entries(this.cookiesSoldEachHour)) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldCookies}`;
    ul.appendChild(li);
    this.parentContainer.appendChild(ul)
  }
}

let tokyo = {
  name: "Tokyo",
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSoldPerHour: 1.2,
  dailySoldCookies: 0,
  cookiesSoldEachHour: {},
  parentContainer: document.getElementById('cookieSalesTokyo'),
  getRandomCustomerServed: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getCookieSoldEachHour: function() {
    let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
    for (let i =0; i < hoursOpen.length; i++) {
      let customersServed = this.getRandomCustomerServed();
      let cookiesSoldThisHour = Math.ceil(customersServed * this.avgCookieSoldPerHour);
      this.dailySoldCookies += cookiesSoldThisHour;
      this.cookiesSoldEachHour[hoursOpen[i]] = cookiesSoldThisHour;
    }
  },
  renderDictAsList: function () {
    let article = document.createElement('article');
    this.parentContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Tokyo';
    article.appendChild(h3);  
    let ul = document.createElement('ul');
    ul.id = 'cookiesSoldEachHour';
    article.appendChild(ul);
    for (const [key, value] of Object.entries(this.cookiesSoldEachHour)) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldCookies}`;
    ul.appendChild(li);
    this.parentContainer.appendChild(ul);
  }
}

let dubia = {
  name: "Dubia",
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSoldPerHour: 3.7,
  dailySoldCookies: 0,
  cookiesSoldEachHour: {},
  parentContainer: document.getElementById('cookieSalesDubia'),
  getRandomCustomerServed: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getCookieSoldEachHour: function() {
    let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
    for (let i =0; i < hoursOpen.length; i++) {
      let customersServed = this.getRandomCustomerServed();
      let cookiesSoldThisHour = Math.ceil(customersServed * this.avgCookieSoldPerHour);
      this.dailySoldCookies += cookiesSoldThisHour;
      this.cookiesSoldEachHour[hoursOpen[i]] = cookiesSoldThisHour;
    }
  },
  renderDictAsList: function () {
    let article = document.createElement('article');
    this.parentContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Dubia';
    article.appendChild(h3);  
    let ul = document.createElement('ul');
    ul.id = 'cookiesSoldEachHour';
    article.appendChild(ul);
    for (const [key, value] of Object.entries(this.cookiesSoldEachHour)) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldCookies}`;
    ul.appendChild(li);
    this.parentContainer.appendChild(ul)
  }
}

let paris = {
  name: "Paris",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSoldPerHour: 2.3,
  dailySoldCookies: 0,
  cookiesSoldEachHour: {},
  parentContainer: document.getElementById('cookieSalesParis'),
  getRandomCustomerServed: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getCookieSoldEachHour: function() {
    let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
    for (let i =0; i < hoursOpen.length; i++) {
      let customersServed = this.getRandomCustomerServed();
      let cookiesSoldThisHour = Math.ceil(customersServed * this.avgCookieSoldPerHour);
      this.dailySoldCookies += cookiesSoldThisHour;
      this.cookiesSoldEachHour[hoursOpen[i]] = cookiesSoldThisHour;
    }
  },
  renderDictAsList: function () {
    let article = document.createElement('article');
    this.parentContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Paris';
    article.appendChild(h3);  
    let ul = document.createElement('ul');
    ul.id = 'cookiesSoldEachHour';
    article.appendChild(ul);
    for (const [key, value] of Object.entries(this.cookiesSoldEachHour)) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldCookies}`;
    ul.appendChild(li);
    this.parentContainer.appendChild(ul)
  }
}

let lima = {
  name: "Lima",
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSoldPerHour: 2.3,
  dailySoldCookies: 0,
  cookiesSoldEachHour: {},
  parentContainer: document.getElementById('cookieSalesLima'),
  getRandomCustomerServed: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  getCookieSoldEachHour: function() {
    let hoursOpen = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];
    for (let i =0; i < hoursOpen.length; i++) {
      let customersServed = this.getRandomCustomerServed();
      let cookiesSoldThisHour = Math.ceil(customersServed * this.avgCookieSoldPerHour);
      this.dailySoldCookies += cookiesSoldThisHour;
      this.cookiesSoldEachHour[hoursOpen[i]] = cookiesSoldThisHour;
    }
  },
  renderDictAsList: function () {
    let article = document.createElement('article');
    this.parentContainer.appendChild(article);
    let h3 = document.createElement('h3');
    h3.textContent = 'Lima';
    article.appendChild(h3);  
    let ul = document.createElement('ul');
    ul.id = 'cookiesSoldEachHour';
    article.appendChild(ul);
    for (const [key, value] of Object.entries(this.cookiesSoldEachHour)) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailySoldCookies}`;
    ul.appendChild(li);
    this.parentContainer.appendChild(ul)
  }
}

seattle.getCookieSoldEachHour()
console.log(seattle.cookiesSoldEachHour)
seattle.renderDictAsList()

tokyo.getCookieSoldEachHour()
console.log(tokyo.cookiesSoldEachHour)
tokyo.renderDictAsList()

dubia.getCookieSoldEachHour()
console.log(dubia.cookiesSoldEachHour)
dubia.renderDictAsList()

paris.getCookieSoldEachHour()
console.log(paris.cookiesSoldEachHour)
paris.renderDictAsList()

lima.getCookieSoldEachHour()
console.log(lima.cookiesSoldEachHour)
lima.renderDictAsList()