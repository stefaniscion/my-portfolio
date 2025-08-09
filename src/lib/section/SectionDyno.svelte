<script>
    import { onMount } from "svelte";

    let section;
    let dyno;
    let obstacles = [];
    let gravity = 0.8;
    let velocity = 0;
    let jumping = false;
    let gameStarted = false;
    let gameOver = false;
    let score = 0;
    let bestScore = 0;
    let obstacleInterval;
    let gameSpeed = 6;

    // responsive scaling
    let scale = 1;
    const BASE_WIDTH = 768;
    const MIN_SCALE = 0.6; 
    const MAX_SCALE = 1.0;
    let dynoSize = 50;
    let spawnIntervalMs = 1500;

    // scale the dyno and obstacles based on the section width
    function computeScale() {
        if (!section) return 1;
        const w = section.clientWidth || BASE_WIDTH;
        // clamp per evitare sprite minuscoli
        return Math.max(MIN_SCALE, Math.min(MAX_SCALE, w / BASE_WIDTH));
    }

    // apply the scale to the dyno and obstacles
    function applyScale() {
        scale = computeScale();
       // dipende da scale
        dynoSize = Math.round(50 * scale);
        dyno.style.width = dynoSize + "px";
        dyno.style.height = dynoSize + "px";

        // fisica e velocità coerenti con la scala
        const baseSpeed = 6;
        const baseGravity = 0.8;
        const baseJump = -12;

        gameSpeed = baseSpeed * scale;
        gravity   = baseGravity * scale;
        // resetta il salto solo se non stai saltando
        if (!jumping) velocity = 0;

        // ostacoli: dimensione ed intervallo
        spawnIntervalMs = Math.round(1500 / scale); // su mobile spawna meno spesso
        obstacleFontSizePx = Math.round(32 * scale);
    }

    let obstacleFontSizePx = 32;

    //center the dyno in the middle of the section at game start
    function centerDyno() {
        if (!section || !dyno) return;
        dyno.style.left = section.clientWidth / 2 - dynoSize / 2 + "px";
        dyno.style.top = section.clientHeight / 2 - dynoSize / 2 + "px";
    }

    // start the game when the dyno is clicked
    function startGame() {
        if (gameStarted) return;
        gameStarted = true;
        gameOver = false;
        score = 0;
        // reimposta fisica in base alla scala corrente
        applyScale();
        velocity = 0;

        dyno.style.pointerEvents = "auto";
        dyno.style.top = "0px";
        fallThenRun();
    }

    // restart the game when the game is over
    function restartGame() {
        clearInterval(obstacleInterval);
        obstacles.forEach((o) => o.remove());
        obstacles = [];
        jumping = false;
        gameOver = false;
        gameStarted = false;
        score = 0;
        // ricalcola scala (potresti aver ruotato/resize)
        applyScale();
        velocity = 0;

        centerDyno();
        dyno.style.pointerEvents = "none";
    }

    // make the dyno fall and then start the game
    function fallThenRun() {
        const fallInterval = setInterval(() => {
            const top = parseInt(dyno.style.top || "0", 10);
            if (top < section.clientHeight - (dynoSize + 10)) {
                dyno.style.top = top + 4 + "px";
            } else {
                dyno.style.top = section.clientHeight - (dynoSize + 10) + "px";
                clearInterval(fallInterval);
                startObstacles();
            }
        }, 16);
    }

    // start generating obstacles
    function startObstacles() {
        clearInterval(obstacleInterval);
        obstacleInterval = setInterval(() => {
            const obstacle = document.createElement("div");
            obstacle.textContent = Math.random() > 0.5 ? "🥒" : "🥦";
            obstacle.style.position = "absolute";
            obstacle.style.bottom = "0px";
            obstacle.style.left = section.clientWidth + "px";
            obstacle.style.fontSize = obstacleFontSizePx + "px";
            obstacle.style.userSelect = "none";
            obstacle.dataset.scored = "false";
            section.appendChild(obstacle);
            obstacles.push(obstacle);
        }, spawnIntervalMs);

        requestAnimationFrame(updateGame);
    }

    // jump function
    function jump() {
        if (!gameStarted || gameOver) return;
        if (!jumping) {
            jumping = true;
            velocity = -12 * scale;
        }
    }

    // update the game state
    function updateGame() {
        const top = parseInt(dyno.style.top || "0", 10);
        velocity += gravity;
        dyno.style.top =
            Math.min(top + velocity, section.clientHeight - (dynoSize + 10)) + "px";
        if (top + velocity >= section.clientHeight - (dynoSize + 10)) {
            jumping = false;
        }

        const dynoLeft = dyno.offsetLeft;

        // rimuovi in sicurezza iterando al contrario
        for (let i = obstacles.length - 1; i >= 0; i--) {
            const obs = obstacles[i];
            const left = obs.offsetLeft - gameSpeed;
            obs.style.left = left + "px";

            const obsRight = left + obs.offsetWidth;
            if (obs.dataset.scored === "false" && obsRight < dynoLeft) {
                obs.dataset.scored = "true";
                score++;
                if (score > bestScore) {
                    bestScore = score;
                    localStorage.setItem('dyno-best-score', bestScore);
                }
                if (score % 2 === 0) gameSpeed += 1 * scale;
            }

            if (left < -obs.offsetWidth - 10) {
                obs.remove();
                obstacles.splice(i, 1);
                continue;
            }

            const dynoRect = dyno.getBoundingClientRect();
            const obsRect = obs.getBoundingClientRect();
            if (
                dynoRect.left < obsRect.left + obsRect.width &&
                dynoRect.left + dynoRect.width > obsRect.left &&
                dynoRect.top < obsRect.top + obsRect.height &&
                dynoRect.height + dynoRect.top > obsRect.top
            ) {
                endGame();
            }
        }

        if (!gameOver) requestAnimationFrame(updateGame);
    }

    // end the game
    function endGame() {
        clearInterval(obstacleInterval);
        gameOver = true;
    }

    onMount(() => {
        //load best score from localStorage
        const savedBest = localStorage.getItem('dyno-best-score');
        if (savedBest) {
            bestScore = parseInt(savedBest, 10);
        }

        // dyno setup
        dyno.style.position = "absolute";
        dyno.style.objectFit = "contain";
        dyno.style.transition = "top 0.05s linear";
        dyno.style.userSelect = "none";

        // section setup
        section.style.position = "relative";
        section.style.overflow = "hidden";

        // applica scala iniziale + dimensioni
        applyScale();

        // center the dyno
        centerDyno();
        dyno.style.pointerEvents = "none";

        // events
        dyno.addEventListener("click", startGame);
        section.addEventListener("click", jump);
        document.addEventListener("keydown", (e) => {
            if (e.code === "Space") jump();
        });

        window.addEventListener("resize", () => {
            const wasIdle = !gameStarted && !gameOver;
            applyScale();
            if (wasIdle) centerDyno();
        });
    });
