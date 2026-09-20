export class ConditionalHash extends HTMLElement {
	/**/
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
	}
	/**/
	connectedCallback() {
		this.style.display = ""
		// TODO: reactive?
		this.shadowRoot.append(...this.childNodes)
		// check current hash, and update as such
		this.hashListener = this.ownerDocument.body.addEventListener("hashchange", (event) => {
			// doesn't seem to work as intended... eh?
			this.updateDisplayedText()
		})
		this.updateDisplayedText()
	}
	/**/
	hideParagraphs() {
		for (const paragraphElement of this.paragraphs) {
			paragraphElement.style.display = "none"
		}
	}
	/**/
	updateDisplayedText() {
		this.hideParagraphs()
		const unhashedFragmentIdentifier = this.ownerDocument.location.hash.replace("#", "").toLowerCase()
		// could probably use querySelector. but it seems off with user input? don't want zhe headaches.
		for (const paragraphElement of this.paragraphs) {
			if (paragraphElement.getAttribute("hash") === unhashedFragmentIdentifier) paragraphElement.style.display = "block"
		}
	}
	/**/
	get paragraphs() {
		return [...this.shadowRoot.querySelectorAll("p")]
	}
}

customElements.define("conditional-hash", ConditionalHash)
