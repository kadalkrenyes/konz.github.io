const configAds = [
	{
		"src":"https://readydolphinpoverty.com/f5/8d/92/f58d9219ab390554e2e7fc8aeaf82185.js",
		"name-element":"script",
		"target-selector":"body"
	},
	{
		"src":"https://readydolphinpoverty.com/4a/00/1e/4a001e886418d57f6154e262bac9b581.js",
		"name-element":"script",
		"target-selector":"body"
	}
];
const initAds = async(config)=>{
	for(let data of config){
		const elInject = document.createElement(data["name-element"]);
		elInject.setAttribute("src",data.src);
		document.querySelector(data["target-selector"]).append(elInject);
	};
};
initAds(configAds);