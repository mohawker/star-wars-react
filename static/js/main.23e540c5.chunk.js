(this["webpackJsonpstar-wars-react"]=this["webpackJsonpstar-wars-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/star-wars-logo.0cf7e1d8.png"},20:function(e,t,a){e.exports=a.p+"static/media/BB8-loading.d0bf0146.gif"},21:function(e,t,a){e.exports=a.p+"static/media/baby-yoda.70528013.gif"},22:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),s=a.n(i),o=(a(27),a(2)),c=a(3),r=a(5),u=a(4),h=a(6),p=a(7),g=a.n(p),m=(a(45),a(19)),d=a.n(m),f=a(20),b=a.n(f),E=a(21),v=a.n(E),y=a(8),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={expanded:!1,homeworld:null,species:null,films:[],vehicles:[],starships:[]},a.toggle=a.toggle.bind(Object(y.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"getVehicles",value:function(){for(var e=[],t=this.props.peopleDetails.vehicles,a=0;a<t.length;a++)g.a.get(t[a]).then((function(t){e.push(t.data.name)})).catch((function(e){console.log(e)}));this.setState({vehicles:e})}},{key:"getStarships",value:function(){for(var e=[],t=this.props.peopleDetails.starships,a=0;a<t.length;a++)g.a.get(t[a]).then((function(t){e.push(t.data.name)})).catch((function(e){console.log(e)}));this.setState({starships:e})}},{key:"getFilms",value:function(){for(var e=[],t=this.props.peopleDetails.films,a=0;a<t.length;a++)g.a.get(t[a]).then((function(t){e.push(t.data.title)})).catch((function(e){console.log(e)}));this.setState({films:e})}},{key:"getHomeworld",value:function(){var e=this,t=this.props.peopleDetails.homeworld;g.a.get(t).then((function(t){e.setState({homeworld:t.data.name})})).catch((function(e){console.log(e)}))}},{key:"getSpecies",value:function(){var e=this,t=this.props.peopleDetails.species;g.a.get(t).then((function(t){e.setState({species:t.data.name})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getHomeworld(),this.getSpecies(),this.getFilms(),this.getVehicles(),this.getStarships()}},{key:"render",value:function(){var e=this.props.peopleDetails;return this.state.expanded?l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:this.toggle,style:{float:"right"}},"Hide Details"),l.a.createElement("ul",null,l.a.createElement("li",null,"Height: ",e.height," "),l.a.createElement("li",null,"Mass: ",e.mass),l.a.createElement("li",null,"Hair Color: ",e.hair_color),l.a.createElement("li",null,"Skin Color: ",e.skin_color),l.a.createElement("li",null,"Eye Color: ",e.eye_color),l.a.createElement("li",null,"Birth Year: ",e.birth_year),l.a.createElement("li",null,"Gender: ",e.gender," "),l.a.createElement("li",null,"Homeworld: ",this.state.homeworld," "),l.a.createElement("li",null,"Films: ",this.state.films.join(", ")," "),l.a.createElement("li",null,"Species: ",this.state.species," "),l.a.createElement("li",null,"Vehicles: ",this.state.vehicles.join(", ")," "),l.a.createElement("li",null,"Starships: ",this.state.starships.join(", ")," "))):l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:this.toggle,style:{float:"right"}},"Show Details"))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.data.map((function(e){return l.a.createElement("div",{className:"list-group"},l.a.createElement("li",{key:e.id,className:"list-group-item"},l.a.createElement("h5",null,e.name),l.a.createElement("hr",{style:{marginTop:"0",borderColor:"#AAAAAA",opacity:"25%"}}),l.a.createElement(k,{peopleDetails:e})))}))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=function(a){t.push(l.a.createElement("li",{key:a,className:"page-item"+(e.props.currentPage===a?" active":"")},l.a.createElement("button",{className:"page-link",onClick:function(){return e.props.pageButtonClick(a)}},a)))},n=1;n<=this.props.lastPage;n++)a(n);return l.a.createElement("div",null,l.a.createElement("ul",{className:"pagination",style:{justifyContent:"center",marginTop:"8px"}}," ",t," "))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).fetchData=function(e){a.setState({loading:!0}),g.a.get("https://swapi.co/api/people?page="+e).then((function(e){a.setState({loading:!1,data:e.data.results,lastPage:e.data.count/10+1})})).catch((function(e){console.log(e)}))},a.pageButtonClick=function(e){console.log("fetching "+e+" page"),a.fetchData(e),a.setState({currentPage:e})},a.state={currentPage:1,lastPage:1,data:[],loading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(1)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container mt-3"},l.a.createElement("img",{src:d.a,className:"center",alt:"Logo"}),l.a.createElement("h3",{style:{textAlign:"center",marginBottom:"0px"}},"Character Encyclopedia"),l.a.createElement(w,{currentPage:this.state.currentPage,lastPage:this.state.lastPage,pageButtonClick:this.pageButtonClick}),!0===this.state.loading?l.a.createElement("img",{src:b.a,className:"center",alt:"Loading..."}):l.a.createElement(j,{data:this.state.data}),l.a.createElement(w,{currentPage:this.state.currentPage,lastPage:this.state.lastPage,pageButtonClick:this.pageButtonClick}),l.a.createElement("p",{style:{textAlign:"center"}},"  Created by: Jun Jia ",l.a.createElement("img",{src:v.a,style:{width:"8%"},alt:":)"})," "))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.23e540c5.chunk.js.map