<script>
  import { onMount } from 'svelte';

  let activatedOnce = false;

  // Activate the 1998 mode
  function activate1998Mode() {
        // Prevent multiple activations
    if (activatedOnce) return;
    activatedOnce = true;

    alert("Benvenuto nel futuro™... Benvenuto nel 1998!");
    document.body.classList.add("mode-1998");
    inject1998Styles();
    insert1998Banner();
  }

  // Inject styles for the 1998 mode
  function inject1998Styles() {
    if (document.getElementById("style-1998")) return;

    const style = document.createElement("style");
    style.id = "style-1998";
    style.textContent = `
      body.mode-1998 {
        cursor: url("img/egg/cursor.cur"), auto !important;
      }

      body.mode-1998 * {
        font-family: "Comic Sans MS", cursive !important;
        color: yellow;
        animation: rainbowText 1s infinite !important;
      }

      body.mode-1998 .devicon,
      body.mode-1998 [class*="devicon-"] {
        font-family: "devicon" !important;
      }

      body.mode-1998 section {
        background: url("img/egg/stars-background.gif") repeat !important;
        border-bottom: 2px dashed magenta;
      }

      body.mode-1998 a {
        color: cyan !important;
        text-decoration: blink !important;
      }

      @keyframes rainbowText {
        0% { color: red; }
        20% { color: orange; }
        40% { color: yellow; }
        60% { color: green; }
        80% { color: blue; }
        100% { color: violet; }
      }
    `;
    document.head.appendChild(style);
  }

  // Creates a marquee banner for the 1998 mode
  function insert1998Banner() {
    if (document.getElementById("banner-1998")) return;

    const section = document.createElement("section");
    section.id = "banner-1998";
    section.innerHTML = `
      <marquee behavior="scroll" direction="left" class="text-4xl">
        Benvenuto nel futuro™... Benvenuto nel 1998!
      </marquee>
    `;

    const firstSection = document.querySelector("section");
    if (firstSection) {
      firstSection.parentNode.insertBefore(section, firstSection);
    } else {
      document.body.prepend(section);
    }
  }

  // Konami Code listener setup
  onMount(() => {
    function Egg() {
      this.eggs = [];
      this.hooks = [];
      this.kps = [];
      this.activeEgg = '';
      this.ignoredKeys = [16];
    }

    Egg.prototype.__execute = function(fn) {
      return typeof fn === 'function' && fn.call(this);
    };

    Egg.prototype.__toCharCodes = function(keys) {
      const special = {
        "slash": 191, "up": 38, "down": 40, "left": 37, "right": 39,
        "enter": 13, "space": 32, "ctrl": 17, "alt": 18, "tab": 9, "esc": 27
      };

      if (typeof keys === 'string') {
        keys = keys.split(',').map(k => k.trim());
      }

      return keys.map(key => {
        if (key === parseInt(key, 10)) return key;
        if (special[key]) return special[key];
        return key.charCodeAt(0);
      }).join(',');
    };

    Egg.prototype.AddCode = function(keys, fn, metadata) {
      this.eggs.push({
        keys: this.__toCharCodes(keys),
        fn,
        metadata
      });
      return this;
    };

    Egg.prototype.AddHook = function(fn) {
      this.hooks.push(fn);
      return this;
    };

    Egg.prototype.handleEvent = function(e) {
      let keyCode = e.which;
      const isLetter = keyCode >= 65 && keyCode <= 90;

      if (
        e.type === "keydown" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.shiftKey
      ) {
        const tag = e.target.tagName;
        if ((tag === "HTML" || tag === "BODY") && isLetter) {
          e.preventDefault();
          return;
        }
      }

      if (e.type === "keyup" && this.eggs.length > 0) {
        if (isLetter && !e.shiftKey) keyCode += 32;
        if (this.ignoredKeys.indexOf(keyCode) === -1) this.kps.push(keyCode);

        this.eggs.forEach((egg) => {
          if (this.kps.toString().includes(egg.keys)) {
            this.kps = [];
            this.activeEgg = egg;
            this.__execute(egg.fn);
            this.hooks.forEach(this.__execute, this);
            this.activeEgg = '';
          }
        });
      }
    };

    Egg.prototype.Listen = function() {
      document.addEventListener("keydown", this, false);
      document.addEventListener("keyup", this, false);
      return this;
    };

    // Alias
    Egg.prototype.listen = Egg.prototype.Listen;
    Egg.prototype.addCode = Egg.prototype.AddCode;
    Egg.prototype.addHook = Egg.prototype.AddHook;

    // Initialize and add the Konami Code
    const egg = new Egg();
    egg
      .AddCode("up,up,down,down,left,right,left,right,b,a", activate1998Mode, "konami-code")
      .AddHook(() => {
        console.log("Konami Code entered: 1998 mode activated! Enjoy the future™!");
      })
      .Listen();
  });
</script>
