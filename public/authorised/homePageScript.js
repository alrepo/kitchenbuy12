let selectedProvinceSuppliers = [];
var updatedProfilesLocationsArray = Object.assign({}, fullArrayObject);
var updatedProfilesCitiesArray = Object.assign({}, fullArrayObject);

// var filteredProfilesArray = Object.assign({}, fullArrayObject);

var provinceText = "";

// console.log(Object.keys(filteredProfilesArray).length);

// document.getElementById("easternCities").classList.remove("d-none")
document.getElementById("easternCities").disabled = true;

document.querySelector(".form-select-province").addEventListener("change", provinceFilter);
document.getElementById("easternCities").addEventListener("change", cityFilter);
document.getElementById("haelCities").addEventListener("change", cityFilter);
document.getElementById("makkahCities").addEventListener("change", cityFilter);
document.getElementById("riyadhCities").addEventListener("change", cityFilter);
document.getElementById("aseerCities").addEventListener("change", cityFilter);
document.getElementById("madinahCities").addEventListener("change", cityFilter);
document.getElementById("qassimCities").addEventListener("change", cityFilter);
document.getElementById("taboukCities").addEventListener("change", cityFilter);
document.getElementById("najranCities").addEventListener("change", cityFilter);
document.getElementById("jazanCities").addEventListener("change", cityFilter);

