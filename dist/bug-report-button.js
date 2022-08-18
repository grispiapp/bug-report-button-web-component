import"https://grispiapp.github.io/screenshot-button-web-component/screenshot-button.js";const d="(Optional) Message or bug description",s="Send",c="Sending...",l="Cancel",r="Error",h="(TIMEOUT) Sending might not be successful, time out occurred!",u="10000",p="https://i.imgur.com/MXRT775.png";export default class o extends HTMLElement{static SEND_EVENT_NAME="BugReportButton:Send";static SENDING_DONE_EVENT_NAME="BugReportButton:SendingDone";static#h=`
  			<style>
  			  button {
  			    cursor: pointer;
  			  }
  			  section {
  			    backdrop-filter: blur(3px);
            bottom: 0;
            display: none;
            height: auto;
            left: 0;
            padding: 50px;
            position: fixed;
            right: 0;
            top: 0;
            overflow: auto;
            width: auto;
  			  }
  			  header {
  			      text-align: right;
  			  }
  			  main {
            background: #f7f7f7;
            border-radius: 3px;
            border: 1px solid #b3adad;
            min-height: 600px;
            min-width: 600px;
            padding: 1% 10%;
            position: relative;
  			  }
  			  main > div {
            display: flex;
            flex-direction: column;
  			  }
  			  screenshot-button {
  			    display: none;
  			  }
  			  textarea {
  			      margin: 20px auto;
  			      min-width: 600px;
  			  }
          #closeBtn {
            background: none;
            border: 0;
            color: #555;
            font-family: sans-serif;
            font-size: 1.2rem;
            position: absolute;
            right: 20px;
          }
          #closeBtn:hover {
            color: #000;
          }
        	#actionBtn {
            background-color: lightgray;
            border-radius: 5px;
            border: 1px solid #333;
            color: #333;
            display: flex;
            font-family: sans-serif;
            font-size: 13pt;
            height: 30px;
            justify-content: center;
            padding-top: 3px;
            position: fixed;
            right: -65px;
            top: 50%;
            transform: rotate(-90deg);
            min-width: 150px;
        }
        #cancelBtn, #sendBtn {
          background: #f7f7f7;
          border-radius: 3px;
          border: 1px solid #b3adad;
          color: #333;
          padding: 10px 20px;
        }
        #cancelBtn:hover, #sendBtn:hover {
          background: #eee;
        }
        #captureErrorMsg {
          text-align: center;
          color: darkred;
        }
        #preview {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        </style>
        <screenshot-button></screenshot-button>
        <button id="actionBtn"></button>
        <section id="popup">
          <main>
            <button id="closeBtn">X</button>
            <div>
                <img id="preview" src="" alt="Screenshot preview"/>
                <em id="captureErrorMsg"></em>
                <textarea rows="5" placeholder="${d}"></textarea>
                <div style=" text-align: center; ">
                  <button id="cancelBtn">${l}</button>
                  <button id="sendBtn" style=" font-weight: bold; ">${s}</button>
                </div>
              </div>
          </main>
        </section>
      `;#s;#r;#e;#n;#o;#a;#t;#i;#d;constructor(){super();const e=this.attributes.getNamedItem("text")?.value||"Bug Report";this.#i=this.attributes.getNamedItem("send-timeout")?.value||u;const t=this.attachShadow({mode:"open"});t.innerHTML=o.#h;const n=t.getElementById("actionBtn");n.innerText=e,n.onclick=this.#u.bind(this),this.#s=t.querySelector("screenshot-button"),this.#r=t.getElementById("preview"),this.#e=t.getElementById("captureErrorMsg"),this.#n=t.getElementById("popup"),this.#t=t.getElementById("sendBtn"),this.#a=t.querySelector("textarea");const i=this.#l.bind(this);t.getElementById("closeBtn").onclick=i,t.getElementById("cancelBtn").onclick=i,this.#t.onclick=this.#p.bind(this),window.document.addEventListener(o.SENDING_DONE_EVENT_NAME,this.#m.bind(this))}#u(){this.#s.takeScreenshot().then(e=>{this.#c(e),this.#o=e}).catch(e=>{this.#c(null,e)})}#c(e,t){const n=this.#r;n.removeAttribute("width"),n.onload=null,e?(n.src=URL.createObjectURL(e),n.onload=()=>{n.width=n.width*.4}):(n.src=p,this.#e.innerText=`${r}: ${t}`),this.#n.style.display="block"}#l(){this.#n.style.display="none",this.#e.innerText="",this.#o=null}#p(){const e={screenshot:this.#o,message:this.#a.value};window.document.dispatchEvent(new CustomEvent(o.SEND_EVENT_NAME,{detail:e})),this.#g()}#m(e){clearTimeout(this.#d);const t=e.detail;this.#x(t?.message,t?.success,t?.keepPopupOpenOnSuccess)}#g(){this.#t.innerText=c,this.shadowRoot.querySelectorAll("button, textarea").forEach(e=>e.disabled=!0),this.#i>0&&(this.#d=setTimeout(()=>{document.dispatchEvent(new CustomEvent(o.SENDING_DONE_EVENT_NAME,{detail:{message:h}}))},this.#i))}#x(e,t,n){this.shadowRoot.querySelectorAll("button, textarea").forEach(a=>a.disabled=!1),this.#t.innerText=s;const i=t?"":`[${r}]: `;alert(i+e),t===!0&&n!==!0&&this.#l()}}window.customElements.define("bug-report-button",o);
//# sourceMappingURL=bug-report-button.js.map