</script>

<section bind:this={section} class="bg-neutral-900 h-48 relative select-none">
    {#if !gameStarted && !gameOver}
        <button
            class="absolute inset-0 flex items-center justify-center"
            on:click={startGame}
            aria-label="Start game"
        >
            <span
                class="w-24 h-24 rounded-full bg-neutral-950 hover:bg-amber-600 transition-colors duration-200"
            ></span>
        </button>
    {/if}

    <img
        bind:this={dyno}
        src="img/egg/toucan-icon.webp"
        alt="Toucan"
        class="cursor-pointer"
    />

    {#if gameStarted && !gameOver}
        <div class="absolute top-2 right-3 z-10">
            <div
                class="text-white font-mono text-sm px-2 py-1 rounded bg-black/45 backdrop-blur-sm"
            >
                Score: {score} — Best: {bestScore}
            </div>
        </div>
    {/if}

    {#if gameOver}
        <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 cursor-pointer text-center px-4"
            on:click={restartGame}
        >
            <div class="text-amber-600 font-bold text-xl">GAME OVER</div>
            <div class="text-white/90 font-mono mt-1">
                Score: {score} — Best: {bestScore}
            </div>
            <div class="text-white/70 text-sm mt-2">
                Clicca qui per ripartire
            </div>
        </div>
    {/if}
</section>
