
console.log("inside public supplierProductsPagination.js file")

var state = 
          {
            'allProfiles_JSONArray' : {},
            'page' : 1,
            'profilesPerPage' : 2
          }
var k = 0;
var increase_k = true;
var order = [];
var pageRefreshed = true; 
var productsQuantities = [];
var trimmedProfiles = {};
let arrayForCurrentPage = {};
var tempAllProfiles = {};
var filteredProfilesArray = {};
// function cloneFullProfilesArray(obj) {
//   if (null == obj || "object" != typeof obj) return obj;
//   var copy = obj.constructor();
//   for (var attr in obj) {
//       if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//   }
//   return copy;
// }
var fullArrayObject = {};
//////////////////////// START DATA FETCHING ///////////////////////////
    // const loader = document.querySelector(".loadingAnimation");
    // loader.classList.remove("hidden");

    state.allProfiles_JSONArray = Object.assign({}, products);
    fullArrayObject = Object.assign({}, products);
    updatedProfilesCategoriesArray = (Object.assign({}, fullArrayObject));
    filteredProfilesArray = Object.assign({}, products);
    for (var j = 0 in state.allProfiles_JSONArray)
    {
        productsQuantities.push("0");
    }
    console.log(productsQuantities);
    console.log(order);
    trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);
    arrayForCurrentPage = trimmedProfiles.dataSet;

    for (var i = 0 in arrayForCurrentPage)
    {
        let name = arrayForCurrentPage[i]["productName"];
        let quantity = arrayForCurrentPage[i]["productQuantity"];
        let category = arrayForCurrentPage[i]["productCategory"];
        let price = arrayForCurrentPage[i]["productPrice"];
        let productNumber = "pdct"+i;
      newProductCard(name,quantity,category,price,productNumber);
    }
    console.log(productsQuantities);
    console.log(order);
    pageButtons(trimmedProfiles.pages);
        // loader.classList.add("hidden");

//////////////////////// EDN OF DATA FETCHING ///////////////////////////

//////////////////// Start Pagination Code //////////////////////////////
function pagination(profilesArray,page,profilesPerPage)
{
  var trimStart = (page-1)*profilesPerPage;
  var trimEnd = trimStart + profilesPerPage;

  var trimmedProfiles = Object.values(profilesArray).slice(trimStart,trimEnd);
  
  pages = Math.ceil(Object.values(profilesArray).length/profilesPerPage);
  k = (state.page*state.profilesPerPage)-state.profilesPerPage;
  return{
    "dataSet": trimmedProfiles,
    "pages": pages
  }

}