function provinceFilter()
{
  updatedProfilesLocationsArray = {};
  // state.allProfiles_JSONArray = filteredProfilesArray;
  state.page = 1;
  // console.log(Object.keys(fullArrayObject).length);

  // state.allProfiles_JSONArray = filteredProfilesArray;

  // console.log("///////////////////////// Start Initial Values //////////////////////////////");
  // console.log(Object.keys(filteredProfilesArray).length);
  // console.log(Object.keys(state.allProfiles_JSONArray).length);
  // console.log("/////////////////////////// End Initial Values /////////////////////////////");
    // updateProfilesArray();

  console.log("inside homePageScript.js!")

  // state.allProfiles_JSONArray = fullArrayObject;

  var selectedProvince = document.querySelector(".form-select-province")
  var value = selectedProvince.options[selectedProvince.selectedIndex].value;// get selected option value
  provinceText = selectedProvince.options[selectedProvince.selectedIndex].text ;
  if(provinceText  == "?????????????? ??????????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").disabled = false;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "?????????????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;

    // updateProfilesArray();

    document.querySelectorAll(".eastern").forEach(showElement);
    document.querySelectorAll(".eastern").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }

    }
  else if(provinceText  == "????????")
  {
    selectedProvinceSuppliers = [];
    // state.allProfiles_JSONArray = fullArrayObject;

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("haelCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray();
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // console.log(Object.keys(filteredProfilesArray).length);
    // console.log(Object.keys(state.allProfiles_JSONArray).length);
    // filteredProfilesArray = Object.assign({}, fullArrayObject);

    document.querySelectorAll(".hael").forEach(showElement);
    document.querySelectorAll(".hael").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);
    
    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      
    }
  else if(provinceText  == "?????? ??????????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("makkahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "?????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);

    document.querySelectorAll(".makkah").forEach(showElement);
    document.querySelectorAll(".makkah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
 
    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
    
  }
  else if(provinceText  == "????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("aseerCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);
  
    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }

  }
  else if(provinceText  == "????????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("riyadhCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".riyadh").forEach(showElement);
    document.querySelectorAll(".riyadh").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

      function hideElement(elem)
        {
          elem.classList.add("d-none");
        }
      function showElement(elem)
        {
            elem.classList.remove("d-none");
        }
        function appendToSelectedSuppliers(elem)
        {
          selectedProvinceSuppliers.push(elem);
        }
  }
  else if(provinceText  == "?????????????? ??????????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("madinahCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "?????????????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".madinah").forEach(showElement);
    document.querySelectorAll(".madinah").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    
  }
  else if(provinceText  == "????????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("qassimCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".qassim").forEach(showElement);
    document.querySelectorAll(".qassim").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
        elem.classList.remove("d-none");
      }
    function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    
  }
  else if(provinceText  == "????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("taboukCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".tabouk").forEach(showElement);
    document.querySelectorAll(".tabouk").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);

    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }

    }
  else if(provinceText  == "??????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("najranCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".najran").forEach(showElement);
    document.querySelectorAll(".najran").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".jazan").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
    }
  else if(provinceText  == "??????????")
  {
    selectedProvinceSuppliers = [];

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;

    document.getElementById("jazanCities").classList.remove("d-none")
    document.getElementById("easternCities").classList.add("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierProvince"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
        
      }
    }
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();
    // filteredProfilesArray = Object.assign({}, fullArrayObject);


    document.querySelectorAll(".jazan").forEach(showElement);
    document.querySelectorAll(".jazan").forEach(appendToSelectedSuppliers);

    document.querySelectorAll(".makkah").forEach(hideElement);

    document.querySelectorAll(".eastern").forEach(hideElement);

    document.querySelectorAll(".aseer").forEach(hideElement);

    document.querySelectorAll(".riyadh").forEach(hideElement);

    document.querySelectorAll(".madinah").forEach(hideElement);

    document.querySelectorAll(".qassim").forEach(hideElement);

    document.querySelectorAll(".tabouk").forEach(hideElement);

    document.querySelectorAll(".hael").forEach(hideElement);

    document.querySelectorAll(".najran").forEach(hideElement);


    function hideElement(elem)
      {
        elem.classList.add("d-none");
      }
    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
      function appendToSelectedSuppliers(elem)
      {
        selectedProvinceSuppliers.push(elem);
      }
      

    }
  else{
    // state.allProfiles_JSONArray = fullArrayObject;

    document.getElementById("easternCities").selectedIndex = 0;
    document.getElementById("haelCities").selectedIndex = 0;
    document.getElementById("makkahCities").selectedIndex = 0;
    document.getElementById("aseerCities").selectedIndex = 0;
    document.getElementById("riyadhCities").selectedIndex = 0;
    document.getElementById("madinahCities").selectedIndex = 0;
    document.getElementById("qassimCities").selectedIndex = 0;
    document.getElementById("taboukCities").selectedIndex = 0;
    document.getElementById("najranCities").selectedIndex = 0;
    document.getElementById("jazanCities").selectedIndex = 0;

    document.getElementById("easternCities").disabled = true;
    document.getElementById("easternCities").classList.remove("d-none")
    document.getElementById("makkahCities").classList.add("d-none")
    document.getElementById("haelCities").classList.add("d-none")
    document.getElementById("aseerCities").classList.add("d-none")
    document.getElementById("riyadhCities").classList.add("d-none")
    document.getElementById("madinahCities").classList.add("d-none")
    document.getElementById("qassimCities").classList.add("d-none")
    document.getElementById("taboukCities").classList.add("d-none")
    document.getElementById("najranCities").classList.add("d-none")
    document.getElementById("jazanCities").classList.add("d-none")
    
    updatedProfilesLocationsArray = Object.assign({}, fullArrayObject);
    updateProfilesArray()
    // state.allProfiles_JSONArray = filteredProfilesArray;
    // updateProfilesArray();

    
    document.querySelectorAll(".eastern").forEach(showElement);

    document.querySelectorAll(".makkah").forEach(showElement);

    document.querySelectorAll(".hael").forEach(showElement);

    document.querySelectorAll(".aseer").forEach(showElement);

    document.querySelectorAll(".riyadh").forEach(showElement);

    document.querySelectorAll(".madinah").forEach(showElement);

    document.querySelectorAll(".qassim").forEach(showElement);

    document.querySelectorAll(".tabouk").forEach(showElement);

    document.querySelectorAll(".najran").forEach(showElement);

    document.querySelectorAll(".jazan").forEach(showElement);

    function showElement(elem)
      {
          elem.classList.remove("d-none");
      }
  }
  // console.log("....... UPDATED LOCATIONS ARRAY .........");
  // console.log(updatedProfilesLocationsArray);
}

