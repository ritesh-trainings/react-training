 // known bugs:
// - selecting two separate model refinements for the same make.
var carData = {
  data: [{
    make: 'Porsche',
    model: '911',
    price: 135000,
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnuYVDLA0hr3qzoMEMsk5bkGQvzNFs0z06F5j5XbCibohp3CYu7g' },
  {
    make: 'Tesla',
    model: 'Model S',
    price: 100000,
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
    img: 'http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-450x274.jpg' },
  {
    make: 'Tesla',
    model: 'Model X',
    price: 120000,
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrqgYzyFlYmq_4-MJr_5Hy_-LenNHufzMIHuJio88EMDEYlN_7g' },
  {
    make: 'Porsche',
    model: 'Cayenne Turbo',
    price: 11000,
    wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
    img: 'http://files3.porsche.com/filestore/galleryimagerwd/multimedia/none/rd-2013-9pa-e2-2nd-tu-gallery-exterior-06/preview/6e14937f-010f-11e4-84a6-001a64c55f5c/porsche-cayenne-image.jpg' },
  {
    make: 'Nissan',
    model: 'GT-R',
    price: 80000,
    wiki: 'http://en.wikipedia.org/wiki/Nissan_Gt-r',
    img: 'http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-450x274.jpg' },
  {
    make: 'BMW',
    model: 'M3',
    price: 60500,
    wiki: 'http://en.wikipedia.org/wiki/Bmw_m3',
    img: 'http://media.caranddriver.com/images/media/331369/m-is-for-mega-2015-bmw-m3-pricing-surfaces-photo-583888-s-450x274.jpg' },
  {
    make: 'Audi',
    model: 'S5',
    price: 53000,
    wiki: 'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
    img: 'http://www.blogcdn.com/www.autoblog.com/media/2012/11/001-2013-audi-s5-coupe.jpg' },
  {
    make: 'Audi',
    model: 'TT',
    price: 40000,
    wiki: 'http://en.wikipedia.org/wiki/Audi_TT',
    img: 'http://www.topgear.com/sites/default/files/styles/16x9_640w/public/cars-road-test/image/2015/01/Large%20Image%20(optional)_417.jpg?itok=9L-AJyrg' }] };



var helpers = {
  getRefinementList: function getRefinementList() {
    var list = [
    {
      makes: [] },

    {
      models: [] }];


    carData.data.forEach(function (val) {
      if (list[0].makes.indexOf(val.make) < 0) {
        list[0].makes.push(val.make);
      }
      if (list[1].models.indexOf(val.model) < 0) {
        list[1].models.push(val.model);
      }
    });

    return list;

  },
  getModels: function getModels(makes, selectedModels) {
    var models = [];
    carData.data.forEach(function (val) {
      makes.forEach(function (make) {
        if (val.make == make) {
          models.push(val);
        }
      });
    });




    return models;

  },
  refineMakes: function refineMakes(ref, data) {
    var refinedList = [];
    ref.selectedRefinements.forEach(function (val) {
      data.forEach(function (item) {
        if (val == item.make) {
          refinedList.push(item);

        }
      });
    });
    return refinedList;
  },
  refineModels: function refineModels(ref, data) {
    var refinedList = [];
    ref.selectedRefinements.forEach(function (val, index) {
      val = val.split(":"); // val is now an array [make:model]
      refinedList = data.filter(function (item) {
        return val[1] == item.model || val[0] !== item.make;
      });
      data = refinedList;
    });

    return refinedList;
  } };


var CarWell = React.createClass({ displayName: 'CarWell',
  render: function render() {
    return (
      React.createElement('div', { className: 'car-display' },
        React.createElement('p', null, 'Showing: ', this.props.cars.length, ' cars total'),

        this.props.cars.map(function (car) {
          return (
            React.createElement('div', { key: car.id, className: 'well' },
              React.createElement('div', { className: 'image-container' },
                React.createElement('img', { src: car.img })),

              React.createElement('h3', null, [car.make, car.model].join(" ")),
              React.createElement('span', null, '$', car.price)));




        })));




  } });


var SidebarItem = React.createClass({ displayName: 'SidebarItem',
  getInitialState: function getInitialState() {
    return {
      selected: false };


  },
  toggleSelected: function toggleSelected(e) {
    e.preventDefault();
    // this.props.toggleAndFilter(this.props.refinement, "make", this.props.cars);
    var refinementObj = this.props.refinementObj;
    var refinement = this.props.refinement;
    var toggleAndFilter = this.props.toggleAndFilter;
    var refinementType = this.props.refinementType;
    var self = this;
    this.setState({ selected: !this.state.selected });
    if (!this.state.selected) {
      // when selected push refinement into relevant array of refinementObj
      refinementObj.forEach(function (val) {
        if (val.rtype == "make" && refinementType == "make") {
          val.selectedRefinements.push(refinement);
        }
        if (val.rtype == "model" && refinementType == "model") {
          // make:model
          var refStr = [self.props.make, refinement].join(":");
          console.log(refStr);
          val.selectedRefinements.push(refStr);
        }
        toggleAndFilter();
      });
    } else {
      console.log("was unselected");
      // if refinement is unselected, then remove refinement from relevant array of refinementObj
      refinementObj.forEach(function (val) {
        if (val.rtype == "make" && refinementType == "make") {
          var index = val.selectedRefinements.indexOf(refinement);
          val.selectedRefinements.splice(index, 1);
          // self.props.selectedMakes = val.selectedRefinements;
        }
        if (val.rtype == "model" && refinementType == "model") {
          // make:model
          var refStr = [self.props.make, refinement].join(":");
          var index = val.selectedRefinements.indexOf(refStr);
          val.selectedRefinements.splice(index, 1);
        }
        toggleAndFilter(true);
      });

    }
  },
  render: function render() {
    return (
      React.createElement('div', { className: 'refinement' },
        React.createElement('span', {
          onClick: this.toggleSelected,
          className: (this.state.selected ? 'selected' : '') + " psuedo-check" }),
        React.createElement('p', null, this.props.refinement)));



  } });


var Models = React.createClass({ displayName: 'Models',
  getInitialState: function getInitialState() {
    return {
      showRef: true };

  },
  showRef: function showRef(e) {
    e.preventDefault();
    this.setState({ showRef: !this.state.showRef });

  },
  render: function render() {
    var self = this;
    var models = helpers.getModels(this.props.refinementObj[0].selectedRefinements, this.props.refinementObj[1].selectedRefinements);
    return (

      React.createElement('div', { className: models.length > 0 ? "refinements" : "hidden" },
        React.createElement('div', { className: 'refinement' },
          React.createElement('h4', { onClick: self.showRef, className: 'refinement-title' }, 'Models'),
          React.createElement('ul', { className: self.state.showRef ? "refinement-options" : "hidden" },

            models.map(function (car) {

              return (
                React.createElement('li', { key: car.id },
                  React.createElement(SidebarItem, {
                    refinementType: "model",
                    refinement: car.model,
                    make: car.make,
                    toggleAndFilter: self.props.toggleAndFilter,
                    refinementObj: self.props.refinementObj,
                    selectedMakes: self.props.selectedMakes })));




            })))));






  } });


var Makes = React.createClass({ displayName: 'Makes',
  getInitialState: function getInitialState() {
    return {
      showRef: true };

  },
  showRef: function showRef(e) {
    e.preventDefault();
    this.setState({ showRef: !this.state.showRef });

  },
  // this.props.showRef
  render: function render() {
    var vals = [];
    var self = this;
    return (

      React.createElement('div', { className: 'refinements' },
        React.createElement('div', { className: 'refinement' },
          React.createElement('h4', { onClick: self.showRef, className: 'refinement-title' }, 'Makes'),
          React.createElement('ul', { className: self.state.showRef ? "refinement-options" : "hidden" },

            carData.data.map(function (car) {
              if (vals.indexOf(car.make) < 0) {
                vals.push(car.make);
                return (
                  React.createElement('li', { key: car.id },
                    React.createElement(SidebarItem, {
                      refinementType: "make",
                      refinement: car.make,
                      toggleAndFilter: self.props.toggleAndFilter,
                      refinementObj: self.props.refinementObj,
                      selectedMakes: self.props.selectedMakes })));



              }
            })))));







  } });


var Sidebar = React.createClass({ displayName: 'Sidebar',
  getInitialState: function getInitialState() {
    return {
      selectedMakes: [] };

  },
  render: function render() {
    var toggleAndFilter = this.props.toggleAndFilter;
    var cars = this.props.cars;
    var refinementObj = this.props.refinementObj;
    var vals = [];
    // var renderSidebarItem = this.renderSidebarItem;
    var showRef = this.showRef;
    var self = this;
    return (
      React.createElement('div', { className: 'refs' },
        React.createElement(Makes, {
          refinementObj: this.props.refinementObj,
          toggleAndFilter: this.props.toggleAndFilter }),

        React.createElement(Models, {
          refinementObj: this.props.refinementObj,
          toggleAndFilter: this.props.toggleAndFilter })));






  } });



var App = React.createClass({ displayName: 'App',
  getInitialState: function getInitialState() {
    var id = 0;
    carData.data.forEach(function (car) {
      car.id = id++;
    });
    return {
      cars: carData.data,
      refinementObj: [
      {
        rtype: "make",
        selectedRefinements: [] },

      {
        rtype: "model",
        selectedRefinements: [] }] };



  },

  toggleAndFilter: function toggleAndFilter(reset) {
    //console.log("should be toggling and filtering");
    // refines car state based off refinements
    var refinementObj = this.state.refinementObj;
    //console.log(JSON.stringify(refinementObj));
    // var dataClone = carData.data;
    var dataClone = carData.data;

    refinementObj.forEach(function (refItem) {
      var hasRefinements = refItem.selectedRefinements.length > 0;
      if (refItem.rtype == "make" && hasRefinements) {
        dataClone = helpers.refineMakes(refItem, dataClone);
      }
      if (refItem.rtype == "model" && hasRefinements) {
        //console.log("getting in here?");
        //console.log("data clone before", JSON.stringify(dataClone));
        dataClone = helpers.refineModels(refItem, dataClone);
        //console.log("data clone after", JSON.stringify(dataClone));
      }

    });



    this.setState({
      cars: dataClone });

  },
  render: function render() {
    return (
      React.createElement('div', { className: 'row' },
        React.createElement('div', { className: 'col-md-3' },
          React.createElement(Sidebar, {
            cars: this.state.cars,
            toggleAndFilter: this.toggleAndFilter,
            refinementObj: this.state.refinementObj })),


        React.createElement('div', { className: 'col-md-9' },
          React.createElement(CarWell, {
            cars: this.state.cars }))));




  } });


ReactDOM.render(React.createElement(App, null), document.getElementById('content'));