function pageButtons(pages) 
{
  if (pages == 0)
  {
    pages = 1;
  }
  var wrapper = document.getElementById('pagination-wrapper')

  wrapper.innerHTML = ``;
  
  for (var page = 1; page <= pages; page++) 
  {
    wrapper.innerHTML += `<button id='pageNumber${page}' value=${page} onclick="updatePage(this)" class="page paginationButtons">${page}</button>`
  }

  document.getElementById("pageNumber"+state.page).classList.add('paginationButtonsClicked');//to highlight clicked button with blue color
}
function updatePage(e)
  {
    // document.querySelector(".paginationButtonsClicked").forEach(element => {
    //   this.classList.remove('paginationButtonsClicked');
    // });
    // if(e.value == state.page || e.value < state.page)
    // {
    //     increase_k = false;
    // }
    document.getElementById("supplierProductsCardsContainer").innerHTML = "<div id='startAppendingFromHere'></div>";
    state.page = e.value;
    // k = state.page;
    
    console.log("current value of k = "+k);
    console.log("JSON_array:");
    console.log(Object.keys(state.allProfiles_JSONArray).length);
    console.log("page number: "+state.page);

    if (state.allProfiles_JSONArray !=null)
    {
      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);
    }
    else
    {
      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage); 
    }

    trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);

          arrayForCurrentPage = trimmedProfiles.dataSet;
          
          for (var i = 0 in arrayForCurrentPage)
          {
            
            let name = arrayForCurrentPage[i]["productName"];
            let quantity = arrayForCurrentPage[i]["productQuantity"];
            let category = arrayForCurrentPage[i]["productCategory"];
            let price = arrayForCurrentPage[i]["productPrice"];
            let productNumber = "pdct"+i;
            
            newProductCard(name,quantity,category,price,productNumber);
          }
        tempLocationProfilesArray = Object.assign({}, fullArrayObject);
        console.log(productsQuantities);
        console.log(order);
        pageButtons(trimmedProfiles.pages);
  }

  function updateProfilesArray()
    {
      state.page = 1;
      productsQuantities = [];
      order = [];
      increase_k = true;
      // console.log("'''''''''''''''''******* updatedProfilesCategoriesArray Values ******* '''''''''''''''''''");
      // console.log(updatedProfilesCategoriesArray);
      // console.log("'''''''''''''''''******* updatedProfilesLocationsArray Values *******'''''''''''''''''''");
      // console.log(updatedProfilesLocationsArray);      // console.log("updateProfilesArray: ");
      // console.log(state.allProfiles_JSONArray);
      // console.log(state.allProfiles_JSONArray);
      filteredProfilesArray = {};

      console.log(" LENGTH of CATEGORIES");
      console.log(Object.keys(updatedProfilesCategoriesArray).length);

      if (Object.keys(updatedProfilesCategoriesArray).length > 0)
      {
        filteredProfilesArray = updatedProfilesCategoriesArray;
      }

      console.log(filteredProfilesArray);
      state.allProfiles_JSONArray = filteredProfilesArray;
      console.log(state.allProfiles_JSONArray);
      for (var j = 0; j < Object.keys(state.allProfiles_JSONArray).length; j++)
      {
          productsQuantities.push("0");
      }
      console.log(productsQuantities);
      console.log(order);
      document.getElementById("supplierProductsCardsContainer").innerHTML = "<div id='startAppendingFromHere'></div>";

      trimmedProfiles = pagination(state.allProfiles_JSONArray,state.page,state.profilesPerPage);
      arrayForCurrentPage = trimmedProfiles.dataSet;

      for (var i = 0 in arrayForCurrentPage)
      {
        
        let name = arrayForCurrentPage[i]["productName"];
        let quantity = arrayForCurrentPage[i]["productQuantity"];
        let category = arrayForCurrentPage[i]["productCategory"];
        let price = arrayForCurrentPage[i]["productPrice"];
        let productNumber = "pdct"+i;
        newProductCard(name,quantity,category,price,productNumber);
    }
      console.log("leeeength is:"+Object.keys(state.allProfiles_JSONArray).length);
      if (Object.keys(state.allProfiles_JSONArray).length == 0)
      {
        pageButtons(1);
      }
      else{
        pageButtons(trimmedProfiles.pages);
      }

    }
//////////////////// End Pagination Code //////////////////////////////

/////////////////// START OF PRODUCTS CARDS POPULATING //////////////////
function  newProductCard(name,quantity,category,price,productNumber)