function cityFilter(e)
{
  updatedProfilesLocationsArray = {};

  let selectedCity = document.getElementById("easternSelected");

  if(e.target.id == "haelCities")
  {
    selectedCity = document.getElementById("haelCities");
  }
  else if(e.target.id == "easternCities")
  {
    selectedCity = document.getElementById("easternCities");
  }
  else if(e.target.id == "riyadhCities")
  {
    selectedCity = document.getElementById("riyadhCities");
  }
  else if(e.target.id == "makkahCities")
  {
    selectedCity = document.getElementById("makkahCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  else if(e.target.id == "aseerCities")
  {
    selectedCity = document.getElementById("aseerCities");
  }
  else if(e.target.id == "abhaCities")
  {
    selectedCity = document.getElementById("abhaCities");
  }
  // else if(e.target.id == "joufCities")
  // {
  //   selectedCity = document.getElementById("joufCities");
  // }
  // else if(e.target.id == "northernBordersCities")
  // {
  //   selectedCity = document.getElementById("northernBordersCities");
  // }
  else if(e.target.id == "madinahCities")
  {
    selectedCity = document.getElementById("madinahCities");
  }
  else if(e.target.id == "jazanCities")
  {
    selectedCity = document.getElementById("jazanCities");
  }
  else if(e.target.id == "qassimCities")
  {
    selectedCity = document.getElementById("qassimCities");
  }
  else if(e.target.id == "taboukCities")
  {
    selectedCity = document.getElementById("taboukCities");
  }
  else if(e.target.id == "najranCities")
  {
    selectedCity = document.getElementById("najranCities");
  }
  
  // get selected option text
  let cityText = selectedCity.options[selectedCity.selectedIndex].text;

  // Eastern Province Cities
  if(cityText == "??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
    updateProfilesArray();
  }
  else if(cityText == "??????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }

  else if(cityText == "??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
  
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }

//Hael Province Cities
if(cityText == "?????????? ????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "?????????? ????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
} 
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "??????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "??????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "??????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "????????????")
    {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
  {
    if (fullArrayObject[key]["supplierCity"] == "??????????????")
     {
      updatedProfilesLocationsArray[key] = fullArrayObject[key];
     }
    }
    updateProfilesArray();
}
else if(cityText == "??????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}

// Makkah cities
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "?????? ??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}

// Riyadh Cities
else if(cityText == "???????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  
  // Aseer Cities
  else if(cityText == "????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }

  // Madinah Cities
  else if(cityText == "????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "?????????????? ??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????????????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }

  // Qassim Cities
  else if(cityText == "??????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "???????? ????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "????????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }
  else if(cityText == "??????????????")
  {
    for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
  }

// Tabouk Cities
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
// Najran Cities
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "???? ????????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???? ????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "???? ??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???? ??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}

else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "???? ??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "???? ??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "?????? ????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "?????????? ??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????????? ??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}

// Jazan Cities
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "?????? ????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "?????? ????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "?????? ????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}
else if(cityText == "??????????")
{
  for(key in fullArrayObject)
    {
      if (fullArrayObject[key]["supplierCity"] == "??????????")
      {
        updatedProfilesLocationsArray[key] = fullArrayObject[key];
      }
    }
    updateProfilesArray();
}

// If no city selected
  else if(cityText == "?????????????? / ????????")
  {
   provinceFilter(); 
  }
  // console.log("////// /////////// //////////// UPDATED LOCATIONS (CITIES-FILTERED) ARRAY /////////////////////////");
  // console.log(updatedProfilesLocationsArray);
}

document.getElementById("supplierLoginOrRegisterButton").addEventListener("click", function(){
  Swal.fire({
    title: '',
    icon: '',
    iconHtml: '',
    confirmButtonText: '??????????  ????????',
    cancelButtonText: '????????',
    showCancelButton: true,
    showCloseButton: true
  })
  document.querySelector(".swal2-confirm").addEventListener('click', function(){
    window.location.assign("signup.html")
  });
  document.querySelector(".swal2-cancel").addEventListener('click', function(){
    window.location.assign("signin.html")
  });
});


// document.querySelector(".signup").addEventListener("click", function(){
//   document.querySelector(".signup").classList.add("dim");
//   setTimeout(function(){document.querySelector(".signup").classList.remove("dim");}, 150);
// });


// document.querySelector(".search").addEventListener("click", function(){
//   window.location.href = "http://stackoverflow.com";
//   console.log("search button clicked");
// });
