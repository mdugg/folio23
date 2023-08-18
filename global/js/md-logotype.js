export default class MDlogoType extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<style>
				:host {
					display: flex;
				}
                .link-home {
                    display:flex;
                }
                .link-home:hover .md-logotype {
                    fill: var(--folio-turq-light);
                }
                .md-logotype {
                    width: 10rem;
                    fill: var(--folio-turq);
                    transition: all .3s ease-out;
                }
			</style>
            <a href="/" class="link-home">
                <svg viewBox="0 0 213 92" class="md-logotype">
                    <path
                        d="M0.559998 90V88.72L2.352 88.208C3.97333 87.7813 5.08266 87.056 5.68 86.032C6.36266 85.008 6.74666 83.6427 6.832 81.936V41.872C6.832 39.9947 6.53333 38.6293 5.936 37.776C5.33866 36.8373 4.18666 36.1973 2.48 35.856L0.559998 35.344V34.064L22.448 26.64L23.728 27.92L24.752 36.624C27.568 33.808 30.768 31.4187 34.352 29.456C38.0213 27.4933 41.8187 26.512 45.744 26.512C49.84 26.512 53.1253 27.3653 55.6 29.072C58.0747 30.6933 59.952 33.2533 61.232 36.752C64.56 33.5947 68.144 31.12 71.984 29.328C75.9093 27.4507 79.7067 26.512 83.376 26.512C89.4347 26.512 93.872 27.9627 96.688 30.864C99.5893 33.7653 101.04 38.3307 101.04 44.56V82.064C101.04 85.392 102.576 87.4827 105.648 88.336L107.056 88.72V90H77.488V88.72L78.768 88.336C80.3893 87.824 81.4987 87.056 82.096 86.032C82.7787 85.008 83.12 83.6427 83.12 81.936V42.768C83.12 39.184 82.48 36.752 81.2 35.472C79.92 34.1067 77.872 33.424 75.056 33.424C72.8373 33.424 70.6613 33.936 68.528 34.96C66.48 35.8987 64.304 37.3493 62 39.312C62.4267 40.6773 62.6827 42.1707 62.768 43.792C62.9387 45.4133 63.024 47.12 63.024 48.912V82.064C63.1093 85.392 64.6453 87.4827 67.632 88.336L68.784 88.72V90H39.088V88.72L40.88 88.208C42.5013 87.696 43.6107 86.9707 44.208 86.032C44.8907 85.008 45.232 83.6427 45.232 81.936V42.896C45.232 39.4827 44.592 37.0507 43.312 35.6C42.1173 34.1493 40.0267 33.424 37.04 33.424C35.0773 33.424 33.1147 33.936 31.152 34.96C29.1893 35.8987 27.1413 37.3067 25.008 39.184V82.064C25.008 85.392 26.5013 87.4827 29.488 88.336L30.64 88.72V90H0.559998Z"
                    />
                    <path
                        d="M139.196 91.92C134.161 91.92 129.639 90.8107 125.628 88.592C121.617 86.288 118.417 82.7893 116.028 78.096C113.724 73.3173 112.572 67.216 112.572 59.792C112.572 52.2827 113.895 46.096 116.54 41.232C119.185 36.2827 122.684 32.6133 127.036 30.224C131.388 27.7493 136.124 26.512 141.244 26.512C144.231 26.512 147.089 26.8107 149.82 27.408C152.551 28.0053 154.983 28.9013 157.116 30.096V13.456C157.116 11.664 156.817 10.3413 156.22 9.48801C155.708 8.63467 154.556 8.03734 152.764 7.69601L150.332 7.18401V5.90401L173.628 0.272003L175.036 1.424L174.524 19.344V81.936C174.524 83.6427 174.823 85.0507 175.42 86.16C176.017 87.184 177.127 87.9093 178.748 88.336L179.9 88.72V90L158.012 91.408L156.86 86.8C154.556 88.336 151.911 89.5733 148.924 90.512C146.023 91.4507 142.78 91.92 139.196 91.92ZM146.62 87.184C150.204 87.184 153.489 86.1173 156.476 83.984V33.168C153.319 31.12 150.076 30.096 146.748 30.096C142.652 30.096 139.153 32.4853 136.252 37.264C133.351 41.9573 131.9 49.3813 131.9 59.536C131.9 69.6907 133.265 76.8587 135.996 81.04C138.727 85.136 142.268 87.184 146.62 87.184Z"
                    />
                    <path
                        d="M201.45 91.92C198.378 91.92 195.775 90.8533 193.642 88.72C191.509 86.5867 190.442 84.0267 190.442 81.04C190.442 78.0533 191.509 75.4507 193.642 73.232C195.775 71.0133 198.378 69.904 201.45 69.904C204.522 69.904 207.125 71.0133 209.258 73.232C211.391 75.4507 212.458 78.0533 212.458 81.04C212.458 84.0267 211.391 86.5867 209.258 88.72C207.125 90.8533 204.522 91.92 201.45 91.92Z"
                    />
                </svg>
            </a>
		`;
	}
}
window.customElements.define("md-logotype", MDlogoType);
