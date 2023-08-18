// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLresearch extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex-col--center" data-content="research">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='research']");
		const getJSON = new Request(
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
		);

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<div class="h3-content_section" 
							id="${data.research.section}">
								${data.research.section}
						</div>	
						<h2 class="h2 mt025">${data.research.sectionTitle}</h2>
						${Object.values(data.research.textResearch)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
						<h3 class="h3 mt3 mb025">${data.research.ethnoSubTitle}</h3>
						${Object.values(data.research.ethnoText)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
					<figure class="folio-grid folio-grid--2col mt2">
						<span>
							<img 
								src="${data.research.thumb01Path}" 
								alt="${data.research.thumb01Alt}" />
						</span>
						<span>	
							<img 
								src="${data.research.thumb02Path}"
								alt="${data.research.thumb02Alt}" />
						</span>
						<span>
							<img 
								src="${data.research.thumb03Path}" 
								alt="${data.research.thumb03Alt}" />
						</span>
						<span>
							<img 
								src="${data.research.thumb04Path}" 
								alt="${data.research.thumb04Alt}" />
						</span>
						<figcaption class="folio-caption width-minor justify-self-center col-span-2">
							${data.research.thumbsCaption}
						</figcaption>
					</figure>
					<div class="folio-content__text mt1">
						<h3 class="h3 mt3 mb025">${data.research.compareSubTitle}</h3>
						${Object.values(data.research.compareText)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
						<figure class="dcl-brands">
							<span>
								<svg class="brand-amazon" viewBox="0 0 664 200">
									<path fill="#FF9900" d="M411.729 156.406C373.162 184.833 317.261 200 269.132 200C201.647 200 140.893 175.04 94.9299 133.526C91.3188 130.261 94.5544 125.813 98.8878 128.355C148.491 157.215 209.822 174.578 273.176 174.578C315.903 174.578 362.906 165.737 406.124 147.393C412.653 144.619 418.113 151.668 411.729 156.406Z" />
									<path fill="#FF9900" d="M427.763 138.062C422.851 131.764 395.175 135.086 382.753 136.559C378.969 137.022 378.391 133.728 381.8 131.359C403.842 115.846 440.012 120.324 444.229 125.524C448.447 130.753 443.132 167.009 422.418 184.313C419.24 186.971 416.207 185.555 417.622 182.031C422.274 170.417 432.703 144.388 427.763 138.062Z" />
									<path fill="#221F1F" d="M383.62 21.8402V6.76007C383.62 4.47783 385.353 2.9467 387.433 2.9467H454.947C457.114 2.9467 458.847 4.50672 458.847 6.76007V19.6736C458.818 21.8402 456.998 24.6714 453.763 29.1492L418.778 79.0986C431.778 78.7809 445.5 80.7164 457.287 87.361C459.945 88.8632 460.667 91.0588 460.87 93.2255V109.317C460.87 111.512 458.443 114.083 455.901 112.755C435.129 101.863 407.54 100.679 384.573 112.87C382.233 114.141 379.778 111.599 379.778 109.403V94.121C379.778 91.6655 379.806 87.4765 382.262 83.7498L422.794 25.6247H387.52C385.353 25.6247 383.62 24.0936 383.62 21.8402Z" />
									<path fill="#221F1F" d="M137.339 115.932H116.799C114.835 115.788 113.275 114.315 113.13 112.437V7.0201C113.13 4.91118 114.892 3.23559 117.088 3.23559H136.241C138.235 3.32221 139.824 4.85339 139.968 6.76007V20.5402H140.344C145.342 7.2223 154.731 1.01112 167.384 1.01112C180.24 1.01112 188.271 7.2223 194.049 20.5402C199.018 7.2223 210.313 1.01112 222.418 1.01112C231.027 1.01112 240.445 4.56449 246.194 12.5379C252.694 21.4069 251.365 34.2915 251.365 45.5872L251.336 112.119C251.336 114.228 249.574 115.932 247.378 115.932H226.867C224.816 115.788 223.169 114.141 223.169 112.119V56.2473C223.169 51.7984 223.574 40.7049 222.591 36.4871C221.06 29.4092 216.467 27.4159 210.516 27.4159C205.547 27.4159 200.347 30.7381 198.238 36.0537C196.129 41.3694 196.331 50.2672 196.331 56.2473V112.119C196.331 114.228 194.569 115.932 192.373 115.932H171.862C169.782 115.788 168.164 114.141 168.164 112.119L168.135 56.2473C168.135 44.4894 170.071 27.1847 155.482 27.1847C140.719 27.1847 141.297 44.056 141.297 56.2473V112.119C141.297 114.228 139.535 115.932 137.339 115.932Z" />
									<path fill="#221F1F" d="M516.972 1.01112C547.451 1.01112 563.946 27.1847 563.946 60.4651C563.946 92.6188 545.717 118.128 516.972 118.128C487.043 118.128 470.75 91.9544 470.75 59.3384C470.75 26.5203 487.245 1.01112 516.972 1.01112ZM517.146 22.5336C502.008 22.5336 501.054 43.1605 501.054 56.0162C501.054 68.9008 500.852 96.4033 516.972 96.4033C532.89 96.4033 533.641 74.2164 533.641 60.6962C533.641 51.7984 533.266 41.1671 530.579 32.7315C528.268 25.3936 523.675 22.5336 517.146 22.5336Z" />
									<path fill="#221F1F" d="M603.467 115.932H583.013C580.962 115.788 579.315 114.141 579.315 112.119L579.286 6.67341C579.46 4.73783 581.164 3.23559 583.244 3.23559H602.282C604.073 3.32221 605.547 4.53561 605.951 6.1823V22.3025H606.327C612.076 7.88676 620.136 1.01112 634.32 1.01112C643.536 1.01112 652.521 4.33339 658.298 13.4335C663.672 21.8691 663.672 36.0537 663.672 46.2516V112.61C663.441 114.459 661.736 115.932 659.714 115.932H639.116C637.238 115.788 635.678 114.401 635.476 112.61V55.3517C635.476 43.8249 636.805 26.9536 622.62 26.9536C617.622 26.9536 613.029 30.3048 610.747 35.3893C607.858 41.8316 607.482 48.245 607.482 55.3517V112.119C607.453 114.228 605.662 115.932 603.467 115.932Z" />
									<path fill="#221F1F" d="M329.799 65.5785V61.1296C314.95 61.1296 299.263 64.3074 299.263 81.8142C299.263 90.6832 303.857 96.6922 311.743 96.6922C317.521 96.6922 322.692 93.1388 325.957 87.361C330.001 80.2542 329.799 73.5808 329.799 65.5785ZM350.513 115.643C349.155 116.857 347.19 116.944 345.659 116.135C338.842 110.472 337.628 107.843 333.873 102.441C322.606 113.939 314.632 117.377 300.014 117.377C282.739 117.377 269.276 106.717 269.276 85.3676C269.276 68.6985 278.319 57.3451 291.174 51.7984C302.326 46.8872 317.897 46.0205 329.799 44.6627V42.0049C329.799 37.1226 330.175 31.3448 327.315 27.127C324.801 23.3425 320.006 21.7825 315.788 21.7825C307.959 21.7825 300.968 25.7981 299.263 34.1182C298.917 35.9671 297.559 37.7871 295.71 37.8738L275.776 35.7359C274.101 35.3604 272.252 34.0026 272.714 31.4315C277.307 7.2801 299.119 0 318.648 0C328.644 0 341.702 2.65781 349.588 10.2268C359.584 19.558 358.631 32.0092 358.631 45.5583V77.5675C358.631 87.1877 362.617 91.4055 366.373 96.6055C367.702 98.4544 367.991 100.679 366.315 102.066C362.126 105.561 354.673 112.061 350.57 115.701L350.513 115.643Z" />
									<path fill="#221F1F" d="M60.5229 65.5785V61.1296C45.6738 61.1296 29.987 64.3074 29.987 81.8142C29.987 90.6832 34.5804 96.6922 42.4671 96.6922C48.245 96.6922 53.4161 93.1388 56.6806 87.361C60.7251 80.2542 60.5229 73.5808 60.5229 65.5785ZM81.2365 115.643C79.8787 116.857 77.9142 116.944 76.3831 116.135C69.5652 110.472 68.3519 107.843 64.5963 102.441C53.3295 113.939 45.3561 117.377 30.7381 117.377C13.4624 117.377 0 106.717 0 85.3676C0 68.6985 9.04232 57.3451 21.898 51.7984C33.0492 46.8872 48.6205 46.0205 60.5229 44.6627V42.0049C60.5229 37.1226 60.8985 31.3448 58.0384 27.127C55.525 23.3425 50.7294 21.7825 46.5116 21.7825C38.6827 21.7825 31.6915 25.7981 29.987 34.1182C29.6403 35.9671 28.2825 37.7871 26.4336 37.8738L6.50007 35.7359C4.82449 35.3604 2.97558 34.0026 3.43781 31.4315C8.0312 7.2801 29.8425 0 49.3717 0C59.3673 0 72.4252 2.65781 80.312 10.2268C90.3077 19.558 89.3543 32.0092 89.3543 45.5583V77.5675C89.3543 87.1877 93.341 91.4055 97.0966 96.6055C98.4255 98.4544 98.7144 100.679 97.0388 102.066C92.8499 105.561 85.3965 112.061 81.2942 115.701L81.2365 115.643Z" />
								</svg>
							</span>
							<span>
								<svg class="brand-instagram" viewBox="0 0 201 200">
									<path fill="black" d="M100 18.0184C126.701 18.0184 129.864 18.1204 140.41 18.6015C150.16 19.0465 155.454 20.6752 158.978 22.0447C163.322 23.6477 167.251 26.2039 170.476 29.5252C173.798 32.7508 176.354 36.6798 177.957 41.0233C179.326 44.547 180.955 49.8419 181.4 59.5918C181.881 70.1368 181.983 73.2993 181.983 100.001C181.983 126.703 181.881 129.865 181.4 140.411C180.955 150.161 179.326 155.455 177.957 158.98C176.293 163.292 173.745 167.209 170.476 170.478C167.208 173.746 163.291 176.294 158.978 177.958C155.455 179.328 150.16 180.957 140.41 181.401C129.867 181.882 126.704 181.984 100 181.984C73.2961 181.984 70.1348 181.882 59.5906 181.401C49.8407 180.956 44.5462 179.327 41.0221 177.958C36.6786 176.355 32.7496 173.799 29.524 170.478C26.2027 167.252 23.6466 163.323 22.0435 158.98C20.674 155.456 19.0449 150.161 18.6003 140.411C18.1192 129.866 18.0172 126.703 18.0172 100.001C18.0172 73.2993 18.1192 70.1376 18.6003 59.5918C19.0453 49.8419 20.674 44.5474 22.0435 41.0233C23.6467 36.6796 26.2032 32.7505 29.5248 29.5248C32.7504 26.2035 36.6794 23.6474 41.0229 22.0443C44.5466 20.6748 49.8415 19.0457 59.5914 18.6011C70.1364 18.12 73.2989 18.018 100.001 18.018M100.001 0C72.8424 0 69.4358 0.115116 58.7713 0.601777C48.1271 1.08764 40.8581 2.77786 34.4974 5.25007C27.8249 7.76103 21.7804 11.6973 16.7855 16.7843C11.6973 21.7789 7.75998 27.8234 5.24808 34.4962C2.77786 40.8573 1.08764 48.1263 0.603762 58.7705C0.115116 69.435 0 72.8416 0 100C0 127.159 0.115116 130.565 0.603762 141.23C1.08963 151.874 2.77984 159.143 5.25205 165.504C7.76303 172.176 11.6993 178.221 16.7862 183.216C21.7812 188.303 27.8257 192.239 34.4982 194.75C40.8593 197.222 48.1283 198.912 58.7721 199.398C69.4382 199.885 72.8436 200 100.002 200C127.16 200 130.567 199.885 141.231 199.398C151.876 198.912 159.145 197.222 165.505 194.75C172.148 192.181 178.181 188.252 183.217 183.216C188.254 178.18 192.182 172.147 194.752 165.504C197.224 159.143 198.914 151.874 199.4 141.23C199.886 130.564 200.002 127.158 200.002 100C200.002 72.842 199.886 69.435 199.4 58.7705C198.914 48.1263 197.224 40.8573 194.752 34.4966C192.241 27.8241 188.304 21.7796 183.217 16.7847C178.222 11.6966 172.177 7.75958 165.504 5.24808C159.143 2.77786 151.874 1.08764 141.23 0.603762C130.565 0.115116 127.159 0 100 0H100.001Z" />
        							<path fill="black" d="M100 48.6487C89.8438 48.6487 79.9155 51.6604 71.4708 57.303C63.0261 62.9456 56.4443 70.9656 52.5576 80.3488C48.6709 89.7321 47.654 100.057 49.6354 110.018C51.6168 119.98 56.5076 129.13 63.6892 136.311C70.8708 143.493 80.0208 148.384 89.982 150.365C99.9432 152.346 110.268 151.329 119.652 147.443C129.035 143.556 137.055 136.974 142.697 128.53C148.34 120.085 151.352 110.157 151.352 100C151.352 86.3809 145.941 73.3195 136.311 63.6892C126.681 54.0589 113.619 48.6487 100 48.6487ZM100 133.333C93.4075 133.333 86.963 131.378 81.4814 127.715C75.9999 124.053 71.7275 118.847 69.2047 112.756C66.6818 106.665 66.0218 99.963 67.308 93.497C68.5942 87.031 71.7689 81.0917 76.4307 76.43C81.0924 71.7683 87.0318 68.5937 93.4978 67.3075C99.9638 66.0214 106.666 66.6815 112.757 69.2044C118.848 71.7274 124.053 75.9997 127.716 81.4813C131.379 86.9629 133.334 93.4075 133.334 100C133.334 108.841 129.822 117.319 123.57 123.57C117.319 129.821 108.841 133.333 100 133.333Z" />
        							<path fill="black" d="M153.381 58.6197C160.008 58.6197 165.38 53.2472 165.38 46.6199C165.38 39.9926 160.008 34.62 153.381 34.62C146.753 34.62 141.381 39.9926 141.381 46.6199C141.381 53.2472 146.753 58.6197 153.381 58.6197Z" />
								</svg>
							</span>
							<span>
								<svg class="brand-facebook" viewBox="0 0 200 200">
									<path fill="#1977F3" d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" />
        							<path fill="white" d="M138.926 128.913L143.355 100H115.624V81.2403C115.624 73.3371 119.491 65.6167 131.922 65.6167H144.537V41.0069C144.537 41.0069 133.09 39.0522 122.149 39.0522C99.3109 39.0522 84.3763 52.8899 84.3763 77.9637V100H58.979V128.913H84.3763V198.791C89.467 199.592 94.6843 200 100 200C105.316 200 110.533 199.578 115.624 198.791V128.913H138.926Z" />
								</svg>
							</span>
							<span>
								<svg class="brand-tiktok" viewBox="0 0 129 146">
        							<path fill="#FF004F" d="M95.551 52.591C104.958 59.312 116.482 63.2665 128.928 63.2665V39.328C126.573 39.3285 124.223 39.083 121.919 38.595V57.438C109.473 57.438 97.951 53.4835 88.5415 46.763V95.6145C88.5415 120.053 68.7205 139.862 44.2715 139.862C35.149 139.862 26.67 137.106 19.6265 132.378C27.6655 140.594 38.8765 145.69 51.2795 145.69C75.73 145.69 95.552 125.88 95.552 101.441V52.591H95.551ZM104.198 28.44C99.3905 23.1905 96.234 16.4065 95.551 8.9065V5.8275H88.9085C90.5805 15.36 96.2835 23.504 104.198 28.44ZM35.0905 113.625C32.4045 110.105 30.953 105.799 30.9595 101.371C30.9595 90.1945 40.0255 81.132 51.2105 81.132C53.295 81.1315 55.367 81.4505 57.3535 82.0805V57.607C55.032 57.289 52.689 57.154 50.347 57.2035V76.2525C48.359 75.6225 46.286 75.3025 44.201 75.3045C33.016 75.3045 23.9505 84.366 23.9505 95.5445C23.9505 103.449 28.482 110.292 35.0905 113.625Z" />
        							<path fill="black" d="M88.5415 46.763C97.951 53.4835 109.473 57.438 121.919 57.438V38.595C114.972 37.116 108.822 33.487 104.198 28.44C96.2835 23.504 90.5805 15.36 88.9085 5.8275H71.4605V101.44C71.421 112.587 62.3705 121.613 51.2095 121.613C44.6325 121.613 38.7895 118.479 35.089 113.625C28.481 110.292 23.9495 103.448 23.9495 95.545C23.9495 84.3675 33.015 75.305 44.2 75.305C46.343 75.305 48.4085 75.6385 50.346 76.253V57.204C26.3265 57.7 7.009 77.316 7.009 101.441C7.009 113.484 11.819 124.401 19.6265 132.378C26.67 137.106 35.149 139.862 44.2715 139.862C68.7205 139.862 88.5415 120.053 88.5415 95.6145V46.763Z" />
        							<path fill="#00F2EA" d="M121.919 38.595L121.919 33.4995C115.654 33.509 109.513 31.756 104.198 28.44C108.903 33.5885 115.098 37.1385 121.919 38.595ZM88.9085 5.8275C88.749 4.9165 88.6265 3.9995 88.5415 3.079V0H64.4505V95.614C64.412 106.759 55.362 115.785 44.2 115.785C40.923 115.785 37.829 115.007 35.089 113.625C38.7895 118.479 44.6325 121.613 51.2095 121.613C62.3695 121.613 71.4215 112.587 71.4605 101.44V5.8275H88.9085ZM50.347 57.2035V51.78C48.334 51.505 46.3045 51.367 44.2725 51.368C19.821 51.3675 0 71.178 0 95.614C0 110.934 7.79 124.436 19.6275 132.378C11.82 124.401 7.009 113.484 7.009 101.441C7.009 77.3165 26.3265 57.6995 50.347 57.2035Z" />
								</svg>
							</span>
							<span>
								<svg class="brand-youtube" viewBox="0 0 164 115">
       	 							<path fill="#FF0000" d="M159.865 17.8497C157.984 10.8201 152.459 5.29593 145.429 3.41421C132.701 0.000245094 81.6393 0.000244141 81.6393 0.000244141C81.6393 0.000244141 30.5779 0.000245094 17.8494 3.41421C10.8199 5.29593 5.29569 10.8201 3.41397 17.8497C9.53674e-07 30.5781 0 57.1506 0 57.1506C0 57.1506 9.53674e-07 83.7233 3.41397 96.4518C5.29569 103.481 10.8199 109.005 17.8494 110.887C30.5779 114.301 81.6393 114.301 81.6393 114.301C81.6393 114.301 132.701 114.301 145.429 110.887C152.459 109.005 157.984 103.481 159.865 96.4518C163.279 83.7233 163.279 57.1506 163.279 57.1506C163.279 57.1506 163.265 30.5781 159.865 17.8497Z" />
        							<path fill="white" d="M65.296 81.6419L107.715 57.1529L65.296 32.6636V81.6419Z"/>
								</svg>
							</span>
							<span>
								<svg class="brand-ebay" viewBox="0 0 500 200">
        							<path fill="#E53238" d="M64.544 43.6354C29.3375 43.6354 0 58.5717 0 103.634C0 139.333 19.7274 161.815 65.4531 161.815C119.274 161.815 122.724 126.361 122.724 126.361H96.6455C96.6455 126.361 91.054 145.451 63.8622 145.451C41.7152 145.451 25.7862 130.49 25.7862 109.52H125.452V96.3615C125.452 75.6156 112.282 43.6354 64.544 43.6354ZM63.6349 60.4532C84.7166 60.4532 99.0887 73.3682 99.0887 92.7252H26.363C26.363 72.1754 45.1223 60.4532 63.6349 60.4532Z" />
        							<path fill="#0064D2" d="M125.433 0V139.184C125.433 147.085 124.869 158.178 124.869 158.178H149.743C149.743 158.178 150.636 150.211 150.636 142.93C150.636 142.93 162.925 162.155 196.341 162.155C231.529 162.155 255.43 137.726 255.43 102.725C255.43 70.1643 233.476 43.9763 196.398 43.9763C161.676 43.9763 150.887 62.7259 150.887 62.7259V0H125.433ZM189.977 61.1918C213.872 61.1918 229.067 78.9262 229.067 102.725C229.067 128.245 211.518 144.94 190.148 144.94C164.644 144.94 150.887 125.027 150.887 102.952C150.887 82.3828 163.232 61.1918 189.977 61.1918Z"  />
        							<path fill="#F5AF02" d="M317.247 43.6354C264.282 43.6354 260.885 72.6367 260.885 77.271H287.248C287.248 77.271 288.63 60.3395 315.429 60.3395C332.843 60.3395 346.337 68.3103 346.337 83.6345V89.0889H315.429C274.396 89.0889 252.703 101.093 252.703 125.452C252.703 149.424 272.746 162.468 299.833 162.468C336.747 162.468 348.638 142.071 348.638 142.071C348.638 150.184 349.264 158.178 349.264 158.178H372.7C372.7 158.178 371.791 148.269 371.791 141.929V87.1287C371.791 51.1972 342.809 43.6354 317.247 43.6354ZM346.337 105.452V112.725C346.337 122.21 340.484 145.792 306.026 145.792C287.156 145.792 279.066 136.375 279.066 125.452C279.066 105.58 306.311 105.452 346.337 105.452Z" />
        							<path fill="#86B817" d="M357.595 48.1853H387.254L429.818 133.459L472.284 48.1853H499.15L421.798 200H393.617L415.938 157.68L357.595 48.1853Z" />
								</svg>
							</span>
						</figure>
					</div>
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-research", DCLresearch);

// https://www.sitepoint.com/quick-tip-the-right-way-to-use-figure-and-figcaption-elements/
