const MainTemplate = `
  <div>
  	<navbar></navbar>
  	<div class="center info-bar">Learning Vuejs Single Page Application</div>
  	<div class="banner-container">
  		<img src="image/banner.jpg" />
  	</div>
  	<div class="content container">
    	<router-view></router-view>
  	</div>
  </div>
`
export { MainTemplate }