{
  let productQuantitiyIndex = k;
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let div6 = document.createElement("div");
  let h5 = document.createElement("h5");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span"); //quantity span
  let span4 = document.createElement("span"); //quantity span
  let span5 = document.createElement("span"); //quantity span
  let span6 = document.createElement("span");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  let input1 = document.createElement("input");
  let p1 = document.createElement("p");

  div1.className = "ml-1 mr-1 allCategories "+category;
  div2.className = "card mb-2";
  div2.style.borderRadius = "15px";
  div2.style.color ="blue";
  div1.style.display = "inline-block";
  // div2.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
  img.className =  "card-img-top";
  img.style.width= "100%";
  img.src = "product_default_image.svg";
  div3.className = "card-body d-flex justify-content-center";
  div3.style.position = "relative";
  div4.className = "text-center";
  div5.style.position= "absolute";
  div5.style.bottom = "0";
  div6.className = "input-group-menu";
  h5.className = "card-title";
  h5.style.textAlign = "center";
  h5.innerText = name;
  h5.style.overflow = "auto";
  span1.innerText = price+"ريال";
  span2.innerText = quantity;
  span3.className = "input-group-btn";
  span4.className = "fa fa-plus";
  span5.className = "input-group-btn";
  span6.className = "fa fa-minus";
  span1.style.backgroundColor = "#caf7e3";
  span1.style.padding = "5px";
  button1.type = "button";
  button1.name = productNumber;
  button1.className = "btnAdd btn btn-success btn-number";
  button1.id = productNumber+"plus";
  button1.setAttribute("data-type", "plus");
  button2.type = "button";
  button2.name = productNumber;
  button2.className = "btnRemove btn btn-danger btn-number";
  button2.id = productNumber+"minus";
  button2.setAttribute("data-type", "minus");
  input1.type = "text";
  input1.id = productNumber;
  input1.className = "form-control input-number text-center"
  
  input1.value = productsQuantities[productQuantitiyIndex];

  input1.min = "0";
  input1.max = "100";
  input1.disabled = "true";
  input1.style.display = "inline-block";

  div1.appendChild(div2)
  div2.appendChild(img)
  div2.appendChild(div3)
  div3.appendChild(h5)
  div4.appendChild(span1)
  div4.appendChild(div6);
  div5.appendChild(span2)
  div3.appendChild(div5)
  div2.appendChild(div4)

  // quantity buttons construction
  div6.appendChild(span3);
  div6.appendChild(input1);
  div6.appendChild(span5);
  span3.appendChild(button1);
  button1.appendChild(span4);
  span5.appendChild(button2);
  button2.appendChild(span6);
  
  function insertAfter(referenceNode, newNode)
  {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  var appendingElement = document.getElementById("startAppendingFromHere")
  insertAfter(appendingElement,div1)
  console.log("k = "+k);
  if(increase_k)
  {
    k = k+1;
  }
  
//   if(pageRefreshed)
//   {
//     productsQuantities.push(input1.value);
//   }
  
  // quantity buttons handling
  const plusButton = document.getElementById(productNumber+"plus");
  const minusButton = document.getElementById(productNumber+"minus");

  var checkoutBadge    = document.querySelector(".checkoutBadge");
  var checkoutBadgeValue   = parseInt(checkoutBadge.innerText);

  plusButton.addEventListener("click", function()
     {
         console.log("plusClicked");
        var productName = plusButton.getAttribute("name");
        var productQuantityInput = document.getElementById(productName);
        var currentQuantityValue = productQuantityInput.value;
        var buttonType = plusButton.getAttribute("data-type");
        console.log(buttonType);
        //  var productPrice = parseInt(document.querySelector("#"+productName+"Price").innerText);
        var checkoutBadge = document.querySelector(".checkoutBadge");

        if(parseInt(productQuantityInput.value) < 100)
         {
           productQuantityInput.value = parseInt(productQuantityInput.value)+1;
           if(productQuantityInput.value>0)
           {
            console.log("productQuantityInput.value is: "+productQuantityInput.value);
            productsQuantities[productQuantitiyIndex] = productQuantityInput.value;
            order[productQuantitiyIndex] = {"productQuantity":productQuantityInput.value, "productName":name, "productUnit":quantity};
           }
           if(productQuantityInput.value==0)
           {
            console.log("productQuantityInput.value is: "+productQuantityInput.value);
            productsQuantities[productQuantitiyIndex] = productQuantityInput.value;
            order[productQuantitiyIndex] = null;
            }
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

        checkoutBadgeValue = checkoutBadgeValue+1;
        console.log(checkoutBadgeValue);
        document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;

        }
        console.log("product qantities array:");
        console.log(productsQuantities);
        console.log(order);
    });
    
minusButton.addEventListener("click", function()
     {
        console.log("minusClicked");

        var productName = plusButton.getAttribute("name");
        var productQuantityInput = document.getElementById(productName);
        var currentQuantityValue = productQuantityInput.value;
        var buttonType = plusButton.getAttribute("data-type");
        console.log(buttonType);
        //  var productPrice = parseInt(document.querySelector("#"+productName+"Price").innerText);
        var checkoutBadge = document.querySelector(".checkoutBadge");

        if(parseInt(productQuantityInput.value) > 0)
         {
           productQuantityInput.value = parseInt(currentQuantityValue)-1;
           if(productQuantityInput.value>0)
           {
            console.log("productQuantityInput.value is: "+productQuantityInput.value);
            productsQuantities[productQuantitiyIndex] = productQuantityInput.value;
            order[productQuantitiyIndex] = {"productQuantity":productQuantityInput.value, "productName":name, "productUnit":quantity};
           }
           if(productQuantityInput.value==0)
           {
            console.log("productQuantityInput.value is: "+productQuantityInput.value);
            productsQuantities[productQuantitiyIndex] = productQuantityInput.value;
            order[productQuantitiyIndex] = null;
           }
        //    document.querySelector("#"+productName+"TotalCost").innerText = (productQuantityInput.value)*productPrice;

           checkoutBadgeValue = checkoutBadgeValue-1;
           console.log(checkoutBadgeValue);
           document.querySelector(".checkoutBadge").innerText = checkoutBadgeValue;
         }
        console.log("product qantities array:");
        console.log(productsQuantities);
        console.log(order);
    });

}


// for (var j = 1; j <= Object.keys(state.allProfiles_JSONArray).length; j++)
// {
//     clientProductsOrder["order"+j] = {"productName":state.allProfiles_JSONArray["product"+j]["productName"], "productUnit":state.allProfiles_JSONArray["product"+j]["productQuantity"], "productQuantity": productsQuantities[j] };
// }
/////////////////// END OF Supplier CARDS POPULATING ////////////////////
