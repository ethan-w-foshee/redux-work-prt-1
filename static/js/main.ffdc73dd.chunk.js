(window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops=window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops||[]).push([[0],{104:function(e,a,l){},107:function(e,a,l){"use strict";l.r(a);var n=l(0),r=l.n(n),t=l(68),i=(l(94),l(132)),o=l(134),c=l(135),s=l(130),m=l(73),p=l.n(m),_=l(34),d=function(){return r.a.createElement(i.a,{position:"relative"},r.a.createElement(o.a,null,r.a.createElement(c.a,{color:"inherit"},r.a.createElement(p.a,null)),r.a.createElement(s.a,{variant:"h6",style:{flexGrow:"1"}},"FakeCars.com"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(_.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(_.b,{to:"/about"},"About")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(_.b,{to:"/dashboard"},"Dashboard")))))},u=(l(104),l(21)),h=l(136),g=l(137),w=l(138),b=l(139),A=l(37),y=function(e){return r.a.createElement("div",{className:"card-container"},A.map(function(e,a){return r.a.createElement(h.a,{key:a,className:"card"},r.a.createElement(g.a,{className:"text-gray"},r.a.createElement("span",null,e.Name.toUpperCase()),r.a.createElement("ul",null,r.a.createElement("li",null,"Miles_per_Gallon: ",e.Miles_per_Gallon),r.a.createElement("li",null,"Cylinders: ",e.Cylinders),r.a.createElement("li",null,"Displacement: ",e.Displacement),r.a.createElement("li",null,"Horsepower: ",e.Horsepower))),r.a.createElement(w.a,null),r.a.createElement(b.a,{style:{color:"mediumblue"}},r.a.createElement(_.b,{to:"/car/".concat(e.id)},"See More Details")))}))},E=l(75),N=l(76),C=l(80),O=l(77),W=l(81),M=l(128),k=l(127),D=function(e){function a(){var e,l;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return(l=Object(C.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(r)))).state={checked:!0,heading:"About FakeCars.com"},l.toggleSwitch=function(){var e=!l.state.checked;return e?l.setState({heading:"About FakeCars.com",checked:e}):l.setState({heading:"About Cars.com",checked:e})},l}return Object(W.a)(a,e),Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-gray"},r.a.createElement(M.a,{maxWidth:"sm"},r.a.createElement("h1",{style:{textAlign:"center"}},this.state.heading),r.a.createElement("p",null,'FakeCars.com was created to solve a specific problem. That problem is quick and reliable access to details about many different models, all in one place. We had to use the word "Fake" in our name so that we don\'t get sued by the real\xa0',r.a.createElement("a",{style:{color:"mediumblue"},href:"https://www.cars.com",target:"_blank"},"Cars.com"),"\xa0but we won't worry too much about that. We've provided a link to the actual cars.com above and we did not receive any money from them to do so. Although, there's an argument that maybe we should since we are a top-notch coding bootcamp and anyone would want to be associated with us :)"),r.a.createElement(w.a,null),r.a.createElement("p",null,'If you\'d like you can toggle the word "Fake" because why not? We have the potential to be the real cars.com if we wanted to be.'),r.a.createElement(k.a,{checked:this.state.checked,color:"primary",onChange:this.toggleSwitch})))}}]),a}(n.Component),G=l(133),H=l(131),S=function(e){var a=e.match.params.id,l=A.find(function(e){return e.id==a});return r.a.createElement(M.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(G.a,{className:"car-paper"},r.a.createElement("h2",null,l.Name),Object.keys(l).map(function(e,a){return r.a.createElement(H.a,{label:"".concat(e,": ").concat(l[e])})})))},f=l(140),Y=l(141),v=l(142),U=l(143),x=l(144),j=function(e){return r.a.createElement(M.a,{maxWidth:"lg",className:"car-container"},r.a.createElement("h4",null,"Welcome, ","NAME"),r.a.createElement(f.a,null,r.a.createElement(Y.a,null,r.a.createElement(v.a,null,r.a.createElement(U.a,null,"Id"),r.a.createElement(U.a,null,"Make/Model"),r.a.createElement(U.a,null,"MPG"),r.a.createElement(U.a,null,"Cylinders"),r.a.createElement(U.a,null,"Displacement"),r.a.createElement(U.a,null,"Horsepower"),r.a.createElement(U.a,null,"Weight"),r.a.createElement(U.a,null,"Acceleration"),r.a.createElement(U.a,null,"Year"),r.a.createElement(U.a,null,"Origin"))),r.a.createElement(x.a,null,A.map(function(e){return r.a.createElement(v.a,{key:e.id},r.a.createElement(U.a,{component:"th",scope:"row"},e.id),r.a.createElement(U.a,null,e.Name),r.a.createElement(U.a,null,e.Miles_per_Gallon),r.a.createElement(U.a,null,e.Cylinders),r.a.createElement(U.a,null,e.Displacement),r.a.createElement(U.a,null,e.Horsepower),r.a.createElement(U.a,null,e.Weight_in_lbs),r.a.createElement(U.a,null,e.Acceleration),r.a.createElement(U.a,null,e.Year),r.a.createElement(U.a,null,e.Origin))}))))},F=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:y}),r.a.createElement(u.a,{path:"/about",component:D}),r.a.createElement(u.a,{path:"/car/:id",component:S}),r.a.createElement(u.a,{path:"/dashboard",component:j}))},I=l(79),J=l(38),B=Object(J.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},cars:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e}}),q=Object(J.c)(B,{cars:[{id:1,Name:"chevrolet chevelle malibu",Miles_per_Gallon:18,Cylinders:8,Displacement:307,Horsepower:130,Weight_in_lbs:3504,Acceleration:12,Year:"1970-01-01",Origin:"USA"},{id:2,Name:"buick skylark 320",Miles_per_Gallon:15,Cylinders:8,Displacement:350,Horsepower:165,Weight_in_lbs:3693,Acceleration:11.5,Year:"1970-01-01",Origin:"USA"},{id:3,Name:"plymouth satellite",Miles_per_Gallon:18,Cylinders:8,Displacement:318,Horsepower:150,Weight_in_lbs:3436,Acceleration:11,Year:"1970-01-01",Origin:"USA"},{id:4,Name:"amc rebel sst",Miles_per_Gallon:16,Cylinders:8,Displacement:304,Horsepower:150,Weight_in_lbs:3433,Acceleration:12,Year:"1970-01-01",Origin:"USA"},{id:5,Name:"ford torino",Miles_per_Gallon:17,Cylinders:8,Displacement:302,Horsepower:140,Weight_in_lbs:3449,Acceleration:10.5,Year:"1970-01-01",Origin:"USA"},{id:6,Name:"ford galaxie 500",Miles_per_Gallon:15,Cylinders:8,Displacement:429,Horsepower:198,Weight_in_lbs:4341,Acceleration:10,Year:"1970-01-01",Origin:"USA"},{id:7,Name:"chevrolet impala",Miles_per_Gallon:14,Cylinders:8,Displacement:454,Horsepower:220,Weight_in_lbs:4354,Acceleration:9,Year:"1970-01-01",Origin:"USA"},{id:8,Name:"plymouth fury iii",Miles_per_Gallon:14,Cylinders:8,Displacement:440,Horsepower:215,Weight_in_lbs:4312,Acceleration:8.5,Year:"1970-01-01",Origin:"USA"},{id:9,Name:"pontiac catalina",Miles_per_Gallon:14,Cylinders:8,Displacement:455,Horsepower:225,Weight_in_lbs:4425,Acceleration:10,Year:"1970-01-01",Origin:"USA"},{id:10,Name:"amc ambassador dpl",Miles_per_Gallon:15,Cylinders:8,Displacement:390,Horsepower:190,Weight_in_lbs:3850,Acceleration:8.5,Year:"1970-01-01",Origin:"USA"},{id:11,Name:"citroen ds-21 pallas",Miles_per_Gallon:"unknown",Cylinders:4,Displacement:133,Horsepower:115,Weight_in_lbs:3090,Acceleration:17.5,Year:"1970-01-01",Origin:"Europe"},{id:12,Name:"chevrolet chevelle concours (sw)",Miles_per_Gallon:"unknown",Cylinders:8,Displacement:350,Horsepower:165,Weight_in_lbs:4142,Acceleration:11.5,Year:"1970-01-01",Origin:"USA"},{id:13,Name:"ford torino (sw)",Miles_per_Gallon:"unknown",Cylinders:8,Displacement:351,Horsepower:153,Weight_in_lbs:4034,Acceleration:11,Year:"1970-01-01",Origin:"USA"},{id:14,Name:"plymouth satellite (sw)",Miles_per_Gallon:"unknown",Cylinders:8,Displacement:383,Horsepower:175,Weight_in_lbs:4166,Acceleration:10.5,Year:"1970-01-01",Origin:"USA"},{id:15,Name:"amc rebel sst (sw)",Miles_per_Gallon:"unknown",Cylinders:8,Displacement:360,Horsepower:175,Weight_in_lbs:3850,Acceleration:11,Year:"1970-01-01",Origin:"USA"},{id:16,Name:"dodge challenger se",Miles_per_Gallon:15,Cylinders:8,Displacement:383,Horsepower:170,Weight_in_lbs:3563,Acceleration:10,Year:"1970-01-01",Origin:"USA"},{id:17,Name:"plymouth 'cuda 340",Miles_per_Gallon:14,Cylinders:8,Displacement:340,Horsepower:160,Weight_in_lbs:3609,Acceleration:8,Year:"1970-01-01",Origin:"USA"},{id:18,Name:"ford mustang boss 302",Miles_per_Gallon:"unknown",Cylinders:8,Displacement:302,Horsepower:140,Weight_in_lbs:3353,Acceleration:8,Year:"1970-01-01",Origin:"USA"},{id:19,Name:"chevrolet monte carlo",Miles_per_Gallon:15,Cylinders:8,Displacement:400,Horsepower:150,Weight_in_lbs:3761,Acceleration:9.5,Year:"1970-01-01",Origin:"USA"},{id:20,Name:"buick estate wagon (sw)",Miles_per_Gallon:14,Cylinders:8,Displacement:455,Horsepower:225,Weight_in_lbs:3086,Acceleration:10,Year:"1970-01-01",Origin:"USA"}]});var P=function(){return r.a.createElement(I.a,{store:q},r.a.createElement(_.a,null,r.a.createElement(d,null),r.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(t.createRoot)(document.getElementById("root")).render(r.a.createElement(P,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e){e.exports=JSON.parse('[{"id":1,"Name":"chevrolet chevelle malibu","Miles_per_Gallon":18,"Cylinders":8,"Displacement":307,"Horsepower":130,"Weight_in_lbs":3504,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"},{"id":2,"Name":"buick skylark 320","Miles_per_Gallon":15,"Cylinders":8,"Displacement":350,"Horsepower":165,"Weight_in_lbs":3693,"Acceleration":11.5,"Year":"1970-01-01","Origin":"USA"},{"id":3,"Name":"plymouth satellite","Miles_per_Gallon":18,"Cylinders":8,"Displacement":318,"Horsepower":150,"Weight_in_lbs":3436,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":4,"Name":"amc rebel sst","Miles_per_Gallon":16,"Cylinders":8,"Displacement":304,"Horsepower":150,"Weight_in_lbs":3433,"Acceleration":12,"Year":"1970-01-01","Origin":"USA"},{"id":5,"Name":"ford torino","Miles_per_Gallon":17,"Cylinders":8,"Displacement":302,"Horsepower":140,"Weight_in_lbs":3449,"Acceleration":10.5,"Year":"1970-01-01","Origin":"USA"},{"id":6,"Name":"ford galaxie 500","Miles_per_Gallon":15,"Cylinders":8,"Displacement":429,"Horsepower":198,"Weight_in_lbs":4341,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":7,"Name":"chevrolet impala","Miles_per_Gallon":14,"Cylinders":8,"Displacement":454,"Horsepower":220,"Weight_in_lbs":4354,"Acceleration":9,"Year":"1970-01-01","Origin":"USA"},{"id":8,"Name":"plymouth fury iii","Miles_per_Gallon":14,"Cylinders":8,"Displacement":440,"Horsepower":215,"Weight_in_lbs":4312,"Acceleration":8.5,"Year":"1970-01-01","Origin":"USA"},{"id":9,"Name":"pontiac catalina","Miles_per_Gallon":14,"Cylinders":8,"Displacement":455,"Horsepower":225,"Weight_in_lbs":4425,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":10,"Name":"amc ambassador dpl","Miles_per_Gallon":15,"Cylinders":8,"Displacement":390,"Horsepower":190,"Weight_in_lbs":3850,"Acceleration":8.5,"Year":"1970-01-01","Origin":"USA"},{"id":11,"Name":"citroen ds-21 pallas","Miles_per_Gallon":"unknown","Cylinders":4,"Displacement":133,"Horsepower":115,"Weight_in_lbs":3090,"Acceleration":17.5,"Year":"1970-01-01","Origin":"Europe"},{"id":12,"Name":"chevrolet chevelle concours (sw)","Miles_per_Gallon":"unknown","Cylinders":8,"Displacement":350,"Horsepower":165,"Weight_in_lbs":4142,"Acceleration":11.5,"Year":"1970-01-01","Origin":"USA"},{"id":13,"Name":"ford torino (sw)","Miles_per_Gallon":"unknown","Cylinders":8,"Displacement":351,"Horsepower":153,"Weight_in_lbs":4034,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":14,"Name":"plymouth satellite (sw)","Miles_per_Gallon":"unknown","Cylinders":8,"Displacement":383,"Horsepower":175,"Weight_in_lbs":4166,"Acceleration":10.5,"Year":"1970-01-01","Origin":"USA"},{"id":15,"Name":"amc rebel sst (sw)","Miles_per_Gallon":"unknown","Cylinders":8,"Displacement":360,"Horsepower":175,"Weight_in_lbs":3850,"Acceleration":11,"Year":"1970-01-01","Origin":"USA"},{"id":16,"Name":"dodge challenger se","Miles_per_Gallon":15,"Cylinders":8,"Displacement":383,"Horsepower":170,"Weight_in_lbs":3563,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"},{"id":17,"Name":"plymouth \'cuda 340","Miles_per_Gallon":14,"Cylinders":8,"Displacement":340,"Horsepower":160,"Weight_in_lbs":3609,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},{"id":18,"Name":"ford mustang boss 302","Miles_per_Gallon":"unknown","Cylinders":8,"Displacement":302,"Horsepower":140,"Weight_in_lbs":3353,"Acceleration":8,"Year":"1970-01-01","Origin":"USA"},{"id":19,"Name":"chevrolet monte carlo","Miles_per_Gallon":15,"Cylinders":8,"Displacement":400,"Horsepower":150,"Weight_in_lbs":3761,"Acceleration":9.5,"Year":"1970-01-01","Origin":"USA"},{"id":20,"Name":"buick estate wagon (sw)","Miles_per_Gallon":14,"Cylinders":8,"Displacement":455,"Horsepower":225,"Weight_in_lbs":3086,"Acceleration":10,"Year":"1970-01-01","Origin":"USA"}]')},86:function(e,a,l){e.exports=l(107)},94:function(e,a,l){}},[[86,1,2]]]);
//# sourceMappingURL=main.ffdc73dd.chunk.js